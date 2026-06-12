import { useState } from "react";
import { useI18n } from "@/data/i18n";

export default function TechStack() {
  const { t } = useI18n();
  const u = t.ui.stack;
  const stack = t.stack;
  const [active, setActive] = useState(stack[0].cat);
  const current = stack.find((s) => s.cat === active) || stack[0];

  return (
    <section
      id="stack"
      data-testid="stack-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">{u.kicker}</div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              {u.h1a}
              <em className="not-italic text-[#0891B2]">{u.h1b}</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C616B] text-base md:text-lg">{u.lead}</p>
        </div>

        <div className="glass rounded-3xl p-4 md:p-6">
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <button
                key={s.cat}
                onClick={() => setActive(s.cat)}
                data-testid={`stack-tab-${s.cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 py-2 rounded-full font-mono-tech text-[11px] uppercase tracking-[0.2em] transition border ${
                  active === s.cat
                    ? "bg-[#0891B2] text-white border-[#0891B2]"
                    : "bg-transparent text-[#5C616B] border-[#E4E7EB] hover:text-[#0B0D10] hover:border-[#8A8A8A]"
                }`}
              >
                {s.cat}
              </button>
            ))}
          </div>

          <div className="mt-7 border-t border-[#E4E7EB] pt-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8B8E94] mb-5">
              {current.cat} · {current.items.length} {u.entries}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {current.items.map((item) => (
                <span
                  key={item}
                  data-testid={`stack-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="font-mono-tech text-xs px-3 py-1.5 rounded-md bg-[#0891B2]/5 border border-[#0891B2]/25 text-[#0891B2] hover:bg-[#0891B2]/10 hover:border-[#0891B2]/50 transition"
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
