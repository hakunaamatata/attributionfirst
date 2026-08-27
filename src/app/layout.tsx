import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import { siteConfig, teamMembers } from "@/data/siteData";
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
  title: "Attribution First | B2B Customer Acquisition Through Search",
  description: siteConfig.description,
  keywords: [
    "B2B customer acquisition",
    "high-value B2B marketing",
    "paid search consultancy",
    "search intent marketing",
    "Google Ads B2B",
    "enterprise lead generation",
    "landing page optimisation",
    "marketing measurement",
  ],
  authors: teamMembers.map((m) => ({ name: m.name })),
  openGraph: {
    title: "Attribution First | B2B Customer Acquisition Through Search",
    description: siteConfig.description,
    type: "website",
    locale: "en_GB",
    siteName: "Attribution First",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attribution First | B2B Customer Acquisition Through Search",
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
  employee: teamMembers.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    sameAs: m.linkedin,
  })),
  areaServed: ["GB", "IN", "US", "AE"],
  serviceType: [
    "Paid Search Marketing",
    "B2B Lead Generation",
    "Landing Page Optimisation",
    "Commercial Strategy",
    "Search Intent Research",
  ],
  knowsAbout: [
    "Google Ads",
    "B2B Marketing",
    "Search Intent",
    "Landing Page Conversion",
    "High-Value Lead Generation",
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
