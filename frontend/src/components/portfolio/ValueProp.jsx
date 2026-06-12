import { Wrench, FileSpreadsheet, Check } from "lucide-react";
import { useI18n } from "@/data/i18n";

export default function ValueProp() {
  const { t } = useI18n();
  const u = t.ui.valueprop;
  const tools = t.stack.find((s) => /pm tools|outils projet/i.test(s.cat))?.items || [];

  return (
    <section
      id="methode"
      data-testid="valueprop-section"
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

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl border border-[#E4E7EB] bg-[#F7F8FA] p-7 md:p-9" data-testid="valueprop-tools-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl border border-[#E4E7EB] bg-white grid place-items-center text-[#0891B2]">
                <Wrench size={18} strokeWidth={1.5} />
              </div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#8B8E94]">
                {u.card1_kicker}
              </span>
            </div>

            <p className="font-serif-display text-2xl md:text-3xl text-[#0B0D10] leading-tight">
              {u.card1_h_pre}
              <em className="not-italic text-[#0891B2]">{u.card1_h_em}</em>
              {u.card1_h_post}
            </p>

            <p className="mt-4 text-[#5C616B] leading-relaxed">{u.card1_body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-tech text-xs px-3 py-1.5 rounded-md bg-white border border-[#E4E7EB] text-[#0B0D10]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-[#0891B2]/40 bg-gradient-to-br from-[#0891B2]/5 to-transparent p-7 md:p-9" data-testid="valueprop-template-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-[#0891B2] grid place-items-center text-white">
                <FileSpreadsheet size={18} strokeWidth={1.7} />
              </div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#0891B2]">
                {u.card2_kicker}
              </span>
            </div>

            <p className="font-serif-display text-2xl md:text-3xl text-[#0B0D10] leading-tight">
              {u.card2_h_pre}
              <em className="not-italic text-[#0891B2]">{u.card2_h_em}</em>
            </p>

            <p className="mt-4 text-[#5C616B] leading-relaxed">
              {u.card2_body_pre}
              <span className="text-[#0B0D10]">{u.card2_body_strong}</span>
              {u.card2_body_post}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-[#0B0D10]">
              {u.card2_bullets.map((line) => (
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
