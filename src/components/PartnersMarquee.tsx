import Image from "next/image";

const partners = [
  { name: "SAPMA",            logo: "/images/sapma.png"       },
  { name: "PETCO",            logo: "/images/petco.png"       },
  { name: "Nampak Recycling", logo: "/images/nampak.png"      },
  { name: "Hulamin",          logo: "/images/hulamin.png"     },
  { name: "SAEWA",            logo: "/images/saewa.png"       },
  { name: "ROSE Foundation",  logo: "/images/rose.png"        },
  { name: "Averda",           logo: "/images/averda.png"      },
  { name: "Mpact Recycling",  logo: "/images/mpact.png"       },
  { name: "GreenChoice",      logo: "/images/greenchoice.png" },
  { name: "REDISA",           logo: "/images/redisa.png"      },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-white border-y border-[var(--color-grey-border)] py-8 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-grey-muted)] mb-6">
        Industry Partners &amp; Associations
      </p>
      <div className="relative flex">
        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 bg-[var(--color-grey-bg)] border border-[var(--color-grey-border)] rounded-xl px-5 py-3 flex-shrink-0"
              style={{ minWidth: "160px", height: "72px" }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                className="object-contain max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
