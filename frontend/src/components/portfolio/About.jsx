import { PROFILE } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="profil"
      data-testid="about-section"
      className="relative py-24 md:py-32 border-t border-[#1A1D22]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#00D8FF]">
              /00 — profil
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-5xl text-[#E8E8EA] leading-[1.05]">
              Aligner la <em className="not-italic text-[#00D8FF]">technique</em> et le <em className="not-italic text-[#00B8DC]">métier.</em>
            </h2>
            <div className="mt-8 glass rounded-2xl p-5 inline-flex items-center gap-4" data-testid="about-availability">
              <div className="h-12 w-12 rounded-full bg-[#00D8FF]/8 border border-[#00D8FF]/30 grid place-items-center font-serif-display text-[#00D8FF] text-xl">
                LD
              </div>
              <div>
                <div className="text-[#E8E8EA] text-sm font-medium">Lakhdar DAMAR</div>
                <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#6B6E74]">
                  {PROFILE.contact.location}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-[#E8E8EA]/90 font-serif-display leading-snug">
              <em>Chef de projet IT Infrastructure</em> avec une solide expertise dans le pilotage
              de projets IT complexes en environnements{" "}
              <span className="text-[#00D8FF]">multi-cloud (Azure), on-premise et hybrides</span>.
            </p>

            <p className="mt-8 text-base md:text-lg text-[#8B8E94] leading-relaxed">
              Spécialisé dans la coordination transverse d'équipes techniques internationales, la
              conduite du changement et la livraison de projets dans des contextes réglementés
              exigeants — <span className="text-[#E8E8EA]">Banque, Assurance, Pharma, Industrie</span>.
              Reconnu pour ma capacité à aligner les enjeux techniques et métier tout en assurant
              le respect des délais, budgets et standards de sécurité.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 pt-8 border-t border-[#1A1D22]">
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
      <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#6B6E74]">
        {label}
      </div>
      <div className="mt-2 text-sm text-[#E8E8EA]">{value}</div>
    </div>
  );
}
