"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/yard-trucks.jpeg",              alt: "All Recycling Leaders yard — trucks at our Solandpark facility" },
  { src: "/images/operations-crane-scrap-1.jpeg", alt: "Crane operations at the ARL scrap yard" },
  { src: "/images/fleet-trucks-yard-1.jpeg",      alt: "ARL collection fleet ready for service" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative text-white py-20 px-4 overflow-hidden min-h-[480px] flex items-center">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[var(--color-green-primary)]/75" />

      <div className="relative max-w-4xl mx-auto text-center w-full">
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Turning Waste Into Opportunity
        </h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
          Sedibeng&apos;s trusted scrap metal buyer and recycling partner since 2017
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/sell-scrap"
            className="px-8 py-3 bg-white text-[var(--color-green-primary)] font-bold rounded-lg hover:bg-green-50 transition-colors"
          >
            Get a Price
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/50"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
