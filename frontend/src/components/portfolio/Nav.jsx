import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#profil", label: "Profil" },
  { href: "#chiffres", label: "Chiffres clés" },
  { href: "#expertises", label: "Expertises" },
  { href: "#stack", label: "Stack" },
  { href: "#parcours", label: "Parcours" },
  { href: "#certifications", label: "Certifications" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass px-5 py-3"
              : "px-2 py-2"
          }`}
        >
          <a
            href="#top"
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <span className="h-9 w-9 rounded-full border border-[#E5E1D8] grid place-items-center font-serif-display text-[#7A1F1F] text-lg group-hover:border-[#7A1F1F] transition">
              L
            </span>
            <div className="leading-tight">
              <div className="font-serif-display text-base text-[#141414]">
                Lakhdar DAMAR
              </div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A]">
                IT Project Manager
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#5C5C5C] hover:text-[#7A1F1F] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-testid="nav-cta-contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1F1F] text-white font-medium text-sm hover:bg-[#5C1818] transition"
          >
            Me contacter
            <span aria-hidden>→</span>
          </a>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-[#E5E1D8] text-[#141414]"
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
                    className="block font-mono-tech text-xs uppercase tracking-[0.2em] text-[#5C5C5C] py-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-[#7A1F1F] text-white text-sm font-medium"
                >
                  Me contacter →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
