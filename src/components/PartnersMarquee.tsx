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
        <div className="flex animate-marquee gap-10 whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{ minWidth: "120px", height: "56px" }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                className="object-contain max-h-10 w-auto"
                style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.18))", mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
