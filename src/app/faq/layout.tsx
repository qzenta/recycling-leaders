import type { Metadata } from "next";
import { faqSchema, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Scrap Metal Buying, Bin Collection & More | All Recycling Leaders",
  description:
    "Answers to common questions about selling scrap metal, bin collection contracts, recycling partnerships, pricing, and payment at ARL — Vanderbijlpark, Gauteng.",
};

const topFaqs = [
  { q: "Where is ARL located?", a: "Our yard is at 74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911. We are open Monday to Friday 08:00–17:00 and Saturday 08:00–13:00." },
  { q: "What types of scrap metal do you buy?", a: "We buy copper, aluminium, steel, iron, brass, lead, stainless steel, and e-waste. WhatsApp us a photo if you are unsure about a specific material." },
  { q: "When and how do I get paid?", a: "Payment is made on the same day, immediately after weighing and grading. We pay by EFT or cash depending on the transaction size." },
  { q: "Do I need an appointment to sell scrap?", a: "No appointment needed. Drive in during operating hours and our team will assist you. For large loads, WhatsApp us in advance." },
  { q: "Do I need to bring my ID?", a: "Yes. South African law requires scrap metal buyers to record the seller's ID number. Please bring a valid South African ID or passport." },
  { q: "What is the bin collection service?", a: "ARL places scrap metal bins at your business premises and collects them on a regular schedule. You earn from the scrap value — it is not a waste disposal fee." },
  { q: "Why do scrap metal prices change?", a: "Scrap metal is a commodity priced against global markets. Prices move daily based on supply, demand, and the Rand/Dollar exchange rate." },
  { q: "Is ARL a registered business?", a: "Yes. All Recycling Leaders is a registered South African business and a Level 1 B-BBEE contributor." },
];

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(topFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([
        { name: "Home", url: "https://recyclingleaders.co.za" },
        { name: "FAQ", url: "https://recyclingleaders.co.za/faq" },
      ])) }} />
      {children}
    </>
  );
}
