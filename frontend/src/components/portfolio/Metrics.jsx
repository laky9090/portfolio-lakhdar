import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/data/i18n";

function parseTarget(value) {
  const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: 0, suffix: value, prefix: "" };
  return { prefix: m[1] || "", num: parseFloat(m[2]), suffix: m[3] || "" };
}

function useCountUp(target, inView, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
}

function MetricCard({ m }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { prefix, num, suffix } = parseTarget(m.value);
  const v = useCountUp(num, inView);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const display = num >= 100 ? Math.round(v) : v.toFixed(num % 1 ? 1 : 0);

  return (
    <div
      ref={ref}
      data-testid={`metric-card-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative glass rounded-2xl p-7 md:p-8 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
    >
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#0891B2]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8B8E94]">{m.caption}</div>
      <div className="mt-4 font-serif-display text-[#0891B2] text-5xl md:text-6xl leading-none tracking-tight">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-4 text-sm text-[#0B0D10]/90">{m.label}</div>
      {m.note && (
        <div className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#0891B2]">
          {m.note}
        </div>
      )}
    </div>
  );
}

export default function Metrics() {
  const { t } = useI18n();
  const u = t.ui.metrics;
  return (
    <section
      id="chiffres"
      data-testid="metrics-section"
      className="relative py-24 md:py-32 border-t border-[#EEF1F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#0891B2]">{u.kicker}</div>
            <h2 className="font-serif-display mt-4 text-4xl md:text-6xl text-[#0B0D10] leading-[0.95]">
              {u.h1a}
              <em className="not-italic text-[#0891B2]">{u.h1b}</em>
            </h2>
          </div>
          <p className="max-w-md text-[#5C616B] text-base md:text-lg">{u.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.metrics.map((m, i) => (
            <MetricCard key={i} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
