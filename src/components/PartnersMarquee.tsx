const partners = [
  "SAPMA",
  "Collect-a-Can",
  "PETCO",
  "Nampak Recycling",
  "Hulamin",
  "SAEWA",
  "Metal Recyclers SA",
  "ROSE Foundation",
  "Averda",
  "Mpact Recycling",
  "GreenChoice",
  "REDISA",
];

export default function PartnersMarquee() {
  return (
    <section className="bg-[var(--color-grey-lightest)] border-y border-[var(--color-grey-border)] py-6 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-grey-dark)] mb-4">
        Industry Partners &amp; Associations
      </p>
      <div className="relative flex">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-[var(--color-green-primary)] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-primary)] inline-block" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
