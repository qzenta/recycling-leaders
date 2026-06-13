"use client";

import PageHero from "@/components/PageHero";
import { useState } from "react";
import Link from "next/link";

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "General",
    items: [
      {
        q: "Where is ARL located?",
        a: "Our yard is at 74 Fairbank Street, Vanderbijlpark, Gauteng, 1911. We are open Monday to Friday 08:00–17:00 and Saturday 08:00–13:00.",
      },
      {
        q: "How do I contact ARL?",
        a: "The fastest way is WhatsApp on 072 080 0327. You can also call our landline on (016) 423-1299 or send an email via the contact form on our website.",
      },
      {
        q: "Is ARL a registered business?",
        a: "Yes. All Recycling Leaders is a registered South African business and a Level 1 B-BBEE contributor. Our certificate is available on request.",
      },
      {
        q: "How long have you been operating?",
        a: "ARL was established in 2017. We have been serving the Vaal and Sedibeng region for over seven years.",
      },
      {
        q: "Which areas do you serve?",
        a: "We serve the entire Vaal and Sedibeng region including Vanderbijlpark, Vereeniging, Sebokeng, Evaton, Meyerton, Heidelberg, Orange Farm, Ennerdale, Nigel, and 19 surrounding communities. Sellers from further afield are also welcome.",
      },
    ],
  },
  {
    category: "Selling Scrap Metal",
    items: [
      {
        q: "What types of scrap metal do you buy?",
        a: "We buy copper, aluminium, steel, iron, brass, lead, stainless steel, and e-waste (electronic scrap). If you are unsure whether we take a specific material, WhatsApp us a photo and we will confirm.",
      },
      {
        q: "How do you determine the price?",
        a: "Prices are based on current market rates for each metal type. Rates fluctuate with the commodity market. Contact us on the day you plan to bring your scrap for the latest prices — we are always transparent and will explain the rate before we weigh.",
      },
      {
        q: "How is my scrap weighed?",
        a: "We use a calibrated, certified weighbridge. Every load is weighed accurately and the reading is visible to you. We do not round down or estimate — you are paid for every kilogram.",
      },
      {
        q: "When and how do I get paid?",
        a: "Payment is made on the same day, immediately after weighing and grading. We pay by EFT or cash depending on the transaction size.",
      },
      {
        q: "Do I need an appointment to sell scrap?",
        a: "No appointment needed. Drive in during operating hours and our team will assist you. For large loads (truck loads or more), it helps to WhatsApp us in advance so we can prepare.",
      },
      {
        q: "Do I need to bring my ID?",
        a: "Yes. South African law requires scrap metal buyers to record the seller's ID number for all transactions. Please bring a valid South African ID or passport.",
      },
      {
        q: "Is there a minimum quantity?",
        a: "There is no strict minimum. Even small quantities of copper or aluminium are welcome. For very small amounts of low-value metal (e.g. a few kilograms of mild steel), it may not be worth the trip — WhatsApp us first and we can advise.",
      },
      {
        q: "Do you offer scrap collection or pickup?",
        a: "Our primary service is yard-based buying — you bring your scrap to us. For large volumes or commercial accounts, contact us to discuss collection options. Bin collection contracts are available for businesses.",
      },
      {
        q: "Can I sell a scrapped vehicle?",
        a: "Yes. We buy end-of-life vehicles and scrap cars. WhatsApp us with details and photos of the vehicle for a quote before you come in.",
      },
    ],
  },
  {
    category: "Bin Collection",
    items: [
      {
        q: "What is the bin collection service?",
        a: "ARL places scrap metal bins at your business premises and collects them on a regular schedule. We handle the logistics — you focus on your business and we handle the metal waste.",
      },
      {
        q: "What types of businesses use this service?",
        a: "Manufacturers, engineering workshops, construction companies, panel beaters, municipalities, and any business that generates regular scrap metal waste. If your business produces metal off-cuts, swarf, or used metal components, this service is for you.",
      },
      {
        q: "What size bins do you provide?",
        a: "We offer a range of bin sizes to suit your volume. Contact us for a site visit and we will recommend the right size and collection frequency for your operation.",
      },
      {
        q: "How often do you collect?",
        a: "Collection frequency is agreed upfront based on your volume. Options range from weekly to monthly. We can also do on-call collections when your bin is full.",
      },
      {
        q: "Is there a contract?",
        a: "Yes, we operate on a formal bin collection contract. This protects both parties and ensures service consistency. Contract terms are flexible — speak to us about your requirements.",
      },
      {
        q: "Do I get paid for the metal in my bins?",
        a: "Yes. Each collection is weighed and you receive payment for the scrap value of the material. The bin collection service is not a waste disposal fee — you earn from your metal waste.",
      },
      {
        q: "How do I get a bin collection quote?",
        a: "WhatsApp or call us with your business name, location, and a brief description of the type and volume of metal you generate. We will arrange a site visit and provide a quote.",
      },
    ],
  },
  {
    category: "Recycling Partners",
    items: [
      {
        q: "What does a recycling partnership with ARL involve?",
        a: "We supply consistent volumes of sorted, processed ferrous and non-ferrous scrap metal to industrial buyers, foundries, and processors. If you need a reliable upstream supply of recycled metal, we can be your source.",
      },
      {
        q: "What materials do you supply in bulk?",
        a: "We can supply sorted grades of steel, iron, copper, aluminium, and mixed non-ferrous metals. Volumes and grades are confirmed per agreement.",
      },
      {
        q: "How do I become a recycling partner?",
        a: "Contact us via our website or WhatsApp to discuss your volume requirements and material specifications. We will assess whether our current supply capacity meets your needs.",
      },
      {
        q: "Do you offer long-term supply agreements?",
        a: "Yes. We prefer working with partners on ongoing agreements rather than one-off transactions. This gives both sides supply certainty and pricing consistency.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "Why do scrap metal prices change?",
        a: "Scrap metal is a commodity priced against global markets (London Metal Exchange and local market indices). Prices move daily based on supply, demand, and the Rand/Dollar exchange rate. We always quote the current day's rate.",
      },
      {
        q: "Do you publish your prices online?",
        a: "We do not publish live prices online because they change frequently and publishing outdated rates causes confusion. WhatsApp us on the day for an accurate quote.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We pay by EFT (same-day) or cash for smaller transactions. For larger commercial transactions, EFT is standard.",
      },
      {
        q: "Is the weighing and payment process transparent?",
        a: "Absolutely. You are present during the weigh-in, the scale reading is visible, and the metal is graded in front of you before we agree on a price. There are no hidden deductions.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-grey-border)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left text-[var(--color-grey-darkest)] font-medium hover:text-[var(--color-green-primary)] transition-colors"
      >
        <span>{q}</span>
        <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-4 text-sm text-[var(--color-grey-muted)] leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about selling scrap, bin collection, and partnering with ARL."
        image="/images/yard-weighbridge.jpeg"
        imageAlt="ARL weighbridge — accurate and transparent scrap weighing"
      />

      <section className="max-w-3xl mx-auto px-4 py-16">
        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2
              className="text-lg font-bold text-[var(--color-green-primary)] uppercase tracking-wide mb-4 pb-2 border-b-2 border-[var(--color-green-light)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {section.category}
            </h2>
            <div className="bg-white rounded-xl shadow-sm px-6">
              {section.items.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still have a question CTA */}
      <section className="bg-[var(--color-green-primary)] py-12 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Still have a question?
        </h2>
        <p className="text-green-100 mb-6">WhatsApp us directly — we reply fast.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebe5a] transition-colors"
          >
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Send an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
