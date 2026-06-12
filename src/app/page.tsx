import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import PartnersMarquee from "@/components/PartnersMarquee";

export const metadata: Metadata = {
  title: "All Recycling Leaders — Scrap Metal Buyers in Vaal",
  description:
    "Sedibeng's trusted scrap metal buyer since 2017. We buy copper, aluminium, steel and more. Bin collection contracts available.",
};

const metals = [
  { icon: "🔶", name: "Copper" },
  { icon: "⬜", name: "Aluminium" },
  { icon: "⚙️", name: "Steel" },
  { icon: "🔩", name: "Iron" },
  { icon: "🟡", name: "Brass" },
  { icon: "⬛", name: "Lead" },
  { icon: "✨", name: "Stainless Steel" },
  { icon: "💻", name: "E-Waste" },
];

const trustPoints = ["Fair Prices", "Accurate Weighing", "Fast Payment", "Eco-Responsible"];

const testimonials = [
  { quote: "Quick payment, fair scale. I bring all my copper here.", name: "M. Dlamini", location: "Sebokeng" },
  { quote: "Professional service, they know their metals well.", name: "P. Botha", location: "Vereeniging" },
  { quote: "The bin collection service has made things so much easier for us.", name: "T. Mokoena", location: "Alberton" },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <PartnersMarquee />

      {/* Audience Lane Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔧",
              title: "I have scrap to sell",
              desc: "Get a fair price for your scrap metal. Fast, accurate weighing and same-day payment.",
              href: "/sell-scrap",
              cta: "Get a Price",
            },
            {
              icon: "🏭",
              title: "I need a recycling partner",
              desc: "Consistent ferrous and non-ferrous supply for bulk buyers and industrial suppliers.",
              href: "/recycling-partners",
              cta: "Partner With Us",
            },
            {
              icon: "♻️",
              title: "I need bin collection",
              desc: "Monthly bin collection contracts for businesses. We place, collect, and recycle responsibly.",
              href: "/bin-collection",
              cta: "Get a Contract",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-xl p-6 border-t-4 border-[var(--color-green-primary)] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h2
                className="text-xl font-bold mb-2 text-[var(--color-grey-darkest)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h2>
              <p className="text-[var(--color-grey-muted)] text-sm mb-4">{card.desc}</p>
              <span className="text-[var(--color-green-primary)] font-semibold text-sm group-hover:underline">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[var(--color-grey-darkest)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About All Recycling Leaders
            </h2>
            <p className="text-[var(--color-grey-muted)] leading-relaxed">
              Founded in 2017, ARL is a community-rooted recycling business serving the Vaal and Sedibeng
              region. We buy all grades of scrap metal, offer reliable bin collection contracts, and supply
              bulk recycled material to industrial partners — all with transparent weighing and fair prices.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "Est. 2017", label: "Established" },
              { stat: "3", label: "Service Streams" },
              { stat: "Vaal", label: "Region" },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--color-green-light)] rounded-xl p-4 text-center">
                <div
                  className="text-2xl font-bold text-[var(--color-green-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.stat}
                </div>
                <div className="text-xs text-[var(--color-grey-muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What We Buy
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metals.map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-5 flex flex-col items-center gap-2 shadow-sm">
              <span className="text-3xl">{m.icon}</span>
              <span className="font-semibold text-sm text-[var(--color-grey-dark)]">{m.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/sell-scrap"
            className="inline-block px-6 py-2.5 bg-[var(--color-green-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-green-mid)] transition-colors"
          >
            See All Metals &amp; Get a Price
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-green-primary)] py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-white font-semibold text-sm">
          {trustPoints.map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-green-300">·</span>}
              ✓ {t}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-[var(--color-grey-muted)] italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-semibold text-sm text-[var(--color-grey-dark)]">{t.name}</div>
              <div className="text-xs text-[var(--color-grey-muted)]">{t.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-green-primary)] text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to recycle?
          </h2>
          <p className="text-green-100 mb-8">
            WhatsApp us or send an enquiry — we&apos;ll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20scrap%20to%20sell"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "All Recycling Leaders",
            url: "https://recyclingleaders.co.za",
            telephone: "+27720800327",
            address: {
              "@type": "PostalAddress",
              streetAddress: "594C Houtkop Road, Skipper Botha",
              addressLocality: "Solandpark",
              addressRegion: "Sedibeng",
              postalCode: "1900",
              addressCountry: "ZA",
            },
            areaServed: ["Sedibeng", "Vaal", "Gauteng"],
          }),
        }}
      />
    </>
  );
}
