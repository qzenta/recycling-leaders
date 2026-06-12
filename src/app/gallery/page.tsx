"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useState } from "react";

const media: { src: string; alt: string; category: string; type: "image" | "video" }[] = [
  { src: "/images/yard-operations-1.mp4",           alt: "Yard operations at ARL Solandpark",              category: "Operations", type: "video" },
  { src: "/images/operations-crane-scrap-1.jpeg",   alt: "Crane truck lifting scrap metal at the ARL yard", category: "Operations", type: "image" },
  { src: "/images/operations-crane-scrap-2.jpeg",   alt: "Crane loading crushed vehicle scrap at ARL",      category: "Operations", type: "image" },
  { src: "/images/fleet-trucks-yard-1.jpeg",        alt: "ARL fleet — three collection trucks at the yard", category: "Fleet",      type: "image" },
  { src: "/images/fleet-trucks-yard-2.jpeg",        alt: "ARL Kia and Tata trucks ready for collection",    category: "Fleet",      type: "image" },
  { src: "/images/truck-skip-weighbridge.jpeg",     alt: "Skip truck being weighed at ARL",                 category: "Fleet",      type: "image" },
  { src: "/images/truck-bin-yard.jpeg",             alt: "Bin collection truck at the ARL yard",            category: "Fleet",      type: "image" },
  { src: "/images/yard-trucks.jpeg",                alt: "Trucks lined up at the ARL recycling yard",       category: "Yard",       type: "image" },
  { src: "/images/yard-weighbridge.jpeg",           alt: "Weighbridge at the ARL Solandpark yard",          category: "Yard",       type: "image" },
  { src: "/images/team-owner-staff-1.jpeg",         alt: "ARL owner and team at the Solandpark yard",       category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-2.jpeg",         alt: "ARL team in green overalls at the yard",          category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-3.jpeg",         alt: "ARL management and staff team photo",             category: "Team",       type: "image" },
  { src: "/images/team-owner-staff-6.jpeg",         alt: "ARL team at the weighbridge",                     category: "Team",       type: "image" },
  { src: "/images/csr-community-parcels-1.jpeg",    alt: "ARL community food parcel donation",              category: "Community",  type: "image" },
  { src: "/images/csr-community-parcels-2.jpeg",    alt: "ARL giving back to the Vaal community",           category: "Community",  type: "image" },
  { src: "/images/csr-community-children.jpeg",     alt: "ARL community support — children in Sedibeng",   category: "Community",  type: "image" },
];

const categories = ["All", "Operations", "Fleet", "Yard", "Team", "Community"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? media : media.filter((m) => m.category === active);

  return (
    <>
      <PageHero
        headline="ARL In Action"
        subheadline="Our yard, fleet, team, and the community we serve."
        image="/images/operations-crane-scrap-1.jpeg"
        imageAlt="Crane truck at the ARL scrap yard"
      />

      {/* Category pills */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
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
      </section>

      {/* Uniform grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.src}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm aspect-[4/3]"
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
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-green-primary)]/0 group-hover:bg-[var(--color-green-primary)]/30 transition-all duration-500 ease-out" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                <p className="text-white text-xs font-medium leading-snug">{item.alt}</p>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-[var(--color-green-primary)]/90 text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Ready to bring your scrap?
        </h2>
        <p className="text-green-100 mb-6">Come see the yard for yourself — Solandpark, Sedibeng.</p>
        <a
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20want%20to%20visit%20the%20yard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-green-primary)] font-bold rounded-xl hover:bg-green-50 transition-colors"
        >
          WhatsApp Us
        </a>
      </section>
    </>
  );
}
