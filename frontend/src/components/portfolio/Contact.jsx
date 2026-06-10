import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Loader2, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Merci de remplir nom, email et message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message envoyé. Je vous réponds sous 24h.");
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Une erreur est survenue, réessayez.";
      toast.error(detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 border-t border-[#EDE9DF]"
    >
      <div className="absolute inset-0 -z-10 dot-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#7A1F1F]">
              /07 — contact
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#141414] leading-[0.95]">
              Parlons de votre <em className="not-italic text-[#7A1F1F]">prochain projet.</em>
            </h2>
            <p className="mt-6 text-[#5C5C5C] text-base md:text-lg leading-relaxed">
              Cadrage, audit, pilotage, mise en production — je réponds sous 24h ouvrées.
              Disponibilité immédiate pour mission freelance.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Mail} label="Email" value={PROFILE.contact.email} href={`mailto:${PROFILE.contact.email}`} testid="contact-email" />
              <ContactRow icon={Phone} label="Téléphone" value={PROFILE.contact.phone} href={`tel:${PROFILE.contact.phone.replace(/\s/g, "")}`} testid="contact-phone" />
              <ContactRow icon={Linkedin} label="LinkedIn" value="lakhdar-damar" href={PROFILE.contact.linkedin} testid="contact-linkedin" external />
              <ContactRow icon={MapPin} label="Localisation" value={PROFILE.contact.location} testid="contact-location" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="glass rounded-2xl p-7 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Nom" required>
                  <input
                    data-testid="contact-input-name"
                    type="text"
                    value={form.name}
                    onChange={handle("name")}
                    placeholder="Votre nom"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    data-testid="contact-input-email"
                    type="email"
                    value={form.email}
                    onChange={handle("email")}
                    placeholder="vous@entreprise.com"
                    className={inputCls}
                    required
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Société">
                  <input
                    data-testid="contact-input-company"
                    type="text"
                    value={form.company}
                    onChange={handle("company")}
                    placeholder="Votre entreprise"
                    className={inputCls}
                  />
                </Field>
                <Field label="Sujet">
                  <input
                    data-testid="contact-input-subject"
                    type="text"
                    value={form.subject}
                    onChange={handle("subject")}
                    placeholder="Mission, audit, etc."
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Message" required>
                <textarea
                  data-testid="contact-input-message"
                  rows={6}
                  value={form.message}
                  onChange={handle("message")}
                  placeholder="Contexte, périmètre, deadline…"
                  className={`${inputCls} resize-none`}
                  required
                />
              </Field>

              <div className="flex items-center justify-between pt-2">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                  Réponse sous 24h ouvrées
                </p>
                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A1F1F] text-white font-medium hover:bg-[#5C1818] transition disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Envoi…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Envoyer le message
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
  "w-full bg-transparent border-b border-[#E5E1D8] focus:border-[#7A1F1F] text-[#141414] text-base placeholder:text-[#A0A0A0] py-3 outline-none transition";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]">
        {label}
        {required && <span className="text-[#7A1F1F]"> *</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, testid, external }) {
  const content = (
    <>
      <div className="h-11 w-11 rounded-xl border border-[#E5E1D8] grid place-items-center text-[#7A1F1F]">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8A8A8A]">
          {label}
        </div>
        <div className="text-[#141414] text-base">{value}</div>
      </div>
    </>
  );
  const cls = "flex items-center gap-4 group hover:text-[#7A1F1F]";
  if (href) {
    return (
      <a
        href={href}
        data-testid={testid}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
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
