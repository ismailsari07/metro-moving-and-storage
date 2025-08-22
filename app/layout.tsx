import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Metro Moving & Storage – Stress-Free, Reliable Moving",
    template: "%s | Metro Moving & Storage",
  },
  description:
    "Trusted moving pros in Canada and cross-border (CA ⇄ US). Residential & commercial moves, packing, storage. Get your free quote today.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Metro Moving & Storage – Stress-Free, Reliable Moving",
    description:
      "Residential & commercial moving across Canada and cross-border. Packing, transport, storage — handled with care.",
    url: "https://metro-moving-and-storage.vercel.app",
    siteName: "Metro Moving & Storage",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Moving & Storage",
    description:
      "Seamless moving in Canada and cross-border. Get a free quote.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Metro Moving & Storage",
    "url": process.env.SITE_URL ?? "https://metro-moving-and-storage.vercel.app",
    "areaServed": ["Canada"],
    // Elindeki gerçek bilgilerle doldur:
    // "telephone": "+1-XXX-XXX-XXXX",
    // "email": "info@... ",
    // "address": { "@type": "PostalAddress", "addressLocality": "City", "addressRegion": "Province", "addressCountry": "CA" }
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
