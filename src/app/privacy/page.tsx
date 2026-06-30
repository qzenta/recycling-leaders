import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | All Recycling Leaders",
  description: "How All Recycling Leaders collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero headline="Privacy Policy" subheadline="How we handle your personal information" />
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray text-[var(--color-grey-dark)] text-sm leading-relaxed">
          <p className="text-[var(--color-grey-muted)] mb-8">Last updated: June 2026</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">1. Who We Are</h2>
          <p>All Recycling Leaders (Pty) Ltd operates from 74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911. We are a scrap metal buyer and recycling business serving the Vaal and Sedibeng region. You can contact us at <a href="mailto:info@recyclingleaders.co.za" className="text-[var(--color-green-primary)] underline">info@recyclingleaders.co.za</a> or <a href="tel:+27164231299" className="text-[var(--color-green-primary)] underline">(016) 423-1299</a>.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">2. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Name, phone number, and email address when you submit a contact or enquiry form</li>
            <li>Your message content and any details you provide about your scrap metal or business needs</li>
            <li>Technical data such as IP address, browser type, and pages visited (via Google Analytics and Microsoft Clarity)</li>
            <li>Cookie data — see our <a href="/cookies" className="text-[var(--color-green-primary)] underline">Cookie Policy</a></li>
          </ul>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>To respond to your enquiries and provide quotes</li>
            <li>To process scrap buying or service contracts</li>
            <li>To improve our website and services using anonymised analytics data</li>
            <li>To comply with legal obligations under South African law</li>
          </ul>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">4. Sharing Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share it with:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Our email service provider (Brevo) for sending responses to your enquiries</li>
            <li>Analytics providers (Google, Microsoft) under their respective data processing terms</li>
            <li>Authorities where required by law</li>
          </ul>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">5. Your Rights (POPIA)</h2>
          <p>Under the Protection of Personal Information Act (POPIA), you have the right to access, correct, or delete your personal information held by us. To exercise these rights, contact us at <a href="mailto:info@recyclingleaders.co.za" className="text-[var(--color-green-primary)] underline">info@recyclingleaders.co.za</a>.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">6. Data Retention</h2>
          <p>We retain contact form submissions for up to 24 months. Analytics data is retained per the Google Analytics and Microsoft Clarity default retention policies.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">7. Security</h2>
          <p>We use industry-standard security measures to protect your information. Our website is served over HTTPS. However, no transmission over the internet is 100% secure.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">8. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page reflects the latest revision.</p>
        </div>
      </section>
    </>
  );
}
