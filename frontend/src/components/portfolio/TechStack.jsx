import { useState } from "react";
import { STACK } from "@/data/portfolio";

export default function TechStack() {
  const [active, setActive] = useState(STACK[0].cat);
  const current = STACK.find((s) => s.cat === active);

  return (
    <section
      id="stack"
      data-testid="stack-section"
      className="relative py-24 md:py-32 border-t border-[#1A1D22]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#00D8FF]">
              /03 — stack technique
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#E8E8EA] leading-[0.95]">
              Le terrain. <em className="not-italic text-[#00D8FF]">Pas que la slide.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#8B8E94] text-base md:text-lg">
            Une connaissance opérationnelle des couches infra, cloud et sécurité pour échanger
            d'égal à égal avec les équipes techniques.
          </p>
        </div>

        <div className="glass rounded-3xl p-4 md:p-6">
          <div className="flex flex-wrap gap-2">
            {STACK.map((s) => (
              <button
                key={s.cat}
                onClick={() => setActive(s.cat)}
                data-testid={`stack-tab-${s.cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 py-2 rounded-full font-mono-tech text-[11px] uppercase tracking-[0.2em] transition border ${
                  active === s.cat
                    ? "bg-[#00D8FF] text-[#0B0D10] border-[#00D8FF]"
                    : "bg-transparent text-[#8B8E94] border-[#232830] hover:text-[#E8E8EA] hover:border-[#6B6E74]"
                }`}
              >
                {s.cat}
              </button>
            ))}
          </div>

          <div className="mt-7 border-t border-[#232830] pt-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#6B6E74] mb-5">
              {current.cat} · {current.items.length} entrées
            </div>
            <div className="flex flex-wrap gap-2.5">
              {current.items.map((item) => (
                <span
                  key={item}
                  data-testid={`stack-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="font-mono-tech text-xs px-3 py-1.5 rounded-md bg-[#00D8FF]/5 border border-[#00D8FF]/25 text-[#00D8FF] hover:bg-[#00D8FF]/10 hover:border-[#00D8FF]/50 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
