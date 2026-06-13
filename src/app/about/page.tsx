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
      <PageHero
        headline="Proudly Serving the Vaal Since 2017"
        image="/images/yard-trucks.jpeg"
        imageAlt="Trucks at the ARL recycling yard"
      />

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
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Team
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/team-owner-staff-1.jpeg"
                alt="ARL owner and team at the Solandpark yard"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/team-owner-staff-6.jpeg"
                alt="ARL team in uniform at the weighbridge"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="text-center text-[var(--color-grey-muted)] text-sm">
            Our team of dedicated staff operates the yard 6 days a week — keeping Sedibeng&apos;s scrap moving.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Giving Back to the Community
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image src="/images/csr-community-parcels-1.jpeg" alt="ARL food parcel donation to the community" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image src="/images/csr-community-parcels-2.jpeg" alt="ARL giving back — food parcels for Vaal families" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image src="/images/csr-community-children.jpeg" alt="ARL community support for children in Sedibeng" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
        <p className="text-center text-[var(--color-grey-muted)] text-sm max-w-2xl mx-auto">
          We believe recycling creates more than economic value — it creates community. ARL actively gives back
          to the Vaal and Sedibeng communities through food parcel donations and local support initiatives.
        </p>
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
          <div className="bg-[var(--color-green-light)] border border-[var(--color-green-mid)] rounded-xl px-8 py-6 text-center max-w-xs">
            <div className="text-3xl mb-2">🏅</div>
            <div className="font-bold text-[var(--color-green-primary)] text-lg mb-1">B-BBEE Level 1</div>
            <p className="text-sm text-[var(--color-grey-muted)]">All Recycling Leaders is a Level 1 B-BBEE contributor.</p>
            <p className="text-xs text-[var(--color-grey-muted)] mt-2">Certificate available on request.</p>
          </div>
        </div>
      </section>
    </>
  );
}
