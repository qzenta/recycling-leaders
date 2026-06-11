import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Monthly Bin Collection Contracts — Vaal Region | ARL",
  description:
    "Hassle-free monthly waste bin collection for businesses in Sedibeng and the Vaal. Contact ARL for a retainer plan.",
};

const steps = [
  { num: "1", label: "We place bins", desc: "We deliver and position the right bins at your premises." },
  { num: "2", label: "Scheduled collection", desc: "Regular monthly pickups — you never need to chase us." },
  { num: "3", label: "Responsible disposal", desc: "All collected material is recycled or disposed of responsibly." },
];

const clients = [
  { icon: "🏢", label: "Offices" },
  { icon: "🏭", label: "Factories" },
  { icon: "🏘️", label: "Residential Complexes" },
  { icon: "🛒", label: "Retail Centres" },
  { icon: "🏫", label: "Schools" },
];

const serviceFeatures = [
  { icon: "📅", title: "Scheduled Monthly Collection", desc: "Predictable, on-time pickups so you can plan around them." },
  { icon: "🗑️", title: "Bin Placement Included", desc: "We supply and position bins — no upfront equipment cost." },
  { icon: "♻️", title: "Responsible Recycling", desc: "All waste is processed or recycled — nothing just dumped." },
  { icon: "📞", title: "Single Point of Contact", desc: "One number, one team — easy account management." },
];

export default function BinCollectionPage() {
  return (
    <>
      <PageHero
        headline="Hassle-Free Monthly Bin Collection"
        subheadline="We handle the waste so you can focus on your business. Sedibeng and Vaal region."
      />

      {/* Yard photo strip */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image
          src="/images/truck-bin-yard.jpeg"
          alt="ARL collection truck with bin at the Solandpark yard warehouse"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-14">
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
      </section>

      {/* Who It's For */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Who It&apos;s For
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <div
                key={c.label}
                className="bg-[var(--color-green-light)] rounded-xl px-6 py-4 flex flex-col items-center gap-2 min-w-[110px]"
              >
                <span className="text-3xl">{c.icon}</span>
                <span className="font-semibold text-sm text-[var(--color-grey-dark)]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-3xl font-bold text-center mb-8 text-[var(--color-grey-darkest)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What&apos;s Included
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {serviceFeatures.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
              <div className="text-3xl">{f.icon}</div>
              <div>
                <h3 className="font-bold text-[var(--color-grey-darkest)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--color-grey-muted)]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get a Monthly Plan
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-8">
            Tell us about your business and we&apos;ll tailor a bin collection plan.
          </p>
          <ContactForm
            subject="[ARL] Bin Collection Enquiry"
            submitLabel="Request a Plan"
            fields={[
              { name: "Business Name", label: "Business Name", type: "text", required: true },
              { name: "Contact Person", label: "Contact Person", type: "text", required: true },
              { name: "Phone", label: "Phone", type: "tel", required: true },
              { name: "Email", label: "Email", type: "email" },
              { name: "Number of Bins Needed", label: "Number of Bins Needed", type: "text" },
              { name: "Service Area / Address", label: "Service Area / Address", type: "text" },
              { name: "Message", label: "Additional Notes", type: "textarea" },
            ]}
          />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center">
        <p className="text-white text-lg mb-6 font-medium">Prefer to discuss your bin plan directly?</p>
        <a
          href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%27m%20interested%20in%20a%20bin%20collection%20contract"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Discuss your bin plan
        </a>
      </section>
    </>
  );
}
