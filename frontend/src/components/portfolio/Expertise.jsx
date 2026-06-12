import * as Icons from "lucide-react";
import { useI18n } from "@/data/i18n";

export default function Expertise() {
  const { t } = useI18n();
  const u = t.ui.expertise;
  return (
    <section
      id="expertises"
      data-testid="expertise-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">{u.kicker}</div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              {u.h1a}
              <em className="not-italic text-[#0891B2]">{u.h1b}</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C616B] text-base md:text-lg">{u.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.expertises.map((e, i) => {
            const Icon = Icons[e.icon] || Icons.Sparkles;
            return (
              <div
                key={i}
                data-testid={`expertise-card-${i}`}
                className="group relative rounded-2xl border border-[#E4E7EB] bg-[#F7F8FA] p-7 hover:border-[#0891B2]/40 transition duration-500 overflow-hidden"
              >
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#0891B2]/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl border border-[#E4E7EB] bg-white grid place-items-center text-[#0891B2] group-hover:border-[#0891B2]/60 group-hover:bg-[#0891B2]/5 transition">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8B8E94]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B0D10] mt-6 leading-tight">{e.title}</h3>
                <p className="mt-3 text-sm text-[#5C616B] leading-relaxed">{e.short}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
