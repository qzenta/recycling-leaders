"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/sell-scrap", label: "Sell Scrap" },
  { href: "/recycling-partners", label: "Partners" },
  { href: "/bin-collection", label: "Bin Collection" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-grey-border)] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/ARL-logo-diamond.png" alt="All Recycling Leaders" height={52} width={280} className="h-13 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-grey-dark)]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[var(--color-green-primary)] transition-colors"
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
        <div className="md:hidden fixed inset-0 top-16 bg-white z-30 flex flex-col p-6 gap-4 text-lg font-medium">
          {links.map((l) => (
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
