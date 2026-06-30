"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const servicesItems = [
  { label: "Sell Scrap",         href: "/sell-scrap",         desc: "Get a fair price for your scrap metal",  icon: "🔧" },
  { label: "Recycling Partners", href: "/recycling-partners", desc: "Bulk supply for industrial buyers",       icon: "🏭" },
  { label: "Bin Collection",     href: "/bin-collection",     desc: "Monthly contracts for businesses",        icon: "♻️" },
];

const locationItems = [
  { label: "Vanderbijlpark", href: "/locations/vanderbijlpark" },
  { label: "Vereeniging",    href: "/locations/vereeniging"    },
  { label: "Sebokeng",       href: "/locations/sebokeng"       },
  { label: "Evaton",         href: "/locations/evaton"         },
  { label: "Meyerton",       href: "/locations/meyerton"       },
  { label: "Heidelberg",     href: "/locations/heidelberg"     },
];

const servicesPaths = ["/sell-scrap", "/recycling-partners", "/bin-collection"];

export default function Navbar() {
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [servicesOpen,    setServicesOpen]    = useState(false);
  const [locationsOpen,   setLocationsOpen]   = useState(false);
  const [mobileServices,  setMobileServices]  = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  const pathname = usePathname();
  const isServicesActive  = servicesPaths.some((p) => pathname.startsWith(p));
  const isLocationsActive = pathname.startsWith("/locations");

  return (
    <header className="bg-white border-b border-[var(--color-grey-border)] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center">
          <Image src="/images/ARL-logo-diamond.png" alt="All Recycling Leaders" height={52} width={220} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop nav — all items share identical flex alignment */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-grey-dark)]">
          <Link
            href="/"
            className={`hover:text-[var(--color-green-primary)] transition-colors ${pathname === "/" ? "text-[var(--color-green-primary)]" : ""}`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative self-stretch flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/sell-scrap"
              className={`hover:text-[var(--color-green-primary)] transition-colors ${isServicesActive ? "text-[var(--color-green-primary)]" : ""}`}
            >
              Services
            </Link>
            {/* Invisible bridge — fills gap so mouse doesn't leave before reaching panel */}
            {servicesOpen && <div className="absolute top-full left-0 right-0 h-2 z-50" />}
            {servicesOpen && (
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-xl border border-[var(--color-grey-border)] overflow-hidden z-50">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-[var(--color-green-light)] border-l-2 border-transparent hover:border-[var(--color-green-primary)] transition-all group"
                  >
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-[var(--color-grey-darkest)] group-hover:text-[var(--color-green-primary)] text-sm">{item.label}</div>
                      <div className="text-xs text-[var(--color-grey-muted)]">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div
            className="relative self-stretch flex items-center"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <Link
              href="/locations"
              className={`hover:text-[var(--color-green-primary)] transition-colors ${isLocationsActive ? "text-[var(--color-green-primary)]" : ""}`}
            >
              Locations
            </Link>
            {locationsOpen && <div className="absolute top-full left-0 right-0 h-2 z-50" />}
            {locationsOpen && (
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-[var(--color-grey-border)] overflow-hidden z-50">
                {locationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-[var(--color-grey-dark)] hover:bg-[var(--color-green-light)] hover:text-[var(--color-green-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="block px-4 py-2.5 text-sm font-semibold text-[var(--color-green-primary)] bg-[var(--color-green-light)] border-t border-[var(--color-grey-border)] hover:bg-[var(--color-green-mid)] hover:text-white transition-colors"
                >
                  View All 19 Areas →
                </Link>
              </div>
            )}
          </div>

          {[
            { href: "/gallery", label: "Gallery" },
            { href: "/about",   label: "About"   },
            { href: "/contact", label: "Contact"  },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-[var(--color-green-primary)] transition-colors ${pathname.startsWith(l.href) ? "text-[var(--color-green-primary)]" : ""}`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://wa.me/27720800327"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-[var(--color-green-primary)] text-white rounded-lg hover:bg-[var(--color-green-mid)] transition-colors"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-[var(--color-grey-dark)]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-30 flex flex-col p-6 gap-1 text-lg font-medium overflow-y-auto">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 border-b border-[var(--color-grey-border)] text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)]">Home</Link>

          <div className="border-b border-[var(--color-grey-border)]">
            <button onClick={() => setMobileServices(!mobileServices)}
              className={`w-full flex items-center justify-between py-2 text-left hover:text-[var(--color-green-primary)] ${isServicesActive ? "text-[var(--color-green-primary)]" : "text-[var(--color-grey-dark)]"}`}>
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServices && (
              <div className="mb-2 ml-4 flex flex-col gap-1">
                {servicesItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2 text-base text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)] border-l-2 border-[var(--color-green-light)] pl-3">
                    <span>{item.icon}</span> {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[var(--color-grey-border)]">
            <button onClick={() => setMobileLocations(!mobileLocations)}
              className={`w-full flex items-center justify-between py-2 text-left hover:text-[var(--color-green-primary)] ${isLocationsActive ? "text-[var(--color-green-primary)]" : "text-[var(--color-grey-dark)]"}`}>
              Locations
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileLocations ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileLocations && (
              <div className="mb-2 ml-4 flex flex-col gap-1">
                {locationItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)] border-l-2 border-[var(--color-green-light)] pl-3">
                    {item.label}
                  </Link>
                ))}
                <Link href="/locations" onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-semibold text-[var(--color-green-primary)] border-l-2 border-[var(--color-green-primary)] pl-3">
                  View All 19 Areas →
                </Link>
              </div>
            )}
          </div>

          {[
            { href: "/gallery", label: "Gallery" },
            { href: "/about",   label: "About"   },
            { href: "/contact", label: "Contact"  },
          ].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-[var(--color-grey-border)] text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)]">
              {l.label}
            </Link>
          ))}

          <a href="https://wa.me/27720800327" target="_blank" rel="noopener noreferrer"
            className="mt-4 px-4 py-3 bg-[var(--color-green-primary)] text-white rounded-lg text-center hover:bg-[var(--color-green-mid)] transition-colors">
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
