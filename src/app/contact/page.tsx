import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact ARL — All Recycling Leaders Vaal",
  description:
    "Get in touch with All Recycling Leaders. WhatsApp, call, or send an enquiry. Sedibeng / Vaal, Gauteng.",
};

const contactCards = [
  {
    icon: "📱",
    label: "WhatsApp",
    value: "072 080 0327",
    href: "https://wa.me/27720800327",
  },
  {
    icon: "☎️",
    label: "Landline",
    value: "(016) 423-1299",
    href: "tel:+27164231299",
  },
  {
    icon: "📍",
    label: "Address",
    value: "594C Houtkop Road, Skipper Botha, Solandpark, Sedibeng, 1900",
    href: "https://maps.google.com/?q=594C+Houtkop+Road,Solandpark,Sedibeng",
  },
  {
    icon: "🕐",
    label: "Operating Hours",
    value: "Mon–Sat · Hours TBC",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-green-primary)] text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get In Touch
          </h1>
          <p className="text-green-100">
            WhatsApp, call, or fill in the form — we respond fast.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {contactCards.map((c) => (
            <div key={c.label} className="bg-white rounded-xl p-5 shadow-sm flex gap-4 items-start">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-grey-muted)] mb-0.5">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--color-green-primary)] hover:underline"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="font-semibold text-[var(--color-grey-dark)]">{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Enquiry Form */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-6 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Send an Enquiry
          </h2>
          <ContactForm
            subject="[ARL] General Enquiry"
            fields={[
              { name: "Name", label: "Your Name", type: "text", required: true },
              { name: "Phone", label: "Phone", type: "tel", required: true },
              { name: "Email", label: "Email", type: "email" },
              {
                name: "Service Interest",
                label: "Service Interest",
                type: "select",
                options: ["Sell Scrap", "Recycling Partner", "Bin Collection", "Other"],
              },
              { name: "Message", label: "Message", type: "textarea", required: true },
            ]}
          />
        </div>
      </section>

      {/* Map */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold text-center mb-6 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Find Our Yard
        </h2>
        <div className="rounded-xl overflow-hidden shadow-sm aspect-video">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDXrRZrXffB1ECEWSRgeS8YE5dE2pBqOZE&q=594C+Houtkop+Road,Solandpark,Sedibeng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARL Yard Location"
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "All Recycling Leaders",
            url: "https://recyclingleaders.co.za",
            telephone: "+27720800327",
            address: {
              "@type": "PostalAddress",
              streetAddress: "594C Houtkop Road, Skipper Botha",
              addressLocality: "Solandpark",
              addressRegion: "Sedibeng",
              postalCode: "1900",
              addressCountry: "ZA",
            },
          }),
        }}
      />
    </>
  );
}
