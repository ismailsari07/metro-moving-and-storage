import type { OurService } from "@/lib/types";

export const OUR_SERVICES: readonly OurService[] = [
  {
    id: 1,
    title: "Residential Moving",
    url: "services/residential-moving",
    description:
      "Complete home moving services with careful handling of your personal belongings",
    highlights: [
      "Local & long-distance moves",
      "Professional packing",
      "Furniture protection",
    ],
    highlightBg: "bg-blue-200",
    iconColor: "text-blue-900",
    ctaText: "Learn More",
    ctaClass: "bg-blue-100 hover:bg-blue-200",
    buttonBg: "bg-blue-800",
  },
  {
    id: 2,
    title: "Commercial Moving",
    url: "services/commercial-moving",
    description:
      "Minimize business downtime with our efficient office and commercial relocation services",
    highlights: [
      "Office relocations",
      "IT equipment handling",
      "Weekend moves available",
    ],
    highlightBg: "bg-green-200",
    iconColor: "text-green-900",
    ctaText: "Learn More",
    ctaClass: "bg-green-100 hover:bg-green-200",
    buttonBg: "bg-green-800",
  },
  {
    id: 3,
    title: "Storage Services",
    url: "services/storage-service",
    description:
      "Secure, climate-controlled storage solutions for short-term and long-term needs",
    highlights: [
      "Climate-controlled units",
      "24/7 security monitoring",
      "Flexible rental terms",
    ],
    highlightBg: "bg-fuchsia-200",
    iconColor: "text-fuchsia-900",
    ctaText: "Learn More",
    ctaClass: "bg-fuchsia-100 hover:bg-fuchsia-200",
    buttonBg: "bg-fuchsia-800",
  },
] as const;

