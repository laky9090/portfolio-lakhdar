function getEnv() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NOTIFY_EMAIL: process.env.NOTIFY_EMAIL,
    SENDER_EMAIL: process.env.SENDER_EMAIL || "onboarding@resend.dev",
  };
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function safe(s) {
  return String(s == null ? "" : s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

function buildHtml(msg) {
  const company = msg.company
    ? `<tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;">Societe</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;">${safe(msg.company)}</td></tr>`
    : "";
  const subject = msg.subject
    ? `<tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;">Sujet</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;">${safe(msg.subject)}</td></tr>`
    : "";
  const body = safe(msg.message).replace(/\n/g, "<br>");
  const sentAt = new Date(msg.created_at).toLocaleString("fr-FR");

  return `
    <div style="background:#F5F2EC;padding:24px;font-family:Arial,sans-serif;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E7EB;border-radius:12px;">
        <tr><td style="padding:24px 28px;border-bottom:1px solid #E4E7EB;">
          <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0891B2;">Portfolio - nouveau message</div>
          <div style="font-size:22px;color:#0B0D10;margin-top:6px;">Un recruteur t'a ecrit</div>
        </td></tr>
        <tr><td style="padding:20px 28px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;width:120px;">Nom</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;">${safe(msg.name)}</td></tr>
            <tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;">Email</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;"><a href="mailto:${safe(msg.email)}" style="color:#0891B2;text-decoration:none;">${safe(msg.email)}</a></td></tr>
            ${company}
            ${subject}
          </table>
        </td></tr>
        <tr><td style="padding:0 28px 28px;">
          <div style="margin-top:12px;padding:16px 18px;background:#F7F8FA;border:1px solid #E4E7EB;border-radius:8px;color:#0B0D10;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
            ${body}
          </div>
        </td></tr>
        <tr><td style="padding:14px 28px 22px;border-top:1px solid #E4E7EB;color:#8B8E94;font-family:Arial,sans-serif;font-size:11px;">
          Recu le ${sentAt} - Tu peux repondre directement a cet email
        </td></tr>
      </table>
    </div>
  `;
}

async function readBody(req) {
  // Vercel auto-parses JSON when Content-Type is application/json,
  // but we add a manual fallback for raw streams.
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string" && req.body.length) {
    try { return JSON.parse(req.body); } catch { /* fall through */ }
  }
  return await new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
    });
    req.on("error", reject);
  });
}

module.exports = async function handler(req, res) {
  setCors(res);
  const { RESEND_API_KEY, NOTIFY_EMAIL, SENDER_EMAIL } = getEnv();

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Diagnostics endpoint: GET /api/contact returns env var status (no values)
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      message: "Contact endpoint ready",
      env: {
        RESEND_API_KEY: RESEND_API_KEY ? "set" : "missing",
        NOTIFY_EMAIL: NOTIFY_EMAIL ? "set" : "missing",
        SENDER_EMAIL: SENDER_EMAIL ? "set" : "missing",
      },
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, GET, OPTIONS");
    return res.status(405).json({ detail: "Method not allowed" });
  }

  // Body parsing
  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    return res.status(400).json({ detail: "Invalid JSON body" });
  }
  const { name, email, company, subject, message } = body || {};

  // Validation
  if (!name || typeof name !== "string" || name.length < 1 || name.length > 120) {
    return res.status(422).json({ detail: "Invalid name" });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(422).json({ detail: "Invalid email" });
  }
  if (!message || typeof message !== "string" || message.length < 5 || message.length > 4000) {
    return res.status(422).json({ detail: "Invalid message" });
  }
  if (company != null && (typeof company !== "string" || company.length > 160)) {
    return res.status(422).json({ detail: "Invalid company" });
  }
  if (subject != null && (typeof subject !== "string" || subject.length > 200)) {
    return res.status(422).json({ detail: "Invalid subject" });
  }

  if (!RESEND_API_KEY) {
    return res.status(500).json({ detail: "Server misconfigured: RESEND_API_KEY missing" });
  }
  if (!NOTIFY_EMAIL) {
    return res.status(500).json({ detail: "Server misconfigured: NOTIFY_EMAIL missing" });
  }

  const msg = {
    id: (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: String(name).trim(),
    email: String(email).trim(),
    company: company ? String(company).trim() : null,
    subject: subject ? String(subject).trim() : null,
    message: String(message).trim(),
    created_at: new Date().toISOString(),
  };

  try {
    const payload = {
      from: `Portfolio Lakhdar DAMAR <${SENDER_EMAIL}>`,
      to: [NOTIFY_EMAIL],
      reply_to: msg.email,
      subject: `Nouveau message - ${msg.name}${msg.company ? ` (${msg.company})` : ""}`,
      html: buildHtml(msg),
    };

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      console.error("Resend API error:", resp.status, data);
      const reason = (data && (data.message || data.name)) || `HTTP ${resp.status}`;
      return res.status(502).json({ detail: `Resend: ${reason}` });
    }

    return res.status(200).json({ ...msg, resend_id: data && data.id });
  } catch (err) {
    console.error("Resend send threw:", err && err.message ? err.message : err);
    return res.status(500).json({ detail: `Unable to send message: ${err && err.message ? err.message : "unknown error"}` });
  }
};
