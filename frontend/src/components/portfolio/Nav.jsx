import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useI18n } from "@/data/i18n";

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { href: "#profil", label: t.ui.nav.profil },
    { href: "#chiffres", label: t.ui.nav.chiffres },
    { href: "#expertises", label: t.ui.nav.expertises },
    { href: "#stack", label: t.ui.nav.stack },
    { href: "#methode", label: t.ui.nav.methode },
    { href: "#parcours", label: t.ui.nav.parcours },
    { href: "#certifications", label: t.ui.nav.certifications },
    { href: "#realisations", label: t.ui.nav.realisations },
    { href: "#contact", label: t.ui.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
            scrolled ? "glass px-5 py-3" : "px-2 py-2"
          }`}
        >
          <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
            <img
              src={t.profile.photo}
              alt={t.profile.name}
              className="h-10 w-10 rounded-full object-cover object-top ring-1 ring-[#E4E7EB] group-hover:ring-[#0891B2] transition"
            />
            <div className="leading-tight">
              <div className="font-serif-display text-base text-[#0B0D10]">{t.profile.name}</div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8B8E94]">
                {t.profile.role}
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#5C616B] hover:text-[#0891B2] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLang}
              data-testid="nav-lang-toggle"
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full border border-[#E4E7EB] text-[#0B0D10] text-xs font-mono-tech uppercase tracking-[0.18em] hover:border-[#0891B2] hover:text-[#0891B2] transition"
            >
              <Languages size={13} />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <a
              href={t.profile.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              data-testid="nav-cta-cv"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E4E7EB] text-[#0B0D10] text-sm hover:border-[#0891B2] hover:text-[#0891B2] transition"
            >
              {t.ui.nav.cv}
            </a>
            <a
              href={t.profile.contact.calUrl}
              {...(t.profile.contact.calUrl.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-testid="nav-cta-cal"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0891B2] text-white font-medium text-sm hover:bg-[#0E7490] transition whitespace-nowrap"
            >
              {t.ui.nav.cta}
              <span aria-hidden>→</span>
            </a>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-[#E4E7EB] text-[#0B0D10]"
            aria-label="menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-2xl p-5" data-testid="mobile-menu">
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-mono-tech text-xs uppercase tracking-[0.2em] text-[#5C616B] py-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-2.5 rounded-full border border-[#E4E7EB] text-xs font-mono-tech uppercase tracking-[0.18em]"
                >
                  {lang === "fr" ? "EN" : "FR"}
                </button>
                <a
                  href={t.profile.contact.calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0891B2] text-white text-sm font-medium"
                >
                  {t.ui.nav.cta} →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
