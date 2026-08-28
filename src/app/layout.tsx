import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import { siteConfig, teamMembers } from "@/data/siteData";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Attribution First | B2B Customer Acquisition Through Search",
  description: siteConfig.description,
  keywords: [
    "B2B customer acquisition",
    "revenue attribution",
    "paid search consultancy",
    "search intent marketing",
    "Google Ads B2B",
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
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
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
