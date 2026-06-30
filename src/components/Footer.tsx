import Link from "next/link";
import Image from "next/image";

// Replace with actual handles once supplied
const socials = [
  {
    label: "Facebook",
    href: "mailto:info@recyclingleaders.co.za", // placeholder — swap for FB URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "mailto:info@recyclingleaders.co.za", // placeholder — swap for IG URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "mailto:info@recyclingleaders.co.za", // placeholder — swap for X URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2d20] text-gray-400 mt-auto">
      {/* Main 4 columns */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + socials */}
        <div>
          <Image src="/images/ARL-logo-diamond-white.png" alt="All Recycling Leaders" height={54} width={240} className="h-14 w-auto mb-4" />
          <p className="text-sm leading-relaxed mb-5">
            Sedibeng&apos;s trusted scrap metal buyer and recycling partner since 2017. Serving 19 communities across the Vaal.
          </p>
          <div className="flex gap-2 mb-5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-gray-400 hover:bg-[var(--color-green-primary)] hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/27720800327" target="_blank" rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors">
              WhatsApp
            </a>
            <a href="mailto:info@recyclingleaders.co.za"
              className="inline-block px-4 py-2 border border-gray-600 text-gray-300 text-xs font-bold rounded-lg hover:border-white hover:text-white transition-colors">
              Email Us
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/",          label: "Home"           },
              { href: "/gallery",   label: "Gallery"        },
              { href: "/about",     label: "About ARL"      },
              { href: "/faq",       label: "FAQ"            },
              { href: "/locations", label: "Areas We Serve" },
              { href: "/contact",   label: "Contact Us"     },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            Our Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/sell-scrap",         label: "Sell Scrap Metal"   },
              { href: "/bin-collection",     label: "Bin Collection"     },
              { href: "/recycling-partners", label: "Recycling Partners" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Address</span>
              <span className="leading-relaxed">74 Fairbanks Street,<br />Vanderbijlpark, Gauteng, 1911</span>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</span>
              <a href="mailto:info@recyclingleaders.co.za" className="hover:text-white transition-colors">
                info@recyclingleaders.co.za
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone</span>
              <a href="tel:+27164231299" className="hover:text-white transition-colors">(016) 423-1299</a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp</span>
              <a href="https://wa.me/27720800327" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                072 080 0327
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 uppercase tracking-wide mb-0.5">Hours</span>
              <span className="leading-relaxed">Mon–Fri: 08:00–17:00<br />Sat: 08:00–13:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} All Recycling Leaders (Pty) Ltd · Vanderbijlpark, Gauteng</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span className="text-gray-600">·</span>
            <span>Powered by{" "}
              <a href="https://qzenta.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium">Qzenta</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
