import { useI18n } from "@/data/i18n";

export default function Footer() {
  const { t } = useI18n();
  const u = t.ui.footer;
  const profile = t.profile;
  const c = profile.company;

  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-[#EEF1F5] py-14 mt-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-serif-display text-2xl text-[#0B0D10]">{profile.name}</div>
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8B8E94] mt-1">
            {profile.role} · Freelance
          </div>
          <div className="mt-5 text-sm text-[#5C616B] leading-relaxed max-w-sm">{u.pitch}</div>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
          <div data-testid="footer-company">
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#0891B2]">
              {u.structure}
            </div>
            <div className="mt-3 space-y-1.5 text-sm text-[#0B0D10]">
              <div className="font-serif-display text-lg">
                {c.name} · {c.form}
              </div>
              <div className="text-[#5C616B]">SIRET {c.siret}</div>
              <div className="text-[#5C616B]">TVA {c.vat}</div>
              <div className="text-[#5C616B]">RCS {c.rcs}</div>
            </div>
          </div>

          <div>
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#0891B2]">
              {u.contact}
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <a
                href={`mailto:${profile.contact.email}`}
                className="block text-[#0B0D10] hover:text-[#0891B2] transition"
                data-testid="footer-email"
              >
                {profile.contact.email}
              </a>
              <a
                href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
                className="block text-[#5C616B] hover:text-[#0891B2] transition"
                data-testid="footer-phone"
              >
                {profile.contact.phone}
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#5C616B] hover:text-[#0891B2] transition"
                data-testid="footer-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-6 border-t border-[#EEF1F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#A8ACB3]">
          © {new Date().getFullYear()} {c.name} {c.form} · {u.seat} : {c.address}
        </div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#A8ACB3]">
          {u.tagline}
        </div>
      </div>
    </footer>
  );
}
