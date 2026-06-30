import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#1e2d20] text-gray-300 text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--color-green-mid)]">📍</span>
            74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="mailto:info@recyclingleaders.co.za" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="text-[var(--color-green-mid)]">✉️</span>
            info@recyclingleaders.co.za
          </a>
          <a href="tel:+27164231299" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="text-[var(--color-green-mid)]">☎️</span>
            (016) 423-1299
          </a>
          <a href="https://wa.me/27720800327" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="text-[var(--color-green-mid)]">📱</span>
            072 080 0327
          </a>
        </div>
      </div>
    </div>
  );
}
