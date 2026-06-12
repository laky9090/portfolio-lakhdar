import { ArrowDownRight, Sparkles, Download, CalendarClock } from "lucide-react";
import { useI18n } from "@/data/i18n";
import { getMark } from "@/data/companyMarks";

export default function Hero() {
  const { t } = useI18n();
  const u = t.ui.hero;
  const profile = t.profile;
  const clients = t.experiences.slice(0, 6);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#0891B2]/8 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-[#0891B2]/6 blur-[140px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div
              data-testid="hero-availability"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E4E7EB] bg-[#F7F8FA]/70 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#5C616B]">
                {profile.contact.availability}
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif-display mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-[#0B0D10]"
            >
              {u.h1a}
              <em className="not-italic text-[#0891B2]">{u.h1b}</em>
              {u.h1c}
              <span className="italic text-[#0E7490]">{u.h1d}</span>
            </h1>

            <p data-testid="hero-pitch" className="mt-8 max-w-2xl text-lg md:text-xl text-[#5C616B] leading-relaxed">
              <span className="text-[#0B0D10]">{profile.shortPitchPrefix}</span>{" "}
              {profile.shortPitch}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={profile.contact.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-cal"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0891B2] text-white font-medium hover:bg-[#0E7490] transition"
              >
                <CalendarClock size={16} />
                {u.cta1}
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E4E7EB] text-[#0B0D10] hover:border-[#0891B2] hover:text-[#0891B2] transition"
              >
                <Sparkles size={15} />
                {u.cta2}
              </a>
              <a
                href={profile.contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                data-testid="hero-cta-cv"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E4E7EB] text-[#0B0D10] hover:border-[#0891B2] hover:text-[#0891B2] transition"
              >
                <Download size={15} />
                {u.cta3}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="hero-stats-card">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#0B0D10] bg-[#0891B2]/20 px-2 py-1 rounded">
                {u.enBref}
              </span>
              <div className="mt-4 space-y-5">
                <Stat k={`${t.meta.totalYears}+`} v={u.stat_total_unit} />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k={`${t.meta.pmYears}+`} v={u.stat_pm_unit} />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="600k€" v={u.stat_budget} />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="7" v={u.stat_sectors} />
                <div className="h-px bg-[#E4E7EB]" />
                <Stat k="FR / EN" v={u.stat_int} small />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" data-testid="hero-clients-marquee">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-line flex-1" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#8B8E94]">
              {u.trusted}
            </span>
            <div className="accent-line flex-1" />
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {[...clients, ...clients, ...clients].map((c, i) => {
                const m = getMark(c.company);
                const short = c.company.split(" ")[0];
                return (
                  <div key={i} className="flex items-center gap-3 opacity-85 hover:opacity-100 transition">
                    {c.logo ? (
                      <div className="h-9 w-9 rounded bg-white grid place-items-center ring-1 ring-[#E4E7EB] shadow-sm p-1">
                        <img src={c.logo} alt={c.company} className="max-h-full max-w-full object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <div
                        className="h-9 w-9 rounded grid place-items-center ring-1 ring-[#E4E7EB] shadow-sm"
                        style={{ backgroundColor: m.bg, color: m.fg }}
                      >
                        <span className="text-[11px]" style={{ fontWeight: m.weight }}>{m.abbr}</span>
                      </div>
                    )}
                    <span className="font-serif-display text-xl text-[#0B0D10]">{short}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, small }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className={`font-serif-display text-[#0891B2] ${small ? "text-xl" : "text-3xl"}`}>{k}</div>
      <div className="text-right text-sm text-[#5C616B]">{v}</div>
    </div>
  );
}
