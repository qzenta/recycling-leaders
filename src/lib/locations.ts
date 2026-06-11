export const locations = [
  { slug: "vanderbijlpark", name: "Vanderbijlpark", distance: "10 minutes" },
  { slug: "vereeniging",    name: "Vereeniging",    distance: "15 minutes" },
  { slug: "meyerton",       name: "Meyerton",       distance: "20 minutes" },
  { slug: "alrode",         name: "Alrode",         distance: "25 minutes" },
  { slug: "boipatong",      name: "Boipatong",      distance: "10 minutes" },
];

export type Location = (typeof locations)[number];
