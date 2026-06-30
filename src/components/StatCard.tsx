"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  stat: string;
  label: string;
  delay?: number;
}

// Parse a stat string into prefix, numeric value, and suffix
// e.g. "19 Areas" -> { prefix: "", num: 19, suffix: " Areas" }
// e.g. "Est. 2017" -> null (not countable)
function parseCountable(stat: string): { prefix: string; num: number; suffix: string } | null {
  const match = stat.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return null;
  const num = parseInt(match[2], 10);
  // Only count if the number makes sense to animate (≤ 100)
  if (num > 100) return null;
  return { prefix: match[1], num, suffix: match[3] };
}

export default function StatCard({ stat, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const countable = parseCountable(stat);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !countable) return;
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * countable.num));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [visible, countable?.num]);

  const displayStat = countable && visible
    ? `${countable.prefix}${count}${countable.suffix}`
    : stat;

  return (
    <div
      ref={ref}
      className="card-lift bg-white rounded-2xl shadow-lg p-5 text-center border-t-4 border-[var(--color-green-primary)] transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
      }}
    >
      <div
        className="text-2xl font-bold text-[var(--color-green-primary)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {displayStat}
      </div>
      <div className="text-xs text-[var(--color-grey-muted)] uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}
