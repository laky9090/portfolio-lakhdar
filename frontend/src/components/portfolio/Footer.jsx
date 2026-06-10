import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-[#EEF1F5] py-12 mt-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-serif-display text-2xl text-[#0B0D10]">{PROFILE.name}</div>
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8B8E94] mt-1">
            {PROFILE.role} · Freelance
          </div>
        </div>
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#A8ACB3]">
          © {new Date().getFullYear()} — Conçu pour les recruteurs exigeants.
        </div>
      </div>
    </footer>
  );
}
