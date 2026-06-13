import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Scrap Metal Buying, Bin Collection & More | All Recycling Leaders",
  description:
    "Answers to common questions about selling scrap metal, bin collection contracts, recycling partnerships, pricing, and payment at ARL — Vanderbijlpark, Gauteng.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
