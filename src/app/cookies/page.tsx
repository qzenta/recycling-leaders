import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy | All Recycling Leaders",
  description: "How All Recycling Leaders uses cookies on its website.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero headline="Cookie Policy" subheadline="How and why we use cookies on this website" />
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-[var(--color-grey-dark)] text-sm leading-relaxed">
          <p className="text-[var(--color-grey-muted)] mb-8">Last updated: June 2026</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and improve your experience over time.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">Cookies We Use</h2>

          <div className="mt-4 space-y-5">
            <div className="bg-[var(--color-grey-bg)] rounded-xl p-5 border border-[var(--color-grey-border)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span className="font-semibold text-[var(--color-grey-darkest)]">Essential Cookies</span>
                <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Always Active</span>
              </div>
              <p>These cookies are necessary for the website to function. They include our cookie consent preference cookie (<code>arl-cookie-consent</code>) which stores your choice so we don&apos;t ask again.</p>
            </div>

            <div className="bg-[var(--color-grey-bg)] rounded-xl p-5 border border-[var(--color-grey-border)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                <span className="font-semibold text-[var(--color-grey-darkest)]">Analytics Cookies</span>
                <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Optional</span>
              </div>
              <p>We use <strong>Google Analytics 4</strong> to understand how visitors use our website — which pages are most visited, how long people stay, and where they come from. This data is anonymised and aggregated. Google&apos;s data processing is governed by their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-primary)] underline">Privacy Policy</a>.</p>
              <p className="mt-2">We also use <strong>Microsoft Clarity</strong> for heatmaps and session recordings to help us improve the layout and usability of the site. Microsoft&apos;s data processing is governed by their <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-primary)] underline">Privacy Policy</a>.</p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of this website. You can also withdraw your consent at any time by clearing your browser cookies — the consent banner will reappear on your next visit.</p>

          <h2 className="text-lg font-bold text-[var(--color-grey-darkest)] mt-8 mb-3">Contact</h2>
          <p>If you have questions about our cookie use, contact us at <a href="mailto:info@recyclingleaders.co.za" className="text-[var(--color-green-primary)] underline">info@recyclingleaders.co.za</a>.</p>
        </div>
      </section>
    </>
  );
}
