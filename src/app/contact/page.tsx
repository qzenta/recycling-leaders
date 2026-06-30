import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact ARL — All Recycling Leaders Vaal",
  description:
    "Get in touch with All Recycling Leaders. WhatsApp, call, or send an enquiry. Sedibeng / Vaal, Gauteng.",
};

const contactCards = [
  { icon: "📱", label: "WhatsApp",         value: "072 080 0327",                            href: "https://wa.me/27720800327" },
  { icon: "☎️", label: "Landline",          value: "(016) 423-1299",                          href: "tel:+27164231299" },
  { icon: "📍", label: "Address",           value: "74 Fairbanks Street, Vanderbijlpark, 1911", href: "https://maps.google.com/?q=74+Fairbanks+Street,Vanderbijlpark,Gauteng,1911,South+Africa" },
  { icon: "🕐", label: "Operating Hours",   value: "Mon–Fri 8am–5pm · Sat 8am–1pm",          href: null },
];

const faqs = [
  {
    q: "What documents do I need to sell scrap?",
    a: "A valid South African ID or passport is all you need. For loads above a certain value, we may request proof of ownership. All transactions are recorded as per SAPS requirements.",
  },
  {
    q: "How quickly do you pay?",
    a: "Payment is made on the same day, immediately after weighing and grading your scrap. We pay by EFT or cash — your choice.",
  },
  {
    q: "What areas do you service for bin collection?",
    a: "We service 19 areas across Sedibeng and the wider Vaal — including Vanderbijlpark, Vereeniging, Sebokeng, Evaton, Meyerton, Heidelberg, and more. View the full list on our Locations page.",
  },
  {
    q: "Do you buy e-waste and appliances?",
    a: "Yes. We buy end-of-life electronics, appliances, and mixed e-waste. Bring them in and we will grade and weigh them at the yard.",
  },
  {
    q: "Can I schedule a collection instead of bringing scrap in?",
    a: "For large commercial volumes or monthly bin contracts, we can arrange collection. For smaller loads, we recommend visiting the yard directly. WhatsApp us to discuss.",
  },
  {
    q: "Are your scales certified?",
    a: "Yes. Our weighbridge is formally calibrated and certified. Every reading is displayed to you in real time — no estimates, no deductions without explanation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Get In Touch"
        subheadline="WhatsApp, call, or fill in the form — we respond fast."
        image="/images/yard-weighbridge.jpeg"
        tall
        imageAlt="The ARL yard in Vanderbijlpark"
      />

      {/* Contact Cards */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((c) => (
            <div key={c.label} className="bg-white rounded-xl p-5 shadow-sm border border-[var(--color-grey-border)] flex gap-4 items-start">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-grey-muted)] mb-0.5">{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="font-semibold text-[var(--color-green-primary)] hover:underline text-sm leading-snug">
                    {c.value}
                  </a>
                ) : (
                  <span className="font-semibold text-[var(--color-grey-dark)] text-sm leading-snug">{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2-column: Form left, FAQ right */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Enquiry Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
              Send an Enquiry
            </h2>
            <p className="text-sm text-[var(--color-grey-muted)] mb-6">Fill in the form and we will get back to you within a few hours.</p>
            <ContactForm
              subject="[ARL] General Enquiry"
              fields={[
                { name: "Name",             label: "Your Name",        type: "text",     required: true },
                { name: "Phone",            label: "Phone",            type: "tel",      required: true },
                { name: "Email",            label: "Email",            type: "email" },
                { name: "Service Interest", label: "Service Interest", type: "select",
                  options: ["Sell Scrap", "Recycling Partner", "Bin Collection", "Other"] },
                { name: "Message",          label: "Message",          type: "textarea", required: true },
              ]}
            />
          </div>

          {/* Right — FAQ accordion */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[var(--color-grey-muted)] mb-6">Quick answers to the questions we hear most often.</p>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border border-[var(--color-grey-border)] rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm text-[var(--color-grey-darkest)] hover:bg-[var(--color-green-light)] transition-colors list-none">
                    {faq.q}
                    <svg className="w-4 h-4 flex-shrink-0 ml-3 text-[var(--color-green-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pt-1 text-sm text-[var(--color-grey-muted)] leading-relaxed border-t border-[var(--color-grey-border)] bg-[var(--color-grey-lightest)]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map — full width */}
      <section className="w-full">
        <div className="px-4 max-w-4xl mx-auto pt-10 pb-4">
          <h2 className="text-2xl font-bold text-center text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
            Find Our Yard
          </h2>
          <p className="text-center text-sm text-[var(--color-grey-muted)] mt-1 mb-0">
            74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911
          </p>
        </div>
        <div className="w-full h-72 mt-4">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=REDACTED_GOOGLE_MAPS_KEY&q=74+Fairbanks+Street,Vanderbijlpark,Gauteng,1911,South+Africa&zoom=16"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARL Yard Location"
          />
        </div>
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
      })}} />
    </>
  );
}
