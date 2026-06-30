import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceSchema, breadcrumb, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Brass Recycling in Vanderbijlpark — Vaal Region | ARL",
  description:
    "Sell brass scrap in the Vaal. ARL buys yellow brass, red brass, plumbing fittings, shell casings, and brass offcuts. Fair prices, certified weighbridge, same-day payment. Vanderbijlpark.",
};

const grades = [
  {
    grade: "Yellow Brass",
    desc: "The most common brass alloy — approximately 70% copper, 30% zinc. Bright golden-yellow in colour. Typically found in decorative fittings, hardware, and electrical components. Highest value of the common brass grades.",
    examples: "Door handles, hinges, keys, decorative fixtures, electrical connectors, tap bodies",
  },
  {
    grade: "Red Brass",
    desc: "Higher copper content (85%+) than yellow brass. Redder in colour — closer to copper. Common in plumbing components that require corrosion resistance. Priced higher than yellow brass due to copper content.",
    examples: "Gate valves, stop valves, pump casings, fire hydrant components, water meter housings",
  },
  {
    grade: "Plumbing Brass (Fittings)",
    desc: "Mixed plumbing offcuts and old fittings — includes elbows, couplings, nipples, reducers, and valves. Sold mixed or sorted. Sorted plumbing brass returns a better rate.",
    examples: "Old tap bodies, compression fittings, ball valves, gate valves, pipe unions",
  },
  {
    grade: "Brass Shell Casings",
    desc: "Used firearm cartridge casings — common from shooting ranges, security companies, and farms. Must be confirmed as empty, deactivated, and safe. We reserve the right to refuse if safety cannot be confirmed.",
    examples: "Spent rifle and pistol cartridges, shotgun shells (brass head), range collection buckets",
  },
  {
    grade: "Brass Turnings / Swarf",
    desc: "Machined brass offcuts from CNC or lathe operations — fine chips and turnings. Priced at a slightly lower rate due to oil contamination and surface area. Keep dry if possible.",
    examples: "CNC machine brass swarf, lathe turnings from workshops, mixed brass chips",
  },
  {
    grade: "Mixed Brass",
    desc: "Unsorted mixed brass — a combination of grades. Priced conservatively at the lowest applicable grade. Sorting before you arrive typically improves your return.",
    examples: "Assorted fittings and hardware, estate clearance brass, mixed workshop offcuts",
  },
];

const faqs = [
  {
    q: "How do I identify brass versus copper or bronze?",
    a: "Brass has a distinctly golden-yellow colour (yellow brass) or reddish-gold colour (red brass). It's heavier than aluminium and lighter than lead. Bronze looks similar to red brass but tends to be darker and duller. A simple test: brass doesn't stick to a magnet, and it's generally harder than pure copper. If you're unsure, bring it in — we'll identify it at the yard.",
  },
  {
    q: "Do you buy old brass taps and plumbing from a bathroom renovation?",
    a: "Absolutely. Old taps, valves, pipe fittings, and mixer bodies are all accepted. Remove them carefully to avoid cracking — brass is relatively brittle when cold. Clean is better (remove rubber seals and iron nipples where easy), but we accept mixed plumbing brass and sort it here.",
  },
  {
    q: "What about brass shell casings — are there any restrictions?",
    a: "We buy used shell casings, but they must be clearly spent and deactivated — no live rounds. For large quantities from shooting ranges, security companies, or farms, call ahead so we can prepare. We follow all applicable regulations for second-hand goods and will refuse any load with safety concerns.",
  },
  {
    q: "My workshop generates brass swarf from machining — is it worth selling?",
    a: "Yes, though brass swarf is priced at a lower rate than solid brass due to oil contamination and the processing cost. The key is volume — collect until you have a meaningful quantity (ideally 50kg+). Keep it as oil-free as possible and store it dry. Swarf from dry cutting is worth more than oil-soaked material.",
  },
  {
    q: "Is brass priced close to copper?",
    a: "Brass contains significant copper (around 60–90% depending on alloy), so its price per kg is substantial — well above steel or aluminium, though below pure copper. The exact rate changes daily with the copper and zinc spot prices. Call or WhatsApp us on the morning you plan to sell for the day's rate.",
  },
];

export default function BrassRecyclingPage() {
  return (
    <>
      <PageHero
        headline="Brass Recycling — Fair Prices in the Vaal"
        subheadline="ARL buys all brass grades at our Vanderbijlpark yard. Yellow brass, red brass, plumbing fittings, shell casings — certified weighbridge, same-day payment."
        image="/images/yard-weighbridge.jpeg"
        imageAlt="ARL certified weighbridge at the Vanderbijlpark scrap yard"
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Selling Brass Scrap in the Vaal Region
        </h2>
        <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
          <p>
            Brass is a high-value non-ferrous alloy — its significant copper content makes it one of the better-paying metals per kilogram at any scrap yard. All Recycling Leaders buys every brass grade at our Vanderbijlpark yard, from clean yellow brass hardware to mixed plumbing fittings and machined brass swarf.
          </p>
          <p>
            Brass turns up in many places: bathroom renovations (taps, mixers, valves), plumbing work (fittings, pipe unions, gate valves), electrical components, hardware stores clearing old stock, shooting ranges and farms (shell casings), and engineering workshops (swarf from CNC machining). Whatever your source, we assess on arrival, weigh accurately, and pay the same day.
          </p>
          <p>
            Separating your brass by grade before arriving will typically improve your return — but we also buy mixed loads. Drive in to 74 Fairbanks Street, Vanderbijlpark, open Monday to Saturday. No appointment necessary.
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
            Brass Grades We Accept
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mb-10">
            All grades assessed and graded at point of sale
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
          Why Sell Brass at ARL
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "⚖️", title: "Certified Weighbridge", desc: "Calibrated and certified scales. The reading is visible to you before payment — no rounding, no estimates." },
            { icon: "💰", title: "Copper-Linked Prices", desc: "Brass rates move with the copper and zinc spot prices. We update daily — no fixed suppressed rate." },
            { icon: "🔍", title: "Transparent Grading", desc: "We explain our grade decision on the spot. Sorted brass gets the grade it deserves; mixed loads are priced conservatively." },
            { icon: "⚡", title: "Same-Day Payment", desc: "Cash or EFT on the day of drop-off. Walk in with brass, walk out paid." },
            { icon: "📋", title: "Compliant Transactions", desc: "All non-ferrous transactions recorded per SAPS second-hand goods regulations. Clean, documented sales." },
            { icon: "📅", title: "Open 6 Days", desc: "Monday–Friday 08:00–17:00, Saturday 08:00–13:00. No appointment needed." },
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
            <Image src="/images/team-owner-staff-1.jpeg" alt="ARL owner and team at Vanderbijlpark" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
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
          Brass Recycling — Common Questions
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
            Get a Brass Price
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8 text-sm">
            Tell us your grade and quantity — we&apos;ll confirm today&apos;s rate.
          </p>
          <div className="bg-[var(--color-grey-bg)] rounded-xl p-6">
            <ContactForm
              subject="[ARL] Brass Price Enquiry"
              submitLabel="Request Brass Price"
              fields={[
                { name: "Name", label: "Your Name", type: "text", required: true },
                { name: "Phone / WhatsApp", label: "Phone / WhatsApp", type: "tel", required: true },
                {
                  name: "Brass Grade",
                  label: "Brass Grade",
                  type: "select",
                  options: ["Yellow Brass", "Red Brass", "Plumbing Fittings", "Shell Casings", "Brass Swarf / Turnings", "Mixed Brass"],
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
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20brass%20scrap%20to%20sell"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us your brass
        </a>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/sell-scrap" className="text-[var(--color-green-primary)] hover:underline">→ All metals we buy</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/copper-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Copper recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/aluminium-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Aluminium recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/locations" className="text-[var(--color-green-primary)] hover:underline">→ Service areas</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Brass Recycling", "ARL buys all brass grades in Vanderbijlpark — yellow brass, red brass, plumbing fittings, shell casings, and swarf. Certified weighbridge, fair copper-linked prices, same-day payment.", "/brass-recycling")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "Sell Scrap Metal", url: "https://recyclingleaders.co.za/sell-scrap" },
        { name: "Brass Recycling", url: "https://recyclingleaders.co.za/brass-recycling" },
      ])) }} />
    </>
  );
}
