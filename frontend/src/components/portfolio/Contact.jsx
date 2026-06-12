import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Loader2, Send } from "lucide-react";
import { useI18n } from "@/data/i18n";

// Always call the same-origin Vercel function. Ignore any leftover
// REACT_APP_BACKEND_URL that might still point to an old Emergent preview.
const CONTACT_ENDPOINT = "/api/contact";

export default function Contact() {
  const { t } = useI18n();
  const u = t.ui.contact;
  const profile = t.profile;

  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) {
      toast.error(u.error_fill);
      return;
    }
    if (message.length < 5) {
      toast.error(t.lang === "en" ? "Message too short (at least 5 characters)." : "Le message est trop court (au moins 5 caractères).");
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: form.company.trim() || undefined,
          subject: form.subject.trim() || undefined,
          message,
        }),
      });

      let data = null;
      try { data = await resp.json(); } catch { /* non-JSON response */ }

      if (!resp.ok) {
        const detail = (data && data.detail) || `HTTP ${resp.status} ${resp.statusText || ""}`.trim();
        console.error("Contact API error:", resp.status, detail, data);
        toast.error(detail || u.error_generic);
        return;
      }

      toast.success(u.success);
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact network error:", err);
      const detail = (err && err.message) ? `Réseau : ${err.message}` : u.error_generic;
      toast.error(detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="absolute inset-0 -z-10 dot-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">{u.kicker}</div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              {u.h1a}
              <em className="not-italic text-[#0891B2]">{u.h1b}</em>
            </h2>
            <p className="mt-6 text-[#5C616B] text-base md:text-lg leading-relaxed">{u.lead}</p>

            <div
              className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#E4E7EB] bg-[#F7F8FA]"
              data-testid="contact-company-badge"
            >
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0891B2]">
                {u.structureLabel}
              </span>
              <span className="font-serif-display text-sm text-[#0B0D10]">
                {profile.company.name} · {profile.company.form}
              </span>
              <span className="font-mono-tech text-[10px] text-[#8B8E94]">SIRET {profile.company.siret}</span>
            </div>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Mail} label={u.ico.email} value={profile.contact.email} href={`mailto:${profile.contact.email}`} testid="contact-email" />
              <ContactRow icon={Phone} label={u.ico.phone} value={profile.contact.phone} href={`tel:${profile.contact.phone.replace(/\s/g, "")}`} testid="contact-phone" />
              <ContactRow icon={Linkedin} label={u.ico.linkedin} value="lakhdar-damar" href={profile.contact.linkedin} testid="contact-linkedin" external />
              <ContactRow icon={MapPin} label={u.ico.location} value={profile.contact.location} testid="contact-location" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} data-testid="contact-form" className="glass rounded-2xl p-7 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label={u.field_name} required>
                  <input data-testid="contact-input-name" type="text" value={form.name} onChange={handle("name")} placeholder={u.ph_name} className={inputCls} required />
                </Field>
                <Field label={u.field_email} required>
                  <input data-testid="contact-input-email" type="email" value={form.email} onChange={handle("email")} placeholder={u.ph_email} className={inputCls} required />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label={u.field_company}>
                  <input data-testid="contact-input-company" type="text" value={form.company} onChange={handle("company")} placeholder={u.ph_company} className={inputCls} />
                </Field>
                <Field label={u.field_subject}>
                  <input data-testid="contact-input-subject" type="text" value={form.subject} onChange={handle("subject")} placeholder={u.ph_subject} className={inputCls} />
                </Field>
              </div>

              <Field label={u.field_message} required>
                <textarea data-testid="contact-input-message" rows={6} value={form.message} onChange={handle("message")} placeholder={u.ph_message} className={`${inputCls} resize-none`} required />
              </Field>

              <div className="flex items-center justify-between pt-2">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8B8E94]">
                  {u.response_24h}
                </p>
                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0891B2] text-white font-medium hover:bg-[#0E7490] transition disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {u.sending}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {u.send}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-[#E4E7EB] focus:border-[#0891B2] text-[#0B0D10] text-base placeholder:text-[#A8ACB3] py-3 outline-none transition";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#5C616B]">
        {label}
        {required && <span className="text-[#0891B2]"> *</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, testid, external }) {
  const content = (
    <>
      <div className="h-11 w-11 rounded-xl border border-[#E4E7EB] grid place-items-center text-[#0891B2]">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8B8E94]">{label}</div>
        <div className="text-[#0B0D10] text-base">{value}</div>
      </div>
    </>
  );
  const cls = "flex items-center gap-4 group hover:text-[#0891B2]";
  if (href) {
    return (
      <a href={href} data-testid={testid} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <div data-testid={testid} className={cls}>
      {content}
    </div>
  );
}
