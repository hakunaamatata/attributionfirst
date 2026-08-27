import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import { siteConfig } from "@/data/siteData";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Attribution First | Performance Marketing & Attribution",
  description: siteConfig.description,
  keywords: [
    "B2B performance marketing",
    "AI search optimization",
    "GEO",
    "Google Ads",
    "Bing Ads",
    "GA4 server tracking",
    "marketing attribution",
    "technical SEO",
    "conversion rate optimization",
  ],
  authors: [{ name: "Junaid Ahmed Kazi" }],
  openGraph: {
    title: "Attribution First | Performance Marketing & Attribution",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: "Attribution First",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attribution First | Performance Marketing & Attribution",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Attribution First",
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: siteConfig.title,
  },
  areaServed: "IN",
  serviceType: [
    "Performance Marketing",
    "Marketing Attribution",
    "Google Ads Management",
    "Meta Ads Management",
    "SEO",
    "Conversion Rate Optimization",
  ],
  knowsAbout: [
    "Marketing Attribution",
    "Google Analytics 4",
    "Google Tag Manager",
    "CRM Integration",
    "Revenue Attribution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
