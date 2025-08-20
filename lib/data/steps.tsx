import type { Step } from "../types";

export const STEPS: readonly Step[] = [
  {
    id: 1,
    title: "Plan & Assess",
    subtitle: "Comprehensive planning and detailed assessment of your moving needs",
    features: [
      { label: "Free In-Home Consultation", description: "Our expert evaluates your belongings and moving requirements" },
      { label: "Detailed Written Estimate", description: "Transparent pricing with no hidden fees or surprises" },
      { label: "Custom Moving Strategy", description: "Tailored timeline and logistics plan for your specific situation" },
    ],
    iconBg: "bg-green-300",
    iconColor: "text-green-700",
    image: "plan.jpg" // you fill this
  },
  {
    id: 2,
    title: "Professional Packing",
    subtitle: "Expert packing services using premium materials and proven techniques",
    features: [
      { label: "Premium Packing Materials", description: "Bubble wrap, specialty boxes, and protective padding included" },
      { label: "Fragile Item Specialists", description: "Expert handling of artwork, antiques, and delicate electronics" },
      { label: "Inventory Management", description: "Detailed labeling and tracking system for all your items" },
    ],
    iconBg: "bg-blue-300",
    iconColor: "text-blue-700",
    image: "packing.jpg"
  },
  {
    id: 3,
    title: "Load & Transport",
    subtitle: "Careful loading and secure transportation with real-time tracking",
    features: [
      { label: "Strategic Loading", description: "Optimized truck loading to prevent damage during transport" },
      { label: "GPS Tracking", description: "Real-time location updates and estimated arrival times" },
      { label: "Climate-Controlled Trucks", description: "Temperature and humidity control for sensitive items" },
    ],
    iconBg: "bg-yellow-300",
    iconColor: "text-yellow-700",
    image: "load-transport.jpg"
  },
  {
    id: 4,
    title: "Deliver & Unload",
    subtitle: "Precise delivery with careful unloading and placement services",
    features: [
      { label: "On-Time Delivery Guarantee", description: "Scheduled arrival within agreed timeframe or compensation provided" },
      { label: "Room-by-Room Placement", description: "Items placed exactly where you want them in your new home" },
      { label: "Damage Inspection", description: "Thorough check of all items with immediate resolution process" },
    ],
    iconBg: "bg-purple-300",
    iconColor: "text-purple-700",
    image: "deliver-unload.jpg"
  },
  {
    id: 5,
    title: "Settle & Support",
    subtitle: "Complete unpacking services and ongoing support for your new beginning",
    features: [
      { label: "Complete Unpacking", description: "Full unpacking service with organized placement of all belongings" },
      { label: "Furniture Assembly", description: "Professional reassembly of disassembled furniture and fixtures" },
      { label: "30-Day Follow-Up", description: "Continued support and assistance with any post-move concerns" },
    ],
    iconBg: "bg-pink-300",
    iconColor: "text-pink-700",
    image: "support.jpg"
  },
] as const;

