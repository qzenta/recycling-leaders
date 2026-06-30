"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useState, useEffect, useCallback } from "react";

const media: { src: string; alt: string; category: string; type: "image" | "video" }[] = [
  // Videos — yard session
  { src: "/images/yard-operations-1.mp4",         alt: "Yard operations at ARL",                          category: "Operations", type: "video" },
  { src: "/images/yard-clip-01.mp4",              alt: "ARL yard activity",                               category: "Yard",       type: "video" },
  { src: "/images/yard-clip-02.mp4",              alt: "ARL yard operations footage",                     category: "Yard",       type: "video" },
  { src: "/images/yard-clip-03.mp4",              alt: "ARL scrap yard in action",                        category: "Operations", type: "video" },
  { src: "/images/yard-clip-04.mp4",              alt: "Scrap handling at ARL",                           category: "Operations", type: "video" },
  { src: "/images/yard-clip-05.mp4",              alt: "ARL yard — day operations",                       category: "Yard",       type: "video" },
  { src: "/images/yard-clip-06.mp4",              alt: "ARL fleet and yard activity",                     category: "Fleet",      type: "video" },
  { src: "/images/yard-clip-07.mp4",              alt: "Collection trucks at ARL yard",                   category: "Fleet",      type: "video" },
  { src: "/images/yard-clip-08.mp4",              alt: "ARL truck operations",                            category: "Fleet",      type: "video" },
  { src: "/images/yard-clip-09.mp4",              alt: "ARL fleet in service",                            category: "Fleet",      type: "video" },
  { src: "/images/yard-clip-10.mp4",              alt: "ARL scrap yard footage",                          category: "Yard",       type: "video" },
  { src: "/images/yard-clip-11.mp4",              alt: "Scrap metal processing at ARL",                   category: "Operations", type: "video" },
  { src: "/images/yard-clip-12.mp4",              alt: "ARL yard — weighbridge and scrap",                category: "Yard",       type: "video" },
  { src: "/images/yard-clip-13.mp4",              alt: "ARL yard clip",                                   category: "Yard",       type: "video" },
  { src: "/images/yard-clip-14.mp4",              alt: "ARL operations — scrap loading",                  category: "Operations", type: "video" },
  { src: "/images/yard-clip-15.mp4",              alt: "ARL yard activity clip",                          category: "Yard",       type: "video" },
  // Videos — operations session
  { src: "/images/operations-clip-01.mp4",        alt: "ARL operations — heavy equipment",                category: "Operations", type: "video" },
  { src: "/images/operations-clip-02.mp4",        alt: "ARL operations footage",                          category: "Operations", type: "video" },
  { src: "/images/operations-clip-03.mp4",        alt: "ARL operations — scrap yard processing",          category: "Operations", type: "video" },
  // Photos
  { src: "/images/operations-crane-scrap-1.jpeg", alt: "Crane truck lifting scrap metal at the ARL yard", category: "Operations", type: "image" },
  { src: "/images/operations-crane-scrap-2.jpeg", alt: "Crane loading crushed vehicle scrap at ARL",      category: "Operations", type: "image" },
  { src: "/images/fleet-trucks-yard-1.jpeg",      alt: "ARL fleet — three collection trucks at the yard", category: "Fleet",      type: "image" },
  { src: "/images/fleet-trucks-yard-2.jpeg",      alt: "ARL Kia and Tata trucks ready for collection",    category: "Fleet",      type: "image" },
  { src: "/images/truck-skip-weighbridge.jpeg",   alt: "Skip truck being weighed at ARL",                 category: "Fleet",      type: "image" },
  { src: "/images/truck-bin-yard.jpeg",           alt: "Bin collection truck at the ARL yard",            category: "Fleet",      type: "image" },
  { src: "/images/yard-trucks.jpeg",              alt: "Trucks lined up at the ARL recycling yard",       category: "Yard",       type: "image" },
  { src: "/images/yard-weighbridge.jpeg",         alt: "Weighbridge at the ARL Vanderbijlpark yard",      category: "Yard",       type: "image" },
  { src: "/images/team-owner-staff-1.jpeg",       alt: "ARL owner and team at the Vanderbijlpark yard",   category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-2.jpeg",       alt: "ARL team in green overalls at the yard",          category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-3.jpeg",       alt: "ARL management and staff team photo",             category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-6.jpeg",       alt: "ARL team at the weighbridge",                     category: "Team",       type: "image" },
  { src: "/images/csr-community-parcels-1.jpeg",  alt: "ARL community food parcel donation",              category: "Community",  type: "image" },
  { src: "/images/csr-community-parcels-2.jpeg",  alt: "ARL giving back to the Vaal community",           category: "Community",  type: "image" },
  { src: "/images/csr-community-children.jpeg",   alt: "ARL community support — children in Sedibeng",    category: "Community",  type: "image" },
];

const categories = ["All", "Operations", "Fleet", "Yard", "Team", "Community"];

export default function GalleryPage() {
  const [active, setActive]       = useState("All");
  const [lightbox, setLightbox]   = useState<number | null>(null); // index into `filtered`

  const filtered = active === "All" ? media : media.filter((m) => m.category === active);

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const next   = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")      close();
      else if (e.key === "ArrowLeft")  prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const current = lightbox !== null ? filtered[lightbox] : null;

  return (
    <>
      <PageHero
        headline="ARL In Action"
        subheadline="Our yard, fleet, team, and the community we serve."
        image="/images/fleet-trucks-yard-1.jpeg"
        tall
        imageAlt="ARL fleet trucks at the Vanderbijlpark yard"
      />

      {/* Category pills */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setActive(c); setLightbox(null); }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
                active === c
                  ? "bg-[var(--color-green-primary)] text-white border-[var(--color-green-primary)]"
                  : "bg-[var(--color-green-light)] text-[var(--color-green-primary)] border-[var(--color-green-mid)] hover:bg-[var(--color-green-mid)] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--color-grey-muted)] mt-3">
          {filtered.length} items — click any card to view fullscreen
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <button
              key={item.src}
              onClick={() => setLightbox(idx)}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm aspect-[4/3] text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-green-primary)]"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-[var(--color-green-primary)]/0 group-hover:bg-[var(--color-green-primary)]/20 transition-all duration-500 ease-out" />
              {/* Play icon for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-green-primary)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              {/* Expand icon for images */}
              {item.type === "image" && (
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-green-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </div>
                </div>
              )}
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                <p className="text-white text-xs font-medium leading-snug">{item.alt}</p>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-[var(--color-green-primary)]/90 text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {current !== null && lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm text-gray-400">
              {lightbox + 1} / {filtered.length} &nbsp;·&nbsp; {current.category}
            </span>
            <button
              onClick={close}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main media */}
          <div className="flex-1 flex items-center justify-center px-14 min-h-0" onClick={(e) => e.stopPropagation()}>
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="max-h-full max-w-full rounded-lg"
                style={{ maxHeight: "calc(100vh - 140px)" }}
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="flex-shrink-0 text-center px-4 py-3" onClick={(e) => e.stopPropagation()}>
            <p className="text-gray-300 text-sm">{current.alt}</p>
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[var(--color-grey-bg)] border-t border-[var(--color-grey-border)] py-12 px-4 text-center">
        <p className="text-[var(--color-grey-muted)] text-sm mb-4">Want to see more? Come visit us at the yard.</p>
        <a
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%27d%20like%20to%20visit%20your%20yard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors"
        >
          WhatsApp to Arrange a Visit
        </a>
      </section>
    </>
  );
}
