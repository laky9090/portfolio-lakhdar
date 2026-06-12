import { MapPin, Linkedin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="profil"
      data-testid="about-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5 relative" data-testid="about-portrait">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl bg-[#0891B2]/15" aria-hidden />
              <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-[#E4E7EB] shadow-[0_20px_60px_-20px_rgba(8,145,178,0.25)]">
                <img
                  src={PROFILE.photo}
                  alt="Lakhdar DAMAR — Chef de Projet IT Infrastructure"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0D10]/55 to-transparent" />
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="font-serif-display text-2xl leading-tight">Lakhdar DAMAR</div>
                    <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] opacity-90 mt-1">
                      Chef de projet IT · Freelance
                    </div>
                  </div>
                  <a
                    href={PROFILE.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-9 w-9 rounded-full bg-white/15 backdrop-blur-md grid place-items-center hover:bg-white/25 transition"
                    data-testid="about-portrait-linkedin"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="mt-6 flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#8B8E94] lg:max-w-md mx-auto lg:mx-0"
              data-testid="about-location"
            >
              <MapPin size={13} className="text-[#0891B2]" />
              {PROFILE.contact.location}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">
              /00 — profil
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-5xl lg:text-6xl text-[#0B0D10] leading-[1.02]">
              Aligner la <em className="not-italic text-[#0891B2]">technique</em>
              <br />
              et le <em className="not-italic text-[#0E7490]">métier</em>
            </h2>

            <p className="mt-8 text-xl md:text-2xl text-[#0B0D10]/90 font-serif-display leading-snug">
              <em>Chef de projet IT Infrastructure</em> avec une solide expertise dans le pilotage
              de projets IT complexes en environnements{" "}
              <span className="text-[#0891B2]">multi-cloud (Azure), on-premise et hybrides</span>.
            </p>

            <p className="mt-6 text-base md:text-lg text-[#5C616B] leading-relaxed">
              Spécialisé dans la coordination transverse d'équipes techniques internationales, la
              conduite du changement et la livraison de projets dans des contextes réglementés
              exigeants — <span className="text-[#0B0D10]">Banque, Assurance, Pharma, Industrie</span>.
              Reconnu pour ma capacité à aligner les enjeux techniques et métier tout en assurant
              le respect des délais, budgets et standards de sécurité.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 pt-8 border-t border-[#EEF1F5]">
              <Pill label="Méthodes" value="Scrum · PRINCE2 · ITIL · Cycle en V" />
              <Pill label="Cloud" value="Azure · Hybride · On-Prem" />
              <Pill label="Secteurs" value="Banque · Assurance · Pharma · Industrie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ label, value }) {
  return (
    <div>
      <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8B8E94]">
        {label}
      </div>
      <div className="mt-2 text-sm text-[#0B0D10]">{value}</div>
    </div>
  );
}
