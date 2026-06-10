import { EXPERIENCES } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section
      id="parcours"
      data-testid="timeline-section"
      className="relative py-24 md:py-32 border-t border-[#EDE9DF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#7A1F1F]">
            /04 — parcours
          </div>
          <div className="grid lg:grid-cols-12 gap-10 mt-4 items-end">
            <h2 className="lg:col-span-7 font-serif-display text-4xl md:text-6xl text-[#141414] leading-[0.95]">
              Huit ans. <em className="not-italic text-[#7A1F1F]">Huit terrains.</em>
            </h2>
            <p className="lg:col-span-5 text-[#5C5C5C] text-base md:text-lg">
              Banque, assurance, pharma, industrie, retail. Des programmes On-Prem, Cloud et
              hybrides — toujours en environnement réglementé ou international.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <article
                  key={exp.company}
                  data-testid={`timeline-item-${i}`}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-7 z-10">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#7A1F1F] glow-gold" />
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="rounded-2xl border border-[#E5E1D8] bg-[#FFFFFF] p-7 md:p-8 hover:border-[#7A1F1F]/40 transition group">
                      <div
                        className={`flex items-center gap-4 ${
                          isLeft ? "md:justify-end md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="h-14 w-14 rounded-xl bg-white p-2 grid place-items-center shrink-0 ring-1 ring-[#E5E1D8] shadow-sm relative">
                          <span className="absolute inset-0 grid place-items-center font-serif-display text-xl text-[#141414]">
                            {exp.company[0]}
                          </span>
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="relative max-h-full max-w-full object-contain bg-white"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <div className={isLeft ? "md:text-right" : ""}>
                          <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8A8A8A]">
                            {exp.period} · {exp.duration}
                          </div>
                          <h3 className="font-serif-display text-2xl md:text-3xl text-[#141414] leading-tight">
                            {exp.company}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`mt-4 text-sm text-[#7A1F1F] ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.role}
                      </div>

                      <p
                        className={`mt-3 text-sm text-[#5C5C5C] leading-relaxed ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.context}
                      </p>

                      <ul
                        className={`mt-5 space-y-2.5 text-sm text-[#141414]/90 ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className={`flex gap-2.5 ${
                              isLeft ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span
                              className={`mt-2 h-1 w-1 rounded-full bg-[#7A1F1F] shrink-0`}
                            />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono-tech text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-[#E5E1D8] text-[#5C5C5C]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
