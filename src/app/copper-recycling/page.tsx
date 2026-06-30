import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceSchema, breadcrumb, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Copper Recycling in Vanderbijlpark — Vaal Region | ARL",
  description:
    "Sell copper scrap in the Vaal region. ARL buys bare bright, millberry, #1 and #2 copper at fair market prices. Accurate weighing, same-day payment. Serving Sedibeng since 2017.",
};

const grades = [
  {
    grade: "Bare Bright Copper",
    desc: "Clean, uncoated copper wire with no insulation, tinning, or impurities. The highest-value copper grade — think stripped electrical cable from new construction or industrial offcuts.",
    examples: "New electrical wire, clean transformer windings, stripped building cable",
  },
  {
    grade: "Millberry (#1 Copper)",
    desc: "Clean copper with no insulation, tinning, paint, or attached metal. Includes clean busbars, copper pipe fittings, and heavy copper sections with minimal oxidation.",
    examples: "Clean copper pipe, busbars, heavy copper sheet, uncoated terminals",
  },
  {
    grade: "#2 Copper",
    desc: "Slightly contaminated copper — light soldering, oxidation, paint, or small amounts of attached metal are acceptable. The most commonly received residential grade.",
    examples: "Old plumbing copper, slightly corroded pipe, light-coated offcuts",
  },
  {
    grade: "Insulated Copper Wire",
    desc: "Copper wire still in its plastic or rubber sheathing. Value depends on the thickness of the conductor inside relative to the insulation weight. Heavier cables return more.",
    examples: "Old electrical cabling, motor windings still insulated, bundled household wire",
  },
  {
    grade: "Copper Transformers",
    desc: "Transformer cores contain significant copper windings. Accepted as a mixed material — weighed whole and priced on the copper content estimate.",
    examples: "Old distribution transformers, step-down transformers, microwave transformers",
  },
];

const faqs = [
  {
    q: "How do I know if my copper will be accepted?",
    a: "Bring it in and we'll assess it on the spot. We accept all copper grades from bare bright down to insulated wire and transformers. The only items we can't process are live electrical components or hazardous materials attached to the copper.",
  },
  {
    q: "Should I strip the insulation off wire before bringing it?",
    a: "You'll get a better price per kg for stripped wire versus insulated wire, because stripped copper is weighed on its full copper value. However, if stripping takes significant labour, it may not be worth it for low-conductor cables. For thick-conductor cables (like aerial bundled cable or thick industrial cable), stripping is usually worth it.",
  },
  {
    q: "What documents do I need to sell copper?",
    a: "You'll need a valid South African ID or passport. For copper and other high-value non-ferrous metals, we follow SAPS second-hand goods regulations and record the transaction. Bring proof of address if you're a first-time seller.",
  },
  {
    q: "How are copper prices set and how often do they change?",
    a: "ARL prices copper based on the daily LME (London Metal Exchange) copper spot price, adjusted for local market rates and grade. Prices move daily, sometimes significantly. We advise calling ahead or WhatsApping us on the morning you plan to sell for the day's rate.",
  },
  {
    q: "Can I sell stolen copper at ARL?",
    a: "No. ARL complies fully with the Second-Hand Goods Act and reports suspicious transactions to SAPS. Cable theft and copper theft are serious crimes that harm communities and infrastructure. We reserve the right to refuse any load we cannot verify as legitimately sourced.",
  },
];

export default function CopperRecyclingPage() {
  return (
    <>
      <PageHero
        headline="Copper Recycling — Fair Prices in Sedibeng"
        subheadline="ARL buys all grades of copper scrap at our Vanderbijlpark yard. Calibrated weighbridge, transparent pricing, same-day payment since 2017."
        image="/images/yard-weighbridge.jpeg"
        imageAlt="ARL weighbridge at the Vanderbijlpark scrap yard"
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Local Copper Buyer in the Vaal
        </h2>
        <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
          <p>
            Copper is one of the most valuable recyclable metals on the market — and All Recycling Leaders pays competitive daily rates for every grade, from pristine bare bright copper to insulated household wire. We've been buying copper from residents, electricians, contractors, and businesses across the Vaal and Sedibeng region since 2017.
          </p>
          <p>
            Unlike some yards that offer a blanket rate and sort later, we assess your copper at the point of sale. You see exactly how your load is graded and weighed before you're paid — no surprises, no deductions after the fact. Our certified weighbridge is calibrated and open for your inspection.
          </p>
          <p>
            Whether you have a few kilograms of stripped wire from a home renovation or a large-volume contractor load from a demolition project, we handle it. Drive in to our yard at 74 Fairbanks Street, Vanderbijlpark — open Monday to Saturday, no appointment needed.
          </p>
        </div>
      </section>

      {/* Grades we buy */}
      <section className="bg-[var(--color-grey-bg)] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Copper Grades We Accept
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mb-10">
            All grades assessed at point of sale — you see the grade, you see the weight
          </p>
          <div className="space-y-4">
            {grades.map((g) => (
              <div key={g.grade} className="bg-white rounded-xl p-6 shadow-sm">
                <h3
                  className="font-bold text-lg text-[var(--color-green-primary)] mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {g.grade}
                </h3>
                <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed mb-2">{g.desc}</p>
                <p className="text-xs text-[var(--color-grey-dark)] font-medium">
                  Common examples: {g.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why sell copper at ARL */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why Sell Your Copper at ARL
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "⚖️", title: "Certified Weighbridge", desc: "Every load weighed on calibrated, certified scales. The reading is visible to you before payment." },
            { icon: "💰", title: "Daily Market Rates", desc: "We price copper to the LME daily rate. No fixed low rate — you benefit when the market is up." },
            { icon: "🔍", title: "Transparent Grading", desc: "Grade decisions are explained on the spot. If you disagree with a grade, we'll walk you through it." },
            { icon: "⚡", title: "Same-Day Payment", desc: "Cash or EFT the same day. Walk in with copper, walk out paid. No waiting for bank transfers or invoicing." },
            { icon: "📋", title: "Compliant Transactions", desc: "All copper transactions recorded under SAPS second-hand goods regulations. Your sale is clean and documented." },
            { icon: "📅", title: "Mon–Sat, No Appointment", desc: "Open six days a week. No booking system — just drive in with your load." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-[var(--color-grey-border)]">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-bold text-sm text-[var(--color-grey-darkest)] mb-1">{item.title}</div>
                <div className="text-xs text-[var(--color-grey-muted)] leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo + address */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-md">
            <Image src="/images/operations-crane-scrap-1.jpeg" alt="Scrap operations at ARL Vanderbijlpark" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
              Where to Find Us
            </h2>
            <div className="space-y-3 text-sm text-[var(--color-grey-muted)]">
              <div className="bg-[var(--color-green-light)] rounded-xl p-4">
                <div className="font-semibold text-[var(--color-grey-dark)] mb-1">📍 Address</div>
                <div>74 Fairbanks Street<br />Vanderbijlpark, Gauteng, 1911</div>
              </div>
              <div className="bg-[var(--color-green-light)] rounded-xl p-4">
                <div className="font-semibold text-[var(--color-grey-dark)] mb-1">🕐 Trading Hours</div>
                <div>Monday – Friday: 08:00 – 17:00<br />Saturday: 08:00 – 13:00</div>
              </div>
              <div className="bg-[var(--color-green-light)] rounded-xl p-4">
                <div className="font-semibold text-[var(--color-grey-dark)] mb-1">📞 Contact</div>
                <div>
                  <a href="tel:+27164231299" className="text-[var(--color-green-primary)] font-medium">(016) 423-1299</a><br />
                  <a href="https://wa.me/27720800327" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-primary)] font-medium">WhatsApp: 072 080 0327</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Copper Recycling — Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-grey-border)]">
              <h3 className="font-semibold text-[var(--color-grey-darkest)] mb-2">{faq.q}</h3>
              <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/faq" className="text-[var(--color-green-primary)] text-sm font-semibold hover:underline">
            → View all FAQs
          </Link>
        </div>
      </section>

      {/* Price Enquiry Form */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get a Copper Price
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8 text-sm">
            Tell us your grade and quantity and we&apos;ll give you today&apos;s rate.
          </p>
          <div className="bg-[var(--color-grey-bg)] rounded-xl p-6">
            <ContactForm
              subject="[ARL] Copper Price Enquiry"
              submitLabel="Request Copper Price"
              fields={[
                { name: "Name", label: "Your Name", type: "text", required: true },
                { name: "Phone / WhatsApp", label: "Phone / WhatsApp", type: "tel", required: true },
                {
                  name: "Copper Grade",
                  label: "Copper Grade",
                  type: "select",
                  options: ["Bare Bright", "Millberry / #1 Copper", "#2 Copper", "Insulated Wire", "Transformer Copper", "Mixed / Unsure"],
                },
                { name: "Estimated Quantity", label: "Estimated Quantity (kg/ton)", type: "text" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center">
        <a
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20copper%20scrap%20to%20sell"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us your copper
        </a>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/sell-scrap" className="text-[var(--color-green-primary)] hover:underline">→ All metals we buy</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/aluminium-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Aluminium recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/brass-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Brass recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/locations" className="text-[var(--color-green-primary)] hover:underline">→ Service areas</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Copper Recycling", "ARL buys all grades of copper scrap in Vanderbijlpark and the Vaal region. Bare bright, millberry, #1 and #2 copper, insulated wire, and transformers accepted. Certified weighbridge, fair market prices, same-day payment.", "/copper-recycling")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "Sell Scrap Metal", url: "https://recyclingleaders.co.za/sell-scrap" },
        { name: "Copper Recycling", url: "https://recyclingleaders.co.za/copper-recycling" },
      ])) }} />
    </>
  );
}
