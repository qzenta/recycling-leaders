import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import PartnersMarquee from "@/components/PartnersMarquee";
import FadeIn from "@/components/FadeIn";
import StatCard from "@/components/StatCard";
import { localBusiness, organization } from "@/lib/schema";

export const metadata: Metadata = {
  title: "All Recycling Leaders — Scrap Metal Buyers in Vaal",
  description:
    "Sedibeng's trusted scrap metal buyer since 2017. We buy copper, aluminium, steel and more. Bin collection contracts available. Vanderbijlpark, Gauteng.",
};

const metals = [
  { name: "Copper",          color: "bg-amber-100 text-amber-800 border-amber-200",    dot: "bg-amber-500"  },
  { name: "Aluminium",       color: "bg-slate-100 text-slate-700 border-slate-200",    dot: "bg-slate-400"  },
  { name: "Steel",           color: "bg-zinc-100 text-zinc-700 border-zinc-200",       dot: "bg-zinc-500"   },
  { name: "Iron",            color: "bg-stone-100 text-stone-700 border-stone-200",    dot: "bg-stone-500"  },
  { name: "Brass",           color: "bg-yellow-100 text-yellow-800 border-yellow-200", dot: "bg-yellow-500" },
  { name: "Lead",            color: "bg-blue-100 text-blue-700 border-blue-200",       dot: "bg-blue-400"   },
  { name: "Stainless Steel", color: "bg-gray-100 text-gray-700 border-gray-200",       dot: "bg-gray-400"   },
  { name: "E-Waste",         color: "bg-teal-100 text-teal-700 border-teal-200",       dot: "bg-teal-500"   },
];


const whyUs = [
  { icon: "⚖️", title: "Certified Weighbridge",  desc: "Calibrated, certified scales. Every reading is visible to you — no estimates, no rounding down." },
  { icon: "💰", title: "Same-Day Payment",        desc: "Walk in, weigh up, get paid. EFT or cash on the day — no waiting, no invoicing." },
  { icon: "📍", title: "19 Service Areas",        desc: "Serving the entire Vaal and Sedibeng region from our Vanderbijlpark yard." },
  { icon: "🏅", title: "B-BBEE Level 1",          desc: "A trusted, compliant, community-rooted business operating since 2017." },
];

const stats = [
  { stat: "Est. 2017",  label: "Founded"       },
  { stat: "19 Areas",   label: "Served"        },
  { stat: "6 Days",     label: "A Week"        },
  { stat: "Level 1",    label: "B-BBEE"        },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Stats cards — overlap hero bottom edge */}
      <div className="relative z-10 px-4 -mt-12 mb-0">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s.stat} label={s.label} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Services — image-backed cards */}
      <section className="bg-white pt-16 pb-16 px-4 mt-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
            What We Do
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-10 text-sm">Three ways ARL can work for you</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/images/yard-trucks.jpeg",           title: "Sell Scrap Metal",    desc: "Drive in with your scrap — copper, aluminium, steel, iron and more. Weighed accurately, paid same day.", href: "/sell-scrap",         cta: "Get a Price"    },
              { img: "/images/truck-bin-yard.jpeg",        title: "Bin Collection",      desc: "We place bins at your premises and collect on schedule. Monthly contracts for businesses of all sizes.",   href: "/bin-collection",     cta: "Get a Contract" },
              { img: "/images/operations-crane-scrap-2.jpeg", title: "Recycling Partners", desc: "Consistent ferrous and non-ferrous supply for foundries, processors, and industrial buyers.",             href: "/recycling-partners", cta: "Partner With Us" },
            ].map((card) => (
              <Link key={card.href} href={card.href}
                className="card-lift group relative rounded-2xl overflow-hidden shadow-md"
                style={{ minHeight: "340px" }}>
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{card.desc}</p>
                  <span className="inline-block px-4 py-1.5 bg-[var(--color-green-primary)] text-white text-xs font-bold rounded-lg group-hover:bg-[var(--color-green-mid)] transition-colors">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARL — light grey bg */}
      <section className="py-16 px-4 bg-[var(--color-grey-bg)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
            Why Choose ARL
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-10 text-sm">Built on trust, transparency, and community</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="card-lift bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-grey-border)] hover:border-[var(--color-green-mid)]">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-[var(--color-grey-darkest)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{w.title}</h3>
                <p className="text-sm text-[var(--color-grey-muted)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners marquee — white bg between two grey sections */}
      <PartnersMarquee />

      {/* About + photo — white bg */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <Image src="/images/team-owner-staff-1.jpeg" alt="ARL owner and team at the Vanderbijlpark yard" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={150}>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-green-primary)] mb-2 block">Our Story</span>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
              Rooted in the Vaal Since 2017
            </h2>
            <p className="text-[var(--color-grey-muted)] leading-relaxed mb-4">
              All Recycling Leaders was founded with one mission: give the Vaal community a scrap metal buyer they could trust — one that pays fairly, weighs accurately, and treats every customer with respect.
            </p>
            <p className="text-[var(--color-grey-muted)] leading-relaxed mb-6">
              From a single buying point, we&apos;ve grown into a three-stream recycling operation serving 19 communities across Sedibeng and the wider Vaal. Our growth has been built on community referrals and a commitment to doing things the right way.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: "Est. 2017", label: "Founded"         },
                { stat: "19",        label: "Areas Served"    },
                { stat: "3",         label: "Service Streams" },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--color-green-light)] rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-[var(--color-green-primary)]" style={{ fontFamily: "var(--font-heading)" }}>{s.stat}</div>
                  <div className="text-xs text-[var(--color-grey-muted)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/about" className="inline-block px-6 py-2.5 border-2 border-[var(--color-green-primary)] text-[var(--color-green-primary)] font-semibold rounded-lg hover:bg-[var(--color-green-primary)] hover:text-white transition-colors text-sm">
                Read Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Buy — light grey bg */}
      <section className="py-16 px-4 bg-[var(--color-grey-bg)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
            What We Buy
          </h2>
          <p className="text-center text-[var(--color-grey-muted)] mb-10 text-sm">Ferrous and non-ferrous metals — all grades welcome</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {metals.map((m) => (
              <div key={m.name} className={`flex items-center gap-3 px-4 py-3 rounded-xl border font-semibold text-sm ${m.color}`}>
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${m.dot}`} />
                {m.name}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/sell-scrap" className="btn-lift inline-block px-8 py-3 bg-[var(--color-green-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-green-mid)]">
              See All Metals &amp; Get a Price
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA — honest redirect instead of unverifiable quotes */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-[var(--color-grey-darkest)]" style={{ fontFamily: "var(--font-heading)" }}>
            What People Say
          </h2>
          <p className="text-[var(--color-grey-muted)] mb-8 text-sm">
            Read real, verified reviews from our customers on Google.
          </p>
          <div className="bg-[var(--color-grey-bg)] rounded-2xl border border-[var(--color-grey-border)] p-10 flex flex-col items-center gap-6">
            {/* Star row */}
            <div className="flex items-center gap-1 text-yellow-400 text-2xl" aria-label="5 stars">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="text-[var(--color-grey-dark)] text-base leading-relaxed max-w-md">
              Trusted by scrap sellers and businesses across the Vaal since 2017. See what our customers say on Google.
            </p>
            <a
              href="https://www.google.com/search?q=All+Recycling+Leaders+Vanderbijlpark+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-green-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true"><path d="M21.35 11.1H12v2.8h5.35C16.9 16.15 14.75 17.5 12 17.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5c1.4 0 2.68.53 3.65 1.4l2.05-2.05C16.3 4.45 14.27 3.5 12 3.5 7.3 3.5 3.5 7.3 3.5 12S7.3 20.5 12 20.5c5.25 0 8.73-3.68 8.73-8.87 0-.5-.05-.98-.13-1.43l-.25-.1z"/></svg>
              Read Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner — dark */}
      <section className="relative bg-[#1e2d20] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/yard-weighbridge.jpeg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[#1e2d20]/80" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to bring your scrap?
          </h2>
          <p className="text-gray-300 mb-8">
            Open Monday–Friday 08:00–17:00, Saturday 08:00–13:00.<br />
            74 Fairbanks Street, Vanderbijlpark, Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27720800327?text=Hi%20ARL%2C%20I%20have%20scrap%20to%20sell" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5a] transition-colors">
              WhatsApp Us
            </a>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white/60 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
