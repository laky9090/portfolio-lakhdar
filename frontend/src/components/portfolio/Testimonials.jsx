import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 border-t border-[#1A1D22]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#00D8FF]">
            /06 — témoignages
          </div>
          <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#E8E8EA] leading-[0.95]">
            Ce que disent <em className="not-italic text-[#00D8FF]">les COPIL.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="relative glass rounded-2xl p-7 md:p-8 flex flex-col hover:border-[#00D8FF]/40 transition"
            >
              <Quote size={28} className="text-[#00D8FF]/70 mb-5" strokeWidth={1.5} />
              <blockquote className="font-serif-display text-xl text-[#E8E8EA] leading-snug flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[#232830]">
                <div className="text-sm text-[#E8E8EA]">{t.name}</div>
                <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#6B6E74] mt-1">
                  {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#4A4D52]">
          * Témoignages anonymisés — références nominatives disponibles sur demande.
        </p>
      </div>
    </section>
  );
}
