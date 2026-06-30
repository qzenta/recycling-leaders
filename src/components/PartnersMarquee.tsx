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
    <section className="bg-white border-y border-[var(--color-grey-border)] py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-grey-muted)] mb-8">
        Industry Partners &amp; Associations
      </p>
      <div className="relative flex group">
        <div className="flex gap-8 whitespace-nowrap items-center animate-marquee group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
              style={{ minWidth: "140px", height: "72px" }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={56}
                className="object-contain max-h-14 w-auto"
                style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.15))", mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
