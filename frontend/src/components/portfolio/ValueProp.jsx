import { Wrench, FileSpreadsheet, Check } from "lucide-react";

const TOOLS = ["MS Project", "JIRA", "ServiceNow", "Asana", "Trello", "Gantt Project"];

export default function ValueProp() {
  return (
    <section
      id="methode"
      data-testid="valueprop-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">
              /04 — méthode & outils
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              Je m'adapte à <em className="not-italic text-[#0891B2]">votre écosystème</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C616B] text-base md:text-lg">
            Pas de friction au démarrage : je travaille avec vos outils existants — ou j'apporte
            les miens, déjà éprouvés sur le terrain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — Adapt to client tools */}
          <div
            className="relative rounded-2xl border border-[#E4E7EB] bg-[#F7F8FA] p-7 md:p-9"
            data-testid="valueprop-tools-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl border border-[#E4E7EB] bg-white grid place-items-center text-[#0891B2]">
                <Wrench size={18} strokeWidth={1.5} />
              </div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#8B8E94]">
                Vous avez déjà vos outils
              </span>
            </div>

            <p className="font-serif-display text-2xl md:text-3xl text-[#0B0D10] leading-tight">
              Je m'aligne <em className="not-italic text-[#0891B2]">vite</em> sur vos process.
            </p>

            <p className="mt-4 text-[#5C616B] leading-relaxed">
              J'ai manié l'ensemble des outils standards de pilotage projet — opérationnel
              dès la première semaine, sans courbe d'apprentissage.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="font-mono-tech text-xs px-3 py-1.5 rounded-md bg-white border border-[#E4E7EB] text-[#0B0D10]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — Excel template fallback */}
          <div
            className="relative rounded-2xl border border-[#0891B2]/40 bg-gradient-to-br from-[#0891B2]/5 to-transparent p-7 md:p-9"
            data-testid="valueprop-template-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-[#0891B2] grid place-items-center text-white">
                <FileSpreadsheet size={18} strokeWidth={1.7} />
              </div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#0891B2]">
                Pas d'outil en place ?
              </span>
            </div>

            <p className="font-serif-display text-2xl md:text-3xl text-[#0B0D10] leading-tight">
              J'arrive avec mon <em className="not-italic text-[#0891B2]">template Excel</em>.
            </p>

            <p className="mt-4 text-[#5C616B] leading-relaxed">
              Un classeur de pilotage IT prêt à l'emploi, avec un maximum de formules pour
              automatiser le reporting, le suivi des risques et le scoring — <span className="text-[#0B0D10]">sans macro</span>,
              déjà éprouvé sur plusieurs projets.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-[#0B0D10]">
              {[
                "Reporting automatisé (avancement, charges, RAG)",
                "Matrice des risques avec scoring dynamique",
                "Suivi budget, jalons et dépendances",
                "100 % formules — zéro macro, zéro VBA",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check size={14} className="mt-1 text-[#0891B2] shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
