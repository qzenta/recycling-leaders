"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  stat: string;
  label: string;
  delay?: number;
}

export default function StatCard({ stat, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
        {stat}
      </div>
      <div className="text-xs text-[var(--color-grey-muted)] uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}
