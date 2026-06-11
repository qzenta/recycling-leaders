import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About All Recycling Leaders — Est. 2017, Vaal Region",
  description:
    "Learn about ARL — a community-rooted recycling business serving the Vaal and Sedibeng since 2017.",
};

const values = [
  {
    icon: "🤝",
    title: "Community First",
    desc: "We were built in the Vaal and serve the Vaal. Every transaction supports local economic activity.",
  },
  {
    icon: "🌿",
    title: "Environmental Responsibility",
    desc: "Recycling done right. All material is processed responsibly, keeping waste out of landfill.",
  },
  {
    icon: "⚖️",
    title: "Fair & Transparent",
    desc: "Calibrated scales, documented weights, and honest market prices — every time.",
  },
];

const stats = [
  { stat: "Est. 2017", label: "Established" },
  { stat: "3", label: "Service Streams" },
  { stat: "Vaal & Sedibeng", label: "Region Served" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero headline="Proudly Serving the Vaal Since 2017" />

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[var(--color-grey-darkest)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
              <p>
                All Recycling Leaders was founded in 2017 with a simple mission: to give the Vaal and Sedibeng
                community a scrap metal buyer they could trust. One that pays fairly, weighs accurately, and treats
                every customer — from the informal seller to the industrial supplier — with respect.
              </p>
              <p>
                Over the years we&apos;ve grown from a local buying point to a three-stream recycling operation.
                Today we buy scrap metal, supply bulk material to industrial partners, and provide monthly bin
                collection contracts to businesses across Sedibeng and the wider Vaal region.
              </p>
              <p>
                Our growth has been built on community referrals, repeat customers, and a commitment to doing
                things the right way. That hasn&apos;t changed since day one.
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image
              src="/images/yard-weighbridge.jpeg"
              alt="All Recycling Leaders yard — trucks lined up on the weighbridge at our Solandpark facility"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 bg-[var(--color-green-light)] rounded-xl">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--color-grey-muted)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Impact
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div
                className="text-2xl md:text-3xl font-bold text-[var(--color-green-primary)] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.stat}
              </div>
              <div className="text-sm text-[var(--color-grey-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Team
          </h2>
          <div className="inline-block">
            <div className="bg-[var(--color-grey-border)] rounded-full w-32 h-32 flex items-center justify-center text-[var(--color-grey-muted)] text-xs mx-auto mb-4">
              [Photo: Client to supply]
            </div>
            <div className="font-bold text-[var(--color-grey-darkest)]">Owner / Director</div>
            <div className="text-sm text-[var(--color-grey-muted)] mt-1">All Recycling Leaders</div>
            <p className="text-sm text-[var(--color-grey-muted)] mt-3 max-w-sm">
              [Bio: Client to supply]
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold text-center mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Accreditations
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[var(--color-grey-border)] rounded-xl px-8 py-4 text-[var(--color-grey-muted)] text-sm">
            [B-BBEE Certificate — client to supply]
          </div>
          <div className="bg-[var(--color-grey-border)] rounded-xl px-8 py-4 text-[var(--color-grey-muted)] text-sm">
            [MRA / Industry Logo — if applicable]
          </div>
        </div>
      </section>
    </>
  );
}
