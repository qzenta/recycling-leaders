import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations We Serve — Vaal & Sedibeng | All Recycling Leaders",
  description:
    "All Recycling Leaders serves 19 communities across the Vaal and Sedibeng region. Find your nearest scrap metal drop-off point or bin collection area.",
};

const locationImages: Record<string, string> = {
  vanderbijlpark: "/images/yard-trucks.jpeg",
  vereeniging:    "/images/fleet-trucks-yard-1.jpeg",
  sebokeng:       "/images/truck-bin-yard.jpeg",
  evaton:         "/images/fleet-trucks-yard-2.jpeg",
  boipatong:      "/images/operations-crane-scrap-1.jpeg",
  sharpeville:    "/images/yard-weighbridge.jpeg",
  bophelong:      "/images/truck-skip-weighbridge.jpeg",
  "three-rivers": "/images/operations-crane-scrap-2.jpeg",
  roshnee:        "/images/yard-trucks.jpeg",
  tshepiso:       "/images/fleet-trucks-yard-1.jpeg",
  meyerton:       "/images/truck-bin-yard.jpeg",
  walkerville:    "/images/fleet-trucks-yard-2.jpeg",
  zamdela:        "/images/operations-crane-scrap-1.jpeg",
  heidelberg:     "/images/yard-weighbridge.jpeg",
  ratanda:        "/images/truck-skip-weighbridge.jpeg",
  "orange-farm":  "/images/operations-crane-scrap-2.jpeg",
  ennerdale:      "/images/yard-trucks.jpeg",
  alrode:         "/images/fleet-trucks-yard-1.jpeg",
  nigel:          "/images/truck-bin-yard.jpeg",
};

const locationBlurbs: Record<string, string> = {
  vanderbijlpark: "Our home base — yard is here at 74 Fairbanks Street. Walk-ins welcome 6 days a week.",
  vereeniging:    "15 minutes from our yard. Fast drop-off for scrap metal sellers in Vereeniging.",
  sebokeng:       "Close community partner. We collect from Sebokeng and buy directly at our yard.",
  evaton:         "Regular bin collection routes and scrap buying in Evaton and surrounds.",
  boipatong:      "Serving Boipatong with scrap purchasing and bin placement contracts.",
  sharpeville:    "We run regular collection in Sharpeville — bins and scrap metal pickup available.",
  bophelong:      "Bophelong sellers drop off at our yard or request a collection bin.",
  "three-rivers": "Three Rivers is a short drive from our Vanderbijlpark facility.",
  roshnee:        "Industrial and residential scrap buyers in the Roshnee area.",
  tshepiso:       "Tshepiso residents welcome at our yard — same-day payment guaranteed.",
  meyerton:       "Meyerton scrap sellers are 20 minutes from same-day payment.",
  walkerville:    "Walkerville farm and residential scrap purchased at competitive rates.",
  zamdela:        "Zamdela clients use our yard or request a commercial collection contract.",
  heidelberg:     "Heidelberg sellers get fair prices for steel, copper, and aluminium.",
  ratanda:        "Ratanda community served with direct yard purchasing and bin options.",
  "orange-farm":  "Orange Farm sellers are welcome — we buy all grades of scrap metal.",
  ennerdale:      "Ennerdale scrap sellers and businesses served from our Vanderbijlpark base.",
  alrode:         "Industrial Alrode — bulk ferrous and non-ferrous purchasing available.",
  nigel:          "45-minute drive or arrange a bulk collection — Nigel clients are welcome.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        headline="Areas We Serve"
        subheadline="19 communities across the Vaal and Sedibeng region — all within reach of our Vanderbijlpark yard."
        image="/images/fleet-trucks-yard-1.jpeg"
        imageAlt="ARL fleet trucks serving the Vaal region"
        tall
      />

      {/* Intro strip */}
      <section className="bg-white py-10 px-4 border-b border-[var(--color-grey-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--color-grey-muted)] leading-relaxed">
            Whether you&apos;re dropping off scrap metal, setting up a bin collection contract, or looking for a recycling partner,
            ARL serves your area. Click any location below for directions, services, and contact details specific to your area.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sell-scrap" className="px-6 py-2.5 bg-[var(--color-green-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors text-sm">
              Sell Scrap Metal
            </Link>
            <Link href="/bin-collection" className="px-6 py-2.5 border-2 border-[var(--color-green-primary)] text-[var(--color-green-primary)] font-semibold rounded-lg hover:bg-[var(--color-green-light)] transition-colors text-sm">
              Get a Bin Contract
            </Link>
          </div>
        </div>
      </section>

      {/* Location cards grid */}
      <section className="py-14 px-4 bg-[var(--color-grey-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-grey-border)] hover:shadow-md hover:border-[var(--color-green-mid)] transition-all"
              >
                {/* Card image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={locationImages[loc.slug] ?? "/images/yard-trucks.jpeg"}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm bg-[var(--color-green-primary)] px-2.5 py-1 rounded-lg">
                    {loc.distance} away
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h2 className="font-bold text-[var(--color-grey-darkest)] text-lg mb-1 group-hover:text-[var(--color-green-primary)] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {loc.name}
                  </h2>
                  <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">
                    {locationBlurbs[loc.slug]}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[var(--color-green-primary)] group-hover:underline">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-grey-darkest)] text-white py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Don&apos;t see your area?
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            WhatsApp or call us — if you have a bulk load we may be able to arrange a pickup.
          </p>
          <a
            href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%27m%20not%20in%20a%20listed%20area%20but%20have%20scrap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
