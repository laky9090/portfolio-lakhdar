import * as Icons from "lucide-react";
import { EXPERTISES } from "@/data/portfolio";

export default function Expertise() {
  return (
    <section
      id="expertises"
      data-testid="expertise-section"
      className="relative py-24 md:py-32 border-t border-[#EDE9DF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#7A1F1F]">
              /02 — expertises clés
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#141414] leading-[0.95]">
              Six piliers, <em className="not-italic text-[#7A1F1F]">zéro angle mort.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C5C5C] text-base md:text-lg">
            Une méthode complète, de la définition du périmètre jusqu'au transfert au RUN — chaque
            pilier est éprouvé sur des programmes critiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERTISES.map((e, i) => {
            const Icon = Icons[e.icon] || Icons.Sparkles;
            return (
              <div
                key={e.title}
                data-testid={`expertise-card-${i}`}
                className="group relative rounded-2xl border border-[#E5E1D8] bg-[#FFFFFF] p-7 hover:border-[#7A1F1F]/40 transition duration-500 overflow-hidden"
              >
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#7A1F1F]/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl border border-[#E5E1D8] grid place-items-center text-[#7A1F1F] group-hover:border-[#7A1F1F]/60 group-hover:bg-[#7A1F1F]/5 transition">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#A0A0A0]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl text-[#141414] mt-6 leading-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm text-[#5C5C5C] leading-relaxed">{e.short}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
