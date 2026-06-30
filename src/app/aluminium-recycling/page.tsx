import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceSchema, breadcrumb, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aluminium Recycling in Vanderbijlpark — Vaal Region | ARL",
  description:
    "Sell aluminium scrap in the Vaal. ARL buys extrusions, cast aluminium, litho sheet, cans, and profiles. Fair prices, certified weighbridge, same-day payment. Vanderbijlpark, Sedibeng.",
};

const grades = [
  {
    grade: "Aluminium Extrusions",
    desc: "Clean aluminium profiles from windows, doors, and construction frames. One of the most common grades we receive — clean extrusions fetch a good price per kg. Remove hinges, glass, rubber seals, and screws where possible.",
    examples: "Window frames, door frames, curtain walling, shopfronts, solar panel frames",
  },
  {
    grade: "Cast Aluminium",
    desc: "Aluminium components formed by casting — typically heavier, thicker items. Engine components, wheels, and industrial castings are all accepted. Prices vary by alloy; we'll assess on the day.",
    examples: "Engine blocks, gearbox housings, alloy wheels, industrial pump housings, kitchen cookware",
  },
  {
    grade: "Litho Sheet / Flat Aluminium",
    desc: "Thin flat aluminium sheet, including printing plates (litho sheet) and sheet metal offcuts. Accepted by weight.",
    examples: "Offset printing plates, sheet metal offcuts, flat roofing material, industrial panel scraps",
  },
  {
    grade: "Aluminium Cans",
    desc: "Used beverage cans — collected in bulk from businesses, events, schools, or community drives. Cans are a low-density material so you need volume to make it worthwhile, but the price per ton is strong.",
    examples: "Soft drink cans, beer cans, energy drink cans — crushed or uncrushed",
  },
  {
    grade: "Aluminium Wire / Cable",
    desc: "Aluminium conductors from overhead power lines, service cables, and industrial wiring. Separate from copper — aluminium wire is silver-grey in colour.",
    examples: "Overhead aerial cable (AAC, AAAC, ACSR), underground aluminium service cable, busbar sections",
  },
  {
    grade: "Mixed / Contaminated Aluminium",
    desc: "Aluminium with attached fasteners, paint, anodising, or minor steel inserts. Priced at a lower rate than clean grades but still accepted. We'll separate what we can on the day.",
    examples: "Painted extrusions, riveted aluminium panel assemblies, dirty cast components",
  },
];

const faqs = [
  {
    q: "How do I tell aluminium from steel or stainless steel?",
    a: "Aluminium is lightweight and silver-grey in colour. It doesn't stick to a magnet — this is the quickest test. Steel and stainless steel will be heavier for the same size and may attract a magnet (stainless may not, but is still much heavier than aluminium). If you're unsure, bring it in and we'll sort it at the yard.",
  },
  {
    q: "Should I clean my aluminium before selling it?",
    a: "Removing non-aluminium components (screws, glass, rubber) and separating by grade will get you a better price. But don't spend hours cleaning if the volume doesn't justify it — we buy contaminated aluminium at a lower grade price. Heavy castings with minor steel inserts are fine to bring as-is.",
  },
  {
    q: "I have a large volume of aluminium extrusions from a building project — can ARL handle bulk loads?",
    a: "Yes. We handle bulk contractor loads regularly. WhatsApp or call us to let us know what you have and roughly how much — we'll advise on timing and confirm we have scale capacity for the load. For very large volumes we can arrange a collection quote.",
  },
  {
    q: "Do you buy aluminium cans from schools or community collection drives?",
    a: "Absolutely. We buy aluminium cans in bulk and have helped a number of community fundraising efforts in the Vaal. Crush them flat if possible to save transport space, but we accept uncrushed too. Call ahead if you're bringing a very large quantity.",
  },
  {
    q: "How does your weighbridge work for aluminium loads?",
    a: "Drive your vehicle onto the certified weighbridge before offloading. We record the gross weight. After offloading, we weigh the empty vehicle. The difference is your material weight. This is the most accurate method and eliminates any dispute — you see the readings in real time.",
  },
];

export default function AluminiumRecyclingPage() {
  return (
    <>
      <PageHero
        headline="Aluminium Recycling — Vaal Region"
        subheadline="ARL buys all aluminium grades at our Vanderbijlpark yard. Extrusions, castings, litho sheet, cans, and cable — certified weighbridge, same-day payment."
        image="/images/fleet-trucks-yard-1.jpeg"
        imageAlt="ARL collection fleet at the Vanderbijlpark scrap yard"
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Selling Aluminium Scrap in the Vaal
        </h2>
        <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
          <p>
            Aluminium is one of the most recyclable materials on the planet — it can be melted and recast indefinitely without losing quality. It's also one of the highest-value scrap metals by weight, making it worth the effort to collect and sell properly. All Recycling Leaders buys every aluminium grade at our Vanderbijlpark yard, paying fair market rates to anyone with aluminium to sell.
          </p>
          <p>
            We serve a wide range of sellers: homeowners renovating or replacing old window frames; contractors clearing building sites; factories and workshops with aluminium offcuts and rejected castings; businesses and schools running aluminium can collection drives. Whatever your source, we'll weigh it accurately, grade it transparently, and pay you on the same day.
          </p>
          <p>
            Our yard is at 74 Fairbanks Street, Vanderbijlpark — central to the entire Vaal and Sedibeng region. Open Monday to Saturday, no appointment needed. Just pull in with your load.
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
            Aluminium Grades We Accept
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mb-10">
            Assessed and graded at point of sale — no guessing after the fact
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
          Why Sell Aluminium at ARL
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "⚖️", title: "Drive-Over Weighbridge", desc: "Entire vehicle weighed loaded, then unloaded. Accurate tare weight, no estimation on bulk loads." },
            { icon: "💰", title: "Market-Linked Prices", desc: "Aluminium rates updated daily against the LME aluminium price. You benefit when markets move up." },
            { icon: "🏗️", title: "Contractor-Friendly", desc: "We handle large site clearance loads. Let us know the volume in advance to ensure smooth processing." },
            { icon: "⚡", title: "Same-Day Payment", desc: "Cash or EFT on the day of drop-off. No delays, no invoicing cycle." },
            { icon: "📋", title: "Community Collection", desc: "Schools, churches, and community groups doing aluminium can drives are welcome. Call ahead for bulk." },
            { icon: "📅", title: "Open 6 Days a Week", desc: "Monday–Friday 08:00–17:00, Saturday 08:00–13:00. No appointment necessary." },
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
            <Image src="/images/truck-bin-yard.jpeg" alt="ARL yard and bin collection operation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
          Aluminium Recycling — Common Questions
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
            Get an Aluminium Price
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8 text-sm">
            Tell us your grade and quantity — we&apos;ll give you today&apos;s rate.
          </p>
          <div className="bg-[var(--color-grey-bg)] rounded-xl p-6">
            <ContactForm
              subject="[ARL] Aluminium Price Enquiry"
              submitLabel="Request Aluminium Price"
              fields={[
                { name: "Name", label: "Your Name", type: "text", required: true },
                { name: "Phone / WhatsApp", label: "Phone / WhatsApp", type: "tel", required: true },
                {
                  name: "Aluminium Grade",
                  label: "Aluminium Grade",
                  type: "select",
                  options: ["Extrusions (window/door frames)", "Cast Aluminium", "Litho Sheet / Flat Sheet", "Aluminium Cans", "Aluminium Wire / Cable", "Mixed / Unsure"],
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
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20aluminium%20scrap%20to%20sell"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us your aluminium
        </a>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/sell-scrap" className="text-[var(--color-green-primary)] hover:underline">→ All metals we buy</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/copper-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Copper recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/steel-recycling" className="text-[var(--color-green-primary)] hover:underline">→ Steel recycling</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/locations" className="text-[var(--color-green-primary)] hover:underline">→ Service areas</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Aluminium Recycling", "ARL buys all aluminium grades in Vanderbijlpark — extrusions, castings, litho sheet, cans, and wire. Certified weighbridge, fair market prices, same-day payment.", "/aluminium-recycling")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "Sell Scrap Metal", url: "https://recyclingleaders.co.za/sell-scrap" },
        { name: "Aluminium Recycling", url: "https://recyclingleaders.co.za/aluminium-recycling" },
      ])) }} />
    </>
  );
}
