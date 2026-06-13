import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/locations";

const quickLinks = [
  { href: "/sell-scrap", label: "Sell Scrap" },
  { href: "/recycling-partners", label: "Recycling Partners" },
  { href: "/bin-collection", label: "Bin Collection" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About ARL" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-grey-darkest)] text-gray-400 pt-12 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Image src="/images/ARL-logo-diamond-white.png" alt="All Recycling Leaders" height={40} width={220} className="h-10 w-auto mb-3" />
          <p className="text-sm leading-relaxed mt-2">
            Sedibeng&apos;s trusted scrap metal buyer and recycling partner since 2017.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3
            className="text-white font-semibold mb-3 text-sm uppercase tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-white font-semibold mb-3 text-sm uppercase tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/27720800327"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                📱 072 080 0327 (WhatsApp)
              </a>
            </li>
            <li>
              <a href="tel:+27164231299" className="hover:text-white transition-colors">
                ☎️ (016) 423-1299
              </a>
            </li>
            <li className="leading-relaxed">
              📍 74 Fairbank Street,<br />
              Vanderbijlpark, Gauteng, 1911
            </li>
          </ul>
        </div>
      </div>

      {/* Locations */}
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Areas We Serve</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="text-gray-500 hover:text-white transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-gray-700 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 All Recycling Leaders</span>
        <span>recyclingleaders.co.za</span>
      </div>
    </footer>
  );
}
