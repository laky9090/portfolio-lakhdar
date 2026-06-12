from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Lakhdar DAMAR - Portfolio API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=160)
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(min_length=5, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Helpers ----------
def _build_notification_html(msg: ContactMessage) -> str:
    company_line = ""
    if msg.company:
        company_line = (
            "<tr><td style='padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;'>"
            "Société</td><td style='padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;'>"
            f"{msg.company}</td></tr>"
        )
    subject_line = ""
    if msg.subject:
        subject_line = (
            "<tr><td style='padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;'>"
            "Sujet</td><td style='padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;'>"
            f"{msg.subject}</td></tr>"
        )
    body = msg.message.replace("\n", "<br>")
    sent_at = msg.created_at.strftime("%d/%m/%Y à %H:%M")

    return f"""
    <div style="background:#F5F2EC;padding:24px;font-family:Arial,sans-serif;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E7EB;border-radius:12px;">
        <tr><td style="padding:24px 28px;border-bottom:1px solid #E4E7EB;">
          <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0891B2;">Portfolio - nouveau message</div>
          <div style="font-size:22px;color:#0B0D10;margin-top:6px;">Un recruteur t'a ecrit</div>
        </td></tr>
        <tr><td style="padding:20px 28px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;width:120px;">Nom</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;">{msg.name}</td></tr>
            <tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;">Email</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;"><a href="mailto:{msg.email}" style="color:#0891B2;text-decoration:none;">{msg.email}</a></td></tr>
            {company_line}
            {subject_line}
          </table>
        </td></tr>
        <tr><td style="padding:0 28px 28px;">
          <div style="margin-top:12px;padding:16px 18px;background:#F7F8FA;border:1px solid #E4E7EB;border-radius:8px;color:#0B0D10;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
            {body}
          </div>
        </td></tr>
        <tr><td style="padding:14px 28px 22px;border-top:1px solid #E4E7EB;color:#8B8E94;font-family:Arial,sans-serif;font-size:11px;">
          Recu le {sent_at} - Tu peux repondre directement a cet email
        </td></tr>
      </table>
    </div>
    """


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Lakhdar DAMAR - Portfolio API up", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    try:
        msg = ContactMessage(**payload.model_dump())
        doc = msg.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contact_messages.insert_one(doc)

        # Fire-and-forget email notification via Resend
        if RESEND_API_KEY and NOTIFY_EMAIL:
            try:
                params = {
                    "from": f"Portfolio Lakhdar DAMAR <{SENDER_EMAIL}>",
                    "to": [NOTIFY_EMAIL],
                    "reply_to": msg.email,
                    "subject": f"Nouveau message - {msg.name}"
                               + (f" ({msg.company})" if msg.company else ""),
                    "html": _build_notification_html(msg),
                }
                await asyncio.to_thread(resend.Emails.send, params)
            except Exception as mail_exc:
                logging.exception("Resend email notification failed: %s", mail_exc)

        return msg
    except HTTPException:
        raise
    except Exception as exc:
        logging.exception("Failed to store contact message")
        raise HTTPException(status_code=500, detail="Unable to save message") from exc


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts(limit: int = 100):
    docs = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            try:
                d['created_at'] = datetime.fromisoformat(d['created_at'])
            except Exception:
                d['created_at'] = datetime.now(timezone.utc)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
