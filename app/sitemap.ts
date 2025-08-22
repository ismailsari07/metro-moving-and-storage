// app/sitemap.ts
import { ROUTES, SITE_URL } from "./routes";

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    ROUTES.home.path,
    ROUTES.about.path,
    ROUTES.contact.path,
    ROUTES.services.path,
  ];

  const serviceRoutes = ROUTES.services.children.map(
    (c: any) => `${ROUTES.services.path}/${c.slug}`
  );

  return [...staticRoutes, ...serviceRoutes].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1.0 : 0.8,
  }));
}
