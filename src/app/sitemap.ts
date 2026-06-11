import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

const BASE = "https://recyclingleaders.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = ["/", "/sell-scrap", "/recycling-partners", "/bin-collection", "/about", "/contact"];
  const locationRoutes = locations.map((l) => `/locations/${l.slug}`);

  return [...coreRoutes, ...locationRoutes].map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : locationRoutes.includes(route) ? 0.6 : 0.8,
  }));
}
