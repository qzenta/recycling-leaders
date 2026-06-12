import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery — ARL in Action | All Recycling Leaders",
  description:
    "See our yard, fleet, team, and community work. All Recycling Leaders — Solandpark, Sedibeng.",
};

const photos = [
  { src: "/images/operations-crane-scrap-1.jpeg", alt: "Crane truck lifting scrap metal at the ARL yard", category: "Operations" },
  { src: "/images/operations-crane-scrap-2.jpeg", alt: "Crane loading crushed vehicle scrap at ARL Solandpark", category: "Operations" },
  { src: "/images/fleet-trucks-yard-1.jpeg",      alt: "ARL fleet — three collection trucks at the yard", category: "Fleet" },
  { src: "/images/fleet-trucks-yard-2.jpeg",      alt: "ARL Kia and Tata trucks ready for collection", category: "Fleet" },
  { src: "/images/yard-trucks.jpeg",              alt: "Trucks lined up at the ARL recycling yard", category: "Yard" },
  { src: "/images/yard-weighbridge.jpeg",         alt: "Weighbridge at the ARL Solandpark yard", category: "Yard" },
  { src: "/images/truck-skip-weighbridge.jpeg",   alt: "Skip truck being weighed at ARL", category: "Yard" },
  { src: "/images/truck-bin-yard.jpeg",           alt: "Bin collection truck at the ARL yard", category: "Fleet" },
  { src: "/images/team-owner-staff-1.jpeg",       alt: "ARL owner and team at the Solandpark yard", category: "Team" },
  { src: "/images/team-owner-staff-2.jpeg",       alt: "ARL team in green overalls at the yard", category: "Team" },
  { src: "/images/team-owner-staff-3.jpeg",       alt: "ARL management and staff team photo", category: "Team" },
  { src: "/images/team-owner-staff-6.jpeg",       alt: "ARL team at the weighbridge", category: "Team" },
  { src: "/images/csr-community-parcels-1.jpeg",  alt: "ARL community food parcel donation", category: "Community" },
  { src: "/images/csr-community-parcels-2.jpeg",  alt: "ARL giving back to the Vaal community", category: "Community" },
  { src: "/images/csr-community-children.jpeg",   alt: "ARL community support — children in Sedibeng", category: "Community" },
];

const categories = ["All", "Operations", "Fleet", "Yard", "Team", "Community"];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        headline="ARL In Action"
        subheadline="Our yard, fleet, team, and the community we serve."
        image="/images/operations-crane-scrap-1.jpeg"
        imageAlt="Crane truck at the ARL scrap yard"
      />

      {/* Category pills — static, all shown */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <span
              key={c}
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-[var(--color-green-light)] text-[var(--color-green-primary)] border border-[var(--color-green-mid)]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((p) => (
            <div key={p.src} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm relative group">
              <Image
                src={p.src}
                alt={p.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-[var(--color-green-primary)]/90 text-white text-xs font-semibold rounded-full">
                  {p.category}
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
