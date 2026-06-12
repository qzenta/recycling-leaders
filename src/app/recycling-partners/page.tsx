import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Recycling Supply Partners — Bulk Scrap Metal | ARL",
  description:
    "Reliable ferrous and non-ferrous scrap metal supply in South Africa. Partner with All Recycling Leaders for consistent volumes.",
};

const features = [
  { icon: "📦", title: "Consistent Supply", desc: "Regular volumes sourced from our established Vaal and Sedibeng network." },
  { icon: "⚖️", title: "Ferrous & Non-Ferrous", desc: "Copper, aluminium, brass, steel, iron — we handle the full range." },
  { icon: "🔄", title: "Flexible Volumes", desc: "From small monthly lots to large bulk orders — we work to your schedule." },
];

const materials = [
  {
    category: "Ferrous Metals",
    items: "HMS 1 & 2, Shredded Steel, Cast Iron, Mild Steel, Light Iron",
    desc: "Consistent grade and volume from local industrial sources.",
  },
  {
    category: "Non-Ferrous Metals",
    items: "Copper, Aluminium, Brass, Lead, Stainless Steel",
    desc: "All grades sourced, sorted, and ready for processing.",
  },
  {
    category: "Mixed Scrap",
    items: "E-Waste, Car Batteries, Mixed Metal Lots",
    desc: "Flexible mixed loads for processors who handle multiple streams.",
  },
];

const whyUs = [
  "Established 2017 — proven track record in the Vaal and Sedibeng region",
  "Strong sourcing network across residential and industrial areas",
  "Transparent weighing and documentation on every transaction",
  "Flexible collection or delivery arrangements",
];

export default function RecyclingPartnersPage() {
  return (
    <>
      <PageHero
        headline="Your Reliable Recycling Supply Partner"
        subheadline="Consistent ferrous and non-ferrous scrap metal volumes from Sedibeng's established sourcing network."
        image="/images/yard-trucks.jpeg"
        imageAlt="Trucks at the ARL recycling yard"
      />

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
                {f.title}
              </h3>
              <p className="text-sm text-[var(--color-grey-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Materials Available */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Materials Available
          </h2>
          <div className="space-y-4">
            {materials.map((m) => (
              <div key={m.category} className="bg-[var(--color-grey-bg)] rounded-xl p-5 grid sm:grid-cols-3 gap-3">
                <div>
                  <div className="font-bold text-[var(--color-green-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                    {m.category}
                  </div>
                </div>
                <div className="text-sm font-medium text-[var(--color-grey-dark)]">{m.items}</div>
                <div className="text-sm text-[var(--color-grey-muted)]">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why Partner With Us
        </h2>
        <ul className="space-y-3">
          {whyUs.map((point) => (
            <li key={point} className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[var(--color-green-primary)] font-bold mt-0.5">✓</span>
              <span className="text-[var(--color-grey-dark)]">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bulk Enquiry Form */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Bulk Partner Enquiry
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8">
            Tell us about your requirements and we&apos;ll be in touch.
          </p>
          <ContactForm
            subject="[ARL] B2B Partner Enquiry"
            submitLabel="Send Enquiry"
            fields={[
              { name: "Company Name", label: "Company Name", type: "text", required: true },
              { name: "Contact Person", label: "Contact Person", type: "text", required: true },
              { name: "Phone", label: "Phone", type: "tel", required: true },
              { name: "Email", label: "Email", type: "email" },
              {
                name: "Material Interest",
                label: "Material Interest",
                type: "select",
                options: ["Ferrous Metals", "Non-Ferrous Metals", "Mixed Scrap", "Multiple Streams"],
              },
              { name: "Monthly Volume Estimate", label: "Monthly Volume Estimate (tons)", type: "text" },
              { name: "Message", label: "Message / Requirements", type: "textarea" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
