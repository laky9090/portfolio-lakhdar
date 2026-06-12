const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

function buildHtml(msg) {
  const safe = (s) => String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
  const company = msg.company
    ? `<tr><td style="padding:6px 0;color:#5C616B;font-family:Arial,sans-serif;font-size:13px;">Société</td><td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#0B0D10;">${safe(msg.company)}</td></tr>`
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

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ detail: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const { name, email, company, subject, message } = body;

  if (!name || typeof name !== "string" || name.length < 1 || name.length > 120) {
    return res.status(422).json({ detail: "Invalid name" });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(422).json({ detail: "Invalid email" });
  }
  if (!message || typeof message !== "string" || message.length < 5 || message.length > 4000) {
    return res.status(422).json({ detail: "Invalid message" });
  }
  if (company && (typeof company !== "string" || company.length > 160)) {
    return res.status(422).json({ detail: "Invalid company" });
  }
  if (subject && (typeof subject !== "string" || subject.length > 200)) {
    return res.status(422).json({ detail: "Invalid subject" });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ detail: "RESEND_API_KEY not configured" });
  }
  if (!NOTIFY_EMAIL) {
    return res.status(500).json({ detail: "NOTIFY_EMAIL not configured" });
  }

  const msg = {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    name, email,
    company: company || null,
    subject: subject || null,
    message,
    created_at: new Date().toISOString(),
  };

  try {
    await resend.emails.send({
      from: `Portfolio Lakhdar DAMAR <${SENDER_EMAIL}>`,
      to: [NOTIFY_EMAIL],
      reply_to: email,
      subject: `Nouveau message - ${name}${company ? ` (${company})` : ""}`,
      html: buildHtml(msg),
    });
    return res.status(200).json(msg);
  } catch (err) {
    console.error("Resend send failed:", err);
    return res.status(500).json({ detail: "Unable to send message" });
  }
};
