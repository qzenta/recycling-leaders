import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceSchema, breadcrumb, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Steel & Iron Recycling in Vanderbijlpark — Vaal Region | ARL",
  description:
    "Sell steel and iron scrap in the Vaal. ARL buys HMS 1 & 2, mild steel, cast iron, light iron, and shredded steel. Fair prices, certified weighbridge, same-day payment. Vanderbijlpark.",
};

const grades = [
  {
    grade: "HMS 1 (Heavy Melting Steel)",
    desc: "Clean, heavy gauge steel with wall thickness of 6mm or more. No tinplate, galvanised sheet, or light iron. A premium ferrous grade used directly by steel mills and foundries.",
    examples: "Structural steel beams, heavy angle iron, thick plate offcuts, railway line sections",
  },
  {
    grade: "HMS 2 (Mixed Heavy Melting)",
    desc: "A wider grade bracket than HMS 1 — includes light contamination, thinner sections (3–6mm), and minor rust. The most common industrial ferrous grade.",
    examples: "Mixed structural steel, hollow sections, angle iron, channel sections, mixed plate",
  },
  {
    grade: "Mild Steel",
    desc: "Low-carbon steel that is easy to cut and weld. Found everywhere in construction and fabrication. Priced based on condition and purity of the load.",
    examples: "Steel reinforcing bars (rebar), mild steel sheet, fabrication offcuts, gate and fence frames",
  },
  {
    grade: "Cast Iron",
    desc: "High-carbon iron that is brittle and cannot be bent without breaking. Heavier than mild steel. Common in old machinery, engine components, and municipal infrastructure.",
    examples: "Engine blocks, brake drums, old radiators, manhole covers, pots and stoves, pump bodies",
  },
  {
    grade: "Light Iron",
    desc: "Thin steel sheet, under 3mm gauge. Lower value than HMS grades due to higher paint and coating content and lower melt yield. Priced at light iron rate.",
    examples: "Corrugated roofing sheet, IBR sheet, car body panels, tin containers, drums",
  },
  {
    grade: "Shredded / Baled Steel",
    desc: "Pre-processed steel from industrial operations. If you're generating shredded or baled ferrous output and need a consistent buyer, contact us to discuss supply terms.",
    examples: "Industrial shredder output, baled auto scrap, pressed car bodies",
  },
];

const faqs = [
  {
    q: "What's the difference between steel and cast iron when it comes to pricing?",
    a: "Cast iron contains more carbon than mild steel and is priced slightly differently. The easiest field test: cast iron is brittle and will crack or break under an impact rather than bending. It's also typically darker and heavier for the same size. Both are accepted at our yard — cast iron is priced at the cast iron rate, which may be higher or lower than mild steel depending on market conditions.",
  },
  {
    q: "Do you accept corrugated iron roofing sheets?",
    a: "Yes. Corrugated IBR and standard corrugated sheet fall in the light iron category and are priced accordingly. Remove any fasteners, plastic caps, or gutters where practical. Very rusty or thin sheet may be priced lower, but we accept all conditions.",
  },
  {
    q: "Can I bring a mixed load of steel and iron?",
    a: "Yes. We sort mixed ferrous loads at the yard. A mixed load may be priced at the lower end of the grade range, so if you can separate your HMS from light iron before arriving, you'll likely get a better overall return. But we understand that sorting isn't always practical.",
  },
  {
    q: "Do you accept steel reinforcing bar (rebar)?",
    a: "Yes — clean rebar is a common and welcome ferrous grade. Ensure rebar is free from cement — concrete-encased rebar is difficult to process and may be refused or priced lower. Loose or lightly-contaminated rebar is fine.",
  },
  {
    q: "I'm a contractor — can I bring large loads of construction waste steel?",
    a: "Absolutely. We handle large contractor loads regularly. If your load exceeds a few tons, WhatsApp or call us in advance so we can ensure smooth scale access and have the yard ready. We can also advise on whether a bin collection arrangement makes more sense for your project.",
  },
];

export default function SteelRecyclingPage() {
  return (
    <>
      <PageHero
        headline="Steel & Iron Recycling — Vanderbijlpark"
        subheadline="ARL buys ferrous scrap across all grades — HMS, mild steel, cast iron, light iron. Bulk contractor loads welcome. Certified weighbridge, same-day payment."
        image="/images/operations-crane-scrap-2.jpeg"
        imageAlt="Crane handling ferrous scrap at ARL Vanderbijlpark"
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ferrous Scrap Buyers in the Vaal
        </h2>
        <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
          <p>
            Steel and iron form the backbone of the South African recycling industry — and the Vaal triangle, home to ArcelorMittal and a dense industrial base, generates more ferrous scrap than almost anywhere else in the country. All Recycling Leaders has been buying steel and iron scrap in this region since 2017, serving everyone from individual sellers with a few kilograms of rebar to contractors clearing full demolition sites.
          </p>
          <p>
            We accept all common ferrous grades: Heavy Melting Steel (HMS 1 and HMS 2), mild steel in all forms, cast iron components, light iron and roofing sheet, and shredded or baled ferrous where the volume justifies it. Our drive-on weighbridge handles heavy loads — vehicles up to truck scale — with certified, calibrated accuracy.
          </p>
          <p>
            Payment is same-day. Whether you're running a small load from a renovation or clearing a fabrication workshop, drive in to 74 Fairbanks Street, Vanderbijlpark. We're open Monday to Saturday, no appointment needed.
          </p>
        </div>
      </section>

      {/* Grades */}
      <section className="bg-[var(--color-grey-bg)] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Steel & Iron Grades We Accept
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mb-10">
            Graded and priced at point of sale — transparent weighing every time
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

      {/* Why ARL */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why Sell Steel at ARL
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "⚖️", title: "Drive-On Weighbridge", desc: "Full truck capacity. Certified calibration. Your vehicle is weighed loaded and empty — the difference is your scrap weight." },
            { icon: "🏗️", title: "Bulk Contractor Loads", desc: "Demolition sites, fabrication offcuts, construction waste — we handle large ferrous loads. Call ahead for very large volumes." },
            { icon: "💰", title: "Daily Market Rates", desc: "Ferrous prices linked to local market rates and demand. No fixed suppressed rate." },
            { icon: "⚡", title: "Same-Day Payment", desc: "Cash or EFT on the day. No 30-day invoicing for walk-in sellers." },
            { icon: "🚛", title: "Bin Collection Available", desc: "For businesses generating regular ferrous scrap, ask about our bin collection contract service." },
            { icon: "📅", title: "Mon–Sat Open", desc: "Monday–Friday 08:00–17:00, Saturday 08:00–13:00. No booking needed for standard loads." },
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

      {/* Address panel */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-md">
            <Image src="/images/truck-skip-weighbridge.jpeg" alt="Skip truck on the ARL weighbridge" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
              Visit Our Yard
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
          Steel & Iron Recycling — Common Questions
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

      {/* Price Enquiry */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get a Steel Price
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8 text-sm">
            Tell us your grade and quantity — we&apos;ll confirm today&apos;s rate.
          </p>
          <div className="bg-[var(--color-grey-bg)] rounded-xl p-6">
            <ContactForm
              subject="[ARL] Steel / Iron Price Enquiry"
              submitLabel="Request Steel Price"
              fields={[
                { name: "Name", label: "Your Name", type: "text", required: true },
                { name: "Phone / WhatsApp", label: "Phone / WhatsApp", type: "tel", required: true },
                {
                  name: "Steel Grade",
                  label: "Material Grade",
                  type: "select",
                  options: ["HMS 1 (Heavy Melting Steel)", "HMS 2 (Mixed Heavy Melting)", "Mild Steel", "Cast Iron", "Light Iron / Roofing Sheet", "Mixed Ferrous", "Other / Unsure"],
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
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20steel%20or%20iron%20scrap%20to%20sell"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us your steel
        </a>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/sell-scrap" className="text-[var(--color-green-primary)] hover:underline">→ All metals we buy</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/copper-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Copper recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/bin-collection" className="text-[var(--color-green-primary)] hover:underline">→ Bin collection for businesses</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/locations" className="text-[var(--color-green-primary)] hover:underline">→ Service areas</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Steel and Iron Recycling", "ARL buys ferrous scrap in Vanderbijlpark — HMS 1 & 2, mild steel, cast iron, light iron, and shredded steel. Bulk contractor loads welcome. Certified weighbridge, same-day payment.", "/steel-recycling")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "Sell Scrap Metal", url: "https://recyclingleaders.co.za/sell-scrap" },
        { name: "Steel & Iron Recycling", url: "https://recyclingleaders.co.za/steel-recycling" },
      ])) }} />
    </>
  );
}
