export type Feature = {
  label: string;
  description: string;
};

export type Step = {
  id: number;
  title: string;
  subtitle: string;
  features: Feature[];
  iconBg: string;
  iconColor: string;
  image: string;
};


export type OurService = {
  id: 1 | 2 | 3;
  title: string;
  description: string;
  highlights: string[];     // the three chips
  highlightBg: string;      // Tailwind class for highlight background
  iconColor: string;        // Tailwind class for icon itself
  ctaText: string;          // "Learn More"
  ctaClass: string;         // Tailwind class for button color
  buttonBg: string;
};
