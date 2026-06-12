import { Award, GraduationCap, Languages } from "lucide-react";
import { CERTIFICATIONS, FORMATIONS, LANGUAGES } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">
              /06 — formations & certifications
            </div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              Des credentials, <em className="not-italic text-[#0891B2]">vérifiables</em>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Certifications */}
          <div className="lg:col-span-2 glass rounded-2xl p-7 md:p-8" data-testid="certifications-card">
            <div className="flex items-center gap-3 mb-7">
              <Award size={18} className="text-[#0891B2]" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#5C616B]">
                Certifications
              </span>
            </div>
            <ul className="divide-y divide-[#E4E7EB]">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c.name}
                  data-testid={`cert-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="flex items-center justify-between py-4 group"
                >
                  <div>
                    <div className="font-serif-display text-xl text-[#0B0D10] group-hover:text-[#0891B2] transition">
                      {c.name}
                    </div>
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8B8E94] mt-1">
                      {c.body}
                    </div>
                  </div>
                  <span className="font-mono-tech text-sm text-[#0891B2]">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations + langues */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-7" data-testid="formations-card">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={18} className="text-[#0891B2]" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#5C616B]">
                  Formation académique
                </span>
              </div>
              <ul className="space-y-5">
                {FORMATIONS.map((f) => (
                  <li key={f.title}>
                    <div className="font-serif-display text-lg text-[#0B0D10] leading-tight">{f.title}</div>
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#8B8E94] mt-1">
                      {f.school} · {f.year}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-7" data-testid="languages-card">
              <div className="flex items-center gap-3 mb-6">
                <Languages size={18} className="text-[#0891B2]" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#5C616B]">
                  Langues
                </span>
              </div>
              <ul className="space-y-3">
                {LANGUAGES.map((l) => (
                  <li key={l.lang} className="flex items-baseline justify-between">
                    <span className="font-serif-display text-lg text-[#0B0D10]">{l.lang}</span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#5C616B]">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
