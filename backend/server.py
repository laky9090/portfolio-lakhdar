from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
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
        return msg
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
