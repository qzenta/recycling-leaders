const BASE = "https://recyclingleaders.co.za";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "All Recycling Leaders",
  url: BASE,
  logo: `${BASE}/images/arl-logo.png`,
  telephone: "+27720800327",
  email: "info@recyclingleaders.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "74 Fairbanks Street",
    addressLocality: "Vanderbijlpark",
    addressRegion: "Gauteng",
    postalCode: "1911",
    addressCountry: "ZA",
  },
  sameAs: [],
  foundingDate: "2017",
  areaServed: "Sedibeng, Vaal, Gauteng, South Africa",
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RecyclingCenter"],
  name: "All Recycling Leaders",
  url: BASE,
  telephone: "+27720800327",
  email: "info@recyclingleaders.co.za",
  image: `${BASE}/images/og-default.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "74 Fairbanks Street",
    addressLocality: "Vanderbijlpark",
    addressRegion: "Gauteng",
    postalCode: "1911",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.6951,
    longitude: 27.8341,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "R",
  areaServed: ["Sedibeng", "Vaal", "Gauteng"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Scrap Metal Buying",
    itemListElement: [
      "Copper", "Aluminium", "Steel", "Iron", "Brass", "Lead", "Stainless Steel", "E-Waste",
    ].map((m) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${m} Scrap Buying` },
    })),
  },
};

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: "All Recycling Leaders",
      url: BASE,
    },
    areaServed: "Sedibeng, Vaal, Gauteng, South Africa",
  };
}
