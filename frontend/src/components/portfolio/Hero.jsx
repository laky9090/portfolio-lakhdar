import { ArrowDownRight, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const CLIENT_LOGOS = [
  { name: "AXA", url: "https://logo.clearbit.com/axa.com" },
  { name: "Sanofi", url: "https://logo.clearbit.com/sanofi.com" },
  { name: "Abeille", url: "https://logo.clearbit.com/abeille-assurances.fr" },
  { name: "BNP", url: "https://logo.clearbit.com/mabanque.bnpparibas" },
  { name: "TotalEnergies", url: "https://logo.clearbit.com/totalenergies.com" },
  { name: "Lacoste", url: "https://logo.clearbit.com/lacoste.com" },
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
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#00D8FF]/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-[#00D8FF]/10 blur-[140px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div
              data-testid="hero-availability"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#232830] bg-[#14171C]/70 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#8B8E94]">
                {PROFILE.contact.availability}
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif-display mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-[#E8E8EA]"
            >
              Je pilote vos <em className="not-italic text-[#00D8FF]">projets IT</em>
              <br />
              les plus <span className="italic text-[#00B8DC]">stratégiques.</span>
            </h1>

            <p
              data-testid="hero-pitch"
              className="mt-8 max-w-2xl text-lg md:text-xl text-[#8B8E94] leading-relaxed"
            >
              <span className="text-[#E8E8EA]">Chef de projet IT Infrastructure freelance.</span>{" "}
              {PROFILE.shortPitch}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#00D8FF] text-[#0B0D10] font-medium hover:bg-[#33E0FF] transition"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#232830] text-[#E8E8EA] hover:border-[#00D8FF]/60 hover:text-[#00D8FF] transition"
              >
                Voir mon parcours
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="hero-stats-card">
              <div className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#00D8FF]">
                /signal
              </div>
              <div className="mt-4 space-y-5">
                <Stat k="8+" v="ans de pilotage IT" />
                <div className="h-px bg-[#232830]" />
                <Stat k="4M€" v="plus gros programme livré" />
                <div className="h-px bg-[#232830]" />
                <Stat k="7" v="secteurs régulés couverts" />
                <div className="h-px bg-[#232830]" />
                <Stat k="FR / EN" v="environnements internationaux" small />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="mt-20" data-testid="hero-clients-marquee">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-line flex-1" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#6B6E74]">
              Ils m'ont fait confiance
            </span>
            <div className="accent-line flex-1" />
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) => (
                <div key={i} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition">
                  <img
                    src={l.url}
                    alt={l.name}
                    className="h-7 w-7 rounded bg-white p-1 object-contain ring-1 ring-[#232830]"
                    loading="lazy"
                  />
                  <span className="font-serif-display text-xl text-[#E8E8EA]">{l.name}</span>
                </div>
              ))}
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
      <div className={`font-serif-display text-[#00D8FF] ${small ? "text-xl" : "text-3xl"}`}>{k}</div>
      <div className="text-right text-sm text-[#8B8E94]">{v}</div>
    </div>
  );
}
