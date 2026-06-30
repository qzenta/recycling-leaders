import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceSchema, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your Scrap Metal — Fair Prices in Sedibeng | ARL",
  description:
    "Get a fair price for your scrap metal in the Vaal region. We buy copper, aluminium, steel, brass and more. Fast payment.",
};

const metals = [
  { icon: "🔶", name: "Copper", note: "All grades — bare bright, millberry, #1, #2" },
  { icon: "⬜", name: "Aluminium", note: "Extrusions, cast, litho, cans" },
  { icon: "⚙️", name: "Cast Iron", note: "Engine blocks, brake drums, radiators" },
  { icon: "🔩", name: "Steel", note: "Mild steel, HMS, light iron" },
  { icon: "🟡", name: "Brass", note: "Yellow brass, red brass, plumbing" },
  { icon: "⬛", name: "Lead", note: "Wheel weights, pipes, batteries" },
  { icon: "✨", name: "Stainless Steel", note: "304, 316, kitchen grade" },
  { icon: "🔋", name: "Scrap Batteries", note: "Lead-acid car batteries — all sizes accepted as scrap" },
  { icon: "💻", name: "E-Waste", note: "Computers, cables, transformers" },
];

const steps = [
  { num: "1", label: "Bring your scrap", desc: "Drive to our yard at 74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911." },
  { num: "2", label: "We weigh accurately", desc: "We use calibrated scales — fair, transparent weighing every time." },
  { num: "3", label: "You get paid", desc: "Same-day cash or EFT payment. No delays, no hassle." },
];

export default function SellScrapPage() {
  return (
    <>
      <PageHero
        headline="We Buy All Scrap Metal — Fast &amp; Fair"
        subheadline="Accurate weighing, fair market prices, and same-day payment in Sedibeng and the Vaal region."
        image="/images/yard-weighbridge.jpeg"
        imageAlt="ARL weighbridge at the Vanderbijlpark yard"
      />

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-1 w-full">
        {[
          { src: "/images/operations-crane-scrap-1.jpeg", alt: "Crane lifting scrap metal at ARL" },
          { src: "/images/truck-skip-weighbridge.jpeg",   alt: "Skip truck on the weighbridge" },
          { src: "/images/fleet-trucks-yard-1.jpeg",      alt: "ARL collection fleet at the yard" },
        ].map((img) => (
          <div key={img.src} className="relative h-48 md:h-64 overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      {/* Metals We Buy */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Metals We Buy
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metals.map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-5 shadow-sm flex gap-4 items-start">
              <span className="text-3xl">{m.icon}</span>
              <div>
                <div className="font-bold text-[var(--color-grey-darkest)]">{m.name}</div>
                <div className="text-sm text-[var(--color-grey-muted)] mt-0.5">{m.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-12 h-12 bg-[var(--color-green-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-bold text-lg mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.label}
                </h3>
                <p className="text-sm text-[var(--color-grey-muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Enquiry Form */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get a Price
        </h2>
        <p className="text-center text-[var(--color-grey-muted)] mb-8">
          Tell us what you have and we&apos;ll give you a quote.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <ContactForm
            subject="[ARL] Scrap Price Enquiry"
            submitLabel="Request Price"
            fields={[
              { name: "Name", label: "Your Name", type: "text", required: true },
              { name: "Phone / WhatsApp", label: "Phone / WhatsApp", type: "tel", required: true },
              {
                name: "Metal Type",
                label: "Metal Type",
                type: "select",
                required: true,
                options: ["Copper", "Aluminium", "Cast Iron", "Steel", "Brass", "Lead", "Stainless Steel", "Scrap Batteries", "E-Waste", "Mixed / Other"],
              },
              { name: "Estimated Quantity", label: "Estimated Quantity (kg/ton)", type: "text" },
            ]}
          />
        </div>
      </section>

      {/* Find Us */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Us
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mb-4">
            74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--color-grey-muted)] mb-6">
            <div className="bg-[var(--color-green-light)] rounded-xl p-4">
              <div className="font-semibold text-[var(--color-grey-dark)] mb-1">📍 Address</div>
              <div>74 Fairbanks Street<br />Vanderbijlpark, Gauteng, 1911</div>
            </div>
            <div className="bg-[var(--color-green-light)] rounded-xl p-4">
              <div className="font-semibold text-[var(--color-grey-dark)] mb-1">🕐 Hours</div>
              <div>Mon–Fri: 8:00am – 5:00pm<br />Saturday: 8:00am – 1:00pm</div>
            </div>
          </div>
        </div>
      </section>
      {/* Map — full width, reduced height */}
      <div className="w-full h-72">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAJFakbESf2xcpUGTBYpm-s2HW5Np07HXQ&q=74+Fairbanks+Street,Vanderbijlpark,Gauteng,1911,South+Africa&zoom=16"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ARL Location"
        />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Scrap Metal Buying", "ARL buys copper, aluminium, steel, iron, brass, lead, stainless steel and e-waste. Accurate weighing, fair market prices, same-day payment.", "/sell-scrap")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([{ name: "Home", url: "https://recyclingleaders.co.za" }, { name: "Sell Scrap Metal", url: "https://recyclingleaders.co.za/sell-scrap" }])) }} />

      {/* WhatsApp CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center">
        <a
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20scrap%20to%20sell"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us your scrap
        </a>
      </section>
    </>
  );
}
