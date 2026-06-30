import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use | All Recycling Leaders",
  description: "Terms and conditions for using the All Recycling Leaders website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero headline="Terms of Use" subheadline="Please read these terms carefully before using our website" />
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-[var(--color-grey-dark)] text-sm leading-relaxed">
          <p className="text-[var(--color-grey-muted)] mb-8">Last updated: June 2026</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using this website (recyclingleaders.co.za), you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">2. About Us</h2>
          <p>This website is operated by All Recycling Leaders (Pty) Ltd, registered in South Africa, with its principal place of business at 74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">3. Use of This Website</h2>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>This website is for informational purposes about our scrap metal buying, bin collection, and recycling partner services.</li>
            <li>You agree not to use this site for any unlawful purpose.</li>
            <li>You agree not to attempt to gain unauthorised access to any part of the website or its servers.</li>
            <li>Prices and service availability described on this website are indicative and subject to change without notice.</li>
          </ul>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">4. Accuracy of Information</h2>
          <p>We strive to keep information on this website accurate and up to date. However, we make no warranties about the completeness, accuracy, or reliability of any information provided. Metal prices in particular fluctuate and any rates mentioned are indicative only.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">5. Intellectual Property</h2>
          <p>All content on this website — including text, images, logos, and design — is the property of All Recycling Leaders or its licensors and is protected by South African copyright law. You may not reproduce or redistribute any content without prior written consent.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">6. Third-Party Links</h2>
          <p>This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, All Recycling Leaders shall not be liable for any direct, indirect, incidental, or consequential loss arising from your use of this website or reliance on any information contained herein.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">8. Governing Law</h2>
          <p>These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the South African courts.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">9. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:info@recyclingleaders.co.za" className="text-[var(--color-green-primary)] underline">info@recyclingleaders.co.za</a>.</p>
        </div>
      </section>
    </>
  );
}
