import { Check, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/data/i18n";

export default function Realisations() {
  const { t } = useI18n();
  const u = t.ui.realisations;

  return (
    <section
      id="realisations"
      data-testid="realisations-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">
          {u.kicker}
        </div>

        <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
          {u.h1}
        </h2>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl text-[#0B0D10]/90 font-serif-display italic text-[#0891B2] leading-snug">
          {u.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-2" data-testid="realisations-tags">
          {u.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-tech text-xs px-3 py-1.5 rounded-md bg-white border border-[#E4E7EB] text-[#0B0D10]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 max-w-3xl space-y-6 text-base md:text-lg text-[#5C616B] leading-relaxed">
          {u.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl" data-testid="realisations-points">
          {u.points.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm md:text-base text-[#0B0D10]">
              <Check size={15} className="mt-1 text-[#0891B2] shrink-0" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            href={u.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="realisations-cta"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0891B2] text-white font-medium hover:bg-[#0E7490] transition whitespace-nowrap"
          >
            {u.cta}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
