"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const servicesItems = [
  { label: "Sell Scrap",          href: "/sell-scrap",          desc: "Get a fair price for your scrap metal",      icon: "🔧" },
  { label: "Recycling Partners",  href: "/recycling-partners",  desc: "Bulk supply for industrial buyers",          icon: "🏭" },
  { label: "Bin Collection",      href: "/bin-collection",      desc: "Monthly contracts for businesses",           icon: "♻️" },
];

const servicesPaths = ["/sell-scrap", "/recycling-partners", "/bin-collection"];

export default function Navbar() {
  const [open, setOpen]             = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = servicesPaths.some((p) => pathname.startsWith(p));

  return (
    <header className="bg-white border-b border-[var(--color-grey-border)] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/ARL-logo-diamond.png" alt="All Recycling Leaders" height={52} width={280} className="h-13 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-grey-dark)]">
          <Link href="/" className={`hover:text-[var(--color-green-primary)] transition-colors ${pathname === "/" ? "text-[var(--color-green-primary)]" : ""}`}>
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center hover:text-[var(--color-green-primary)] transition-colors pb-2 ${isServicesActive ? "text-[var(--color-green-primary)]" : ""}`}
            >
              Services
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-lg border border-[var(--color-grey-border)] overflow-hidden">
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
        <button
          className="md:hidden p-2 text-[var(--color-grey-dark)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
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
      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-30 flex flex-col p-6 gap-1 text-lg font-medium overflow-y-auto">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 border-b border-[var(--color-grey-border)] text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)]">
            Home
          </Link>

          {/* Services accordion */}
          <div className="border-b border-[var(--color-grey-border)]">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`w-full flex items-center justify-between py-2 text-left hover:text-[var(--color-green-primary)] ${isServicesActive ? "text-[var(--color-green-primary)]" : "text-[var(--color-grey-dark)]"}`}
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="mb-2 ml-4 flex flex-col gap-1">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2 text-base text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)] border-l-2 border-[var(--color-green-light)] pl-3"
                  >
                    <span>{item.icon}</span> {item.label}
                  </Link>
                ))}
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
              onClick={() => setOpen(false)}
              className="py-2 border-b border-[var(--color-grey-border)] text-[var(--color-grey-dark)] hover:text-[var(--color-green-primary)]"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://wa.me/27720800327"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-3 bg-[var(--color-green-primary)] text-white rounded-lg text-center hover:bg-[var(--color-green-mid)] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
