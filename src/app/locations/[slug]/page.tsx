import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { locationContent } from "@/lib/location-content";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { breadcrumb, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  const content = locationContent.find((c) => c.slug === slug);
  return {
    title: `Scrap Metal Buyers in ${loc.name} | All Recycling Leaders`,
    description: `Looking to sell scrap metal in ${loc.name}? ARL buys copper, aluminium, steel and more. Our Vanderbijlpark yard is only ${loc.distance} from ${loc.name}. Fair prices, same-day payment.`,
    openGraph: {
      title: `Scrap Metal Buyers in ${loc.name} | All Recycling Leaders`,
      description: content?.intro[0] ?? `ARL buys scrap metal in ${loc.name}. Fair prices, certified weighbridge, same-day payment.`,
    },
  };
}

const metals = [
  { icon: "🔶", name: "Copper" },
  { icon: "⬜", name: "Aluminium" },
  { icon: "⚙️", name: "Steel" },
  { icon: "🔩", name: "Iron" },
  { icon: "🟡", name: "Brass" },
  { icon: "⬛", name: "Lead" },
  { icon: "✨", name: "Stainless Steel" },
  { icon: "🔋", name: "Scrap Batteries" },
  { icon: "💻", name: "E-Waste" },
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const content = locationContent.find((c) => c.slug === slug);

  return (
    <>
      <PageHero
        headline={`We Buy Scrap Metal in ${loc.name}`}
        subheadline={`Serving ${loc.name} and surrounding Vaal communities — bring your scrap to our Vanderbijlpark yard. Fair prices, accurate weighing, fast payment.`}
        image="/images/yard-trucks.jpeg"
        imageAlt={`ARL scrap yard serving ${loc.name}`}
      />

      {/* Local intro — unique per location */}
      {content && (
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2
            className="text-3xl font-bold mb-6 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Scrap Metal Buying in {loc.name}
          </h2>
          <div className="space-y-4 text-[var(--color-grey-muted)] leading-relaxed">
            {content.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-grey-border)]">
              <h3 className="font-bold text-[var(--color-grey-darkest)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Local Context
              </h3>
              <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">{content.localContext}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-grey-border)]">
              <h3 className="font-bold text-[var(--color-grey-darkest)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                What {loc.name} Sellers Bring In
              </h3>
              <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">{content.commonMaterials}</p>
            </div>
          </div>
        </section>
      )}

      {/* What We Buy */}
      <section className="bg-[var(--color-grey-bg)] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Buy
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {metals.map((m) => (
              <div key={m.name} className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm">
                <span className="text-2xl">{m.icon}</span>
                <span className="font-semibold text-xs text-[var(--color-grey-dark)] text-center">{m.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/sell-scrap"
              className="inline-block px-6 py-2.5 bg-[var(--color-green-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-green-mid)] transition-colors"
            >
              See Full Price Guide
            </Link>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How to Find Us from {loc.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-[var(--color-grey-muted)]">
              <p>
                Our yard is located at <strong className="text-[var(--color-grey-dark)]">74 Fairbanks Street, Vanderbijlpark, Gauteng</strong> —
                approximately <strong className="text-[var(--color-green-primary)]">{loc.distance}</strong> from {loc.name}.
              </p>
              <p>
                Head towards Vanderbijlpark on the R59 / N1 corridor. We&apos;re easy to find and open
                Monday to Saturday. No appointment needed — just pull in with your scrap.
              </p>
              <div className="flex gap-3 flex-wrap mt-4">
                <a
                  href="https://wa.me/27720800327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg text-sm hover:bg-[#1ebe5a] transition-colors"
                >
                  WhatsApp for Directions
                </a>
                <a
                  href="tel:+27164231299"
                  className="px-5 py-2.5 border border-[var(--color-grey-border)] text-[var(--color-grey-dark)] font-semibold rounded-lg text-sm hover:bg-[var(--color-grey-bg)] transition-colors"
                >
                  Call (016) 423-1299
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-video">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=REDACTED_GOOGLE_MAPS_KEY&q=74+Fairbanks+Street,Vanderbijlpark,Gauteng,1911,South+Africa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`ARL yard location from ${loc.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location FAQ */}
      {content && content.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2
            className="text-3xl font-bold mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Questions from {loc.name} Sellers
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-grey-border)]">
                <h3 className="font-semibold text-[var(--color-grey-darkest)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-[var(--color-green-primary)] text-sm font-semibold hover:underline">
              → View all frequently asked questions
            </Link>
          </div>
        </section>
      )}

      {/* Price Enquiry Form */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get a Price — {loc.name}
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8 text-sm">
            Tell us what you have and we&apos;ll get back to you quickly.
          </p>
          <ContactForm
            subject={`[ARL] Scrap Price Enquiry — ${loc.name}`}
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
              { name: "Area", label: "Your Area", type: "text" },
            ]}
          />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center">
        <a
          href={`https://wa.me/27720800327?text=Hi%20ARL%2C%20I%27m%20in%20${encodeURIComponent(loc.name)}%20and%20have%20scrap%20to%20sell`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          {WA_ICON}
          WhatsApp us — I&apos;m in {loc.name}
        </a>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/sell-scrap" className="text-[var(--color-green-primary)] hover:underline">→ Full price guide</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/bin-collection" className="text-[var(--color-green-primary)] hover:underline">→ Bin collection contracts</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/contact" className="text-[var(--color-green-primary)] hover:underline">→ Contact us</Link>
        <span className="text-[var(--color-grey-border)]">|</span>
        <Link href="/locations" className="text-[var(--color-green-primary)] hover:underline">→ All service areas</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "All Recycling Leaders",
        url: "https://recyclingleaders.co.za",
        telephone: "+27720800327",
        address: {
          "@type": "PostalAddress",
          streetAddress: "74 Fairbanks Street",
          addressLocality: "Vanderbijlpark",
          addressRegion: "Gauteng",
          postalCode: "1911",
          addressCountry: "ZA",
        },
        areaServed: [loc.name, "Sedibeng", "Vaal", "Gauteng"],
      }) }} />
      {content && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faqs)) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "Locations", url: "https://recyclingleaders.co.za/locations" },
        { name: `Scrap Metal in ${loc.name}`, url: `https://recyclingleaders.co.za/locations/${loc.slug}` },
      ])) }} />
    </>
  );
}
