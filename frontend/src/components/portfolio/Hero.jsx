import { ArrowDownRight, Sparkles } from "lucide-react";
import { PROFILE, TOTAL_IT_YEARS, PM_INFRA_YEARS } from "@/data/portfolio";
import { getMark } from "@/data/companyMarks";

const CLIENT_NAMES = [
  { name: "AXA", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/7rycan9s_AXA_Logo.png" },
  { name: "Sanofi", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/2s309tp2_Logo_Sanofi.png" },
  { name: "Abeille Assurances", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/bjt3f34t_logo%20abeille%20assurances.png" },
  { name: "BNP Paribas Leasing Solutions", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/y5tbcy56_Logo%20bnp.png" },
  { name: "TotalEnergies", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/7w06ic0y_Logo_TotalEnergies.svg" },
  { name: "Lacoste", logo: "https://customer-assets.emergentagent.com/job_design-impact-16/artifacts/hp4b0use_Lacoste_logo.png" },
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#0891B2]/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-[#0891B2]/10 blur-[140px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div
              data-testid="hero-availability"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E4E7EB] bg-[#F7F8FA]/70 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#5C616B]">
                {PROFILE.contact.availability}
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif-display mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-[#0B0D10]"
            >
              Je pilote vos <em className="not-italic text-[#0891B2]">projets IT</em>
              <br />
              les plus <span className="italic text-[#0E7490]">stratégiques</span>
            </h1>

            <p
              data-testid="hero-pitch"
              className="mt-8 max-w-2xl text-lg md:text-xl text-[#5C616B] leading-relaxed"
            >
              <span className="text-[#0B0D10]">Chef de projet IT Infrastructure freelance.</span>{" "}
              {PROFILE.shortPitch}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0891B2] text-white font-medium hover:bg-[#06B6D4] transition"
              >
                <Sparkles size={16} />
                Discuter de votre projet
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition"
                />
              </a>
              <a
                href="#parcours"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E4E7EB] text-[#0B0D10] hover:border-[#0891B2]/60 hover:text-[#0891B2] transition"
              >
                Voir mon parcours
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="hero-stats-card">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#0B0D10] bg-[#0891B2]/20 px-2 py-1 rounded">
                en bref
              </span>
              <div className="mt-4 space-y-5">
                <Stat k={`${TOTAL_IT_YEARS}+`} v="ans dans l'IT" />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k={`${PM_INFRA_YEARS}+`} v="ans en pilotage IT Infra" />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="600k€" v="plus gros projet piloté" />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="7" v="secteurs régulés couverts" />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="FR / EN" v="environnements internationaux" small />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="mt-20" data-testid="hero-clients-marquee">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-line flex-1" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#8B8E94]">
              Ils m'ont fait confiance
            </span>
            <div className="accent-line flex-1" />
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {[...CLIENT_NAMES, ...CLIENT_NAMES, ...CLIENT_NAMES].map((c, i) => {
                const m = getMark(c.name);
                const short = c.name.split(" ")[0];
                return (
                  <div key={i} className="flex items-center gap-3 opacity-85 hover:opacity-100 transition">
                    {c.logo ? (
                      <div className="h-9 w-9 rounded bg-white grid place-items-center ring-1 ring-[#E4E7EB] shadow-sm p-1">
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className="h-9 w-9 rounded grid place-items-center ring-1 ring-[#E4E7EB] shadow-sm"
                        style={{ backgroundColor: m.bg, color: m.fg }}
                      >
                        <span className="text-[11px]" style={{ fontWeight: m.weight }}>{m.abbr}</span>
                      </div>
                    )}
                    <span className="font-serif-display text-xl text-[#0B0D10]">{short}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, small }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className={`font-serif-display text-[#0891B2] ${small ? "text-xl" : "text-3xl"}`}>{k}</div>
      <div className="text-right text-sm text-[#5C616B]">{v}</div>
    </div>
  );
}
