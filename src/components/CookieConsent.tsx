"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("arl-cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("arl-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("arl-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-grey-darkest)] border-t border-gray-700 px-4 py-4 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
          We use cookies to improve your experience on our website. By continuing to browse, you agree to our{" "}
          <Link href="/cookies" className="underline text-white hover:text-green-300 transition-colors">Cookie Policy</Link>
          {" "}and{" "}
          <Link href="/privacy" className="underline text-white hover:text-green-300 transition-colors">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm text-gray-400 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm bg-[var(--color-green-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
