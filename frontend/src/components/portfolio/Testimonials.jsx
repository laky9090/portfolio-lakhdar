import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 border-t border-[#1A1A1E]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">
            /06 — témoignages
          </div>
          <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-white leading-[0.95]">
            Ce que disent <em className="not-italic text-[#D4AF37]">les COPIL.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="relative glass rounded-2xl p-7 md:p-8 flex flex-col hover:border-[#D4AF37]/40 transition"
            >
              <Quote size={28} className="text-[#D4AF37]/70 mb-5" strokeWidth={1.5} />
              <blockquote className="font-serif-display text-xl text-white leading-snug flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[#1f1f23]">
                <div className="text-sm text-white">{t.name}</div>
                <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#71717A] mt-1">
                  {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#52525B]">
          * Témoignages anonymisés — références nominatives disponibles sur demande.
        </p>
      </div>
    </section>
  );
}
