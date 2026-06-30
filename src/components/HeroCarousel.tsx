"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    src:         "/images/yard-trucks.jpeg",
    alt:         "All Recycling Leaders yard — trucks at our Vanderbijlpark facility",
    headline:    "Turning Waste Into Opportunity",
    subheadline: "Sedibeng's trusted scrap metal buyer and recycling partner since 2017",
    cta1:        { label: "Get a Price Today", href: "/sell-scrap" },
    cta2:        { label: "Request a Quote",   href: "/contact",   wa: false },
  },
  {
    src:         "/images/operations-crane-scrap-1.jpeg",
    alt:         "Crane operations at the ARL scrap yard",
    headline:    "We Buy All Scrap Metal — Fast & Fair",
    subheadline: "Copper, aluminium, steel, brass and more. Accurate weighing. Same-day payment.",
    cta1:        { label: "See What We Buy", href: "/sell-scrap" },
    cta2:        { label: "WhatsApp Us",     href: "https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20scrap%20to%20sell", wa: true },
  },
  {
    src:         "/images/fleet-trucks-yard-1.jpeg",
    alt:         "ARL collection fleet ready for service",
    headline:    "Monthly Bin Collection Contracts",
    subheadline: "We place the bins, we collect, we recycle. One retainer. Zero hassle.",
    cta1:        { label: "Get a Contract", href: "/bin-collection" },
    cta2:        { label: "Contact Us",     href: "/contact",        wa: false },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative text-white overflow-hidden" style={{ minHeight: "580px" }}>
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={s.src} alt={s.alt} fill priority={i === 0} className="object-cover object-center brightness-90" sizes="100vw" />
        </div>
      ))}

      {/* Gradient — stronger at bottom so text always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />

      <div className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        {/* Pill badge */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/30 bg-white/10 text-xs font-semibold uppercase tracking-widest text-green-200">
          Est. 2017 · Vanderbijlpark, Gauteng
        </span>

        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-4xl transition-all duration-500"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {slide.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-3 transition-all duration-500">
          {slide.subheadline}
        </p>

        <a href="tel:+27164231299" className="text-green-300 font-semibold text-sm mb-8 hover:text-white transition-colors">
          📞 072 080 0327 &nbsp;·&nbsp; (016) 423-1299
        </a>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {slide.cta2.wa ? (
            <a href={slide.cta1.href} className="px-8 py-3.5 bg-[var(--color-green-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors text-sm">
              {slide.cta1.label}
            </a>
          ) : (
            <Link href={slide.cta1.href} className="px-8 py-3.5 bg-[var(--color-green-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors text-sm">
              {slide.cta1.label}
            </Link>
          )}
          {slide.cta2.wa ? (
            <a href={slide.cta2.href} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors text-sm">
              {slide.cta2.label}
            </a>
          ) : (
            <Link href={slide.cta2.href} className="px-8 py-3.5 border-2 border-white/60 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm">
              {slide.cta2.label}
            </Link>
          )}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-white w-8" : "bg-white/40 w-4"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
