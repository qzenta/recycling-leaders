import Link from "next/link";
import ARLLogo from "./ARLLogo";

const quickLinks = [
  { href: "/sell-scrap", label: "Sell Scrap" },
  { href: "/recycling-partners", label: "Recycling Partners" },
  { href: "/bin-collection", label: "Bin Collection" },
  { href: "/about", label: "About ARL" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-grey-darkest)] text-gray-400 pt-12 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <ARLLogo className="h-10 w-auto mb-3 brightness-0 invert" />
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
              <a href="mailto:info@recyclingleaders.co.za" className="hover:text-white transition-colors">
                ☎️ Landline: TBC
              </a>
            </li>
            <li className="leading-relaxed">
              📍 594C Houtkop Road, Skipper Botha,<br />
              Solandpark, Sedibeng, 1900
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-700 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 All Recycling Leaders</span>
        <span>recyclingleaders.co.za</span>
      </div>
    </footer>
  );
}
