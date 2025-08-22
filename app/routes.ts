// routes.ts
export const SITE_URL =
  process.env.SITE_URL ?? "https://metro-moving-and-storage.vercel.app";

export const ROUTES = {
  home: { path: "/" },
  about: { path: "/about" },
  contact: { path: "/contact" },
  services: {
    path: "/services",
    children: [
      { slug: "residential-moving", title: "Residential Moving" },
      { slug: "commercial-moving", title: "Commercial Moving" },
      { slug: "storage-service", title: "Storage Service" },
    ],
  },
};
