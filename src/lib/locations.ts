export const locations = [
  { slug: "vanderbijlpark", name: "Vanderbijlpark", distance: "10 minutes" },
  { slug: "vereeniging",    name: "Vereeniging",    distance: "15 minutes" },
  { slug: "sebokeng",       name: "Sebokeng",       distance: "8 minutes"  },
  { slug: "evaton",         name: "Evaton",         distance: "10 minutes" },
  { slug: "boipatong",      name: "Boipatong",      distance: "10 minutes" },
  { slug: "sharpeville",    name: "Sharpeville",    distance: "12 minutes" },
  { slug: "bophelong",      name: "Bophelong",      distance: "8 minutes"  },
  { slug: "three-rivers",   name: "Three Rivers",   distance: "10 minutes" },
  { slug: "roshnee",        name: "Roshnee",        distance: "12 minutes" },
  { slug: "tshepiso",       name: "Tshepiso",       distance: "15 minutes" },
  { slug: "meyerton",       name: "Meyerton",       distance: "20 minutes" },
  { slug: "walkerville",    name: "Walkerville",    distance: "25 minutes" },
  { slug: "zamdela",        name: "Zamdela",        distance: "20 minutes" },
  { slug: "heidelberg",     name: "Heidelberg",     distance: "30 minutes" },
  { slug: "ratanda",        name: "Ratanda",        distance: "30 minutes" },
  { slug: "orange-farm",    name: "Orange Farm",    distance: "35 minutes" },
  { slug: "ennerdale",      name: "Ennerdale",      distance: "40 minutes" },
  { slug: "alrode",         name: "Alrode",         distance: "25 minutes" },
  { slug: "nigel",          name: "Nigel",          distance: "45 minutes" },
];

export type Location = (typeof locations)[number];
