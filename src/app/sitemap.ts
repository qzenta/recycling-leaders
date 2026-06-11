import type { MetadataRoute } from "next";

const BASE = "https://recyclingleaders.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/sell-scrap", "/recycling-partners", "/bin-collection", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
