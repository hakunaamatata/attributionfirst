import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import { teamMembers } from "@/data/siteData";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  seoDefaults,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoDefaults.siteUrl),
  title: {
    default: `${seoDefaults.siteName} | ${seoDefaults.defaultTitle}`,
    template: `%s | ${seoDefaults.siteName}`,
  },
  description: seoDefaults.defaultDescription,
  keywords: seoDefaults.keywords,
  authors: teamMembers.map((member) => ({ name: member.name, url: member.linkedin })),
  creator: seoDefaults.siteName,
  publisher: seoDefaults.siteName,
  category: "Business",
  alternates: {
    canonical: seoDefaults.siteUrl,
  },
  openGraph: {
    title: `${seoDefaults.siteName} | ${seoDefaults.defaultTitle}`,
    description: seoDefaults.defaultDescription,
    type: "website",
    locale: seoDefaults.locale,
    siteName: seoDefaults.siteName,
    url: seoDefaults.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${seoDefaults.siteName} | ${seoDefaults.defaultTitle}`,
    description: seoDefaults.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = [buildOrganizationSchema(), buildWebsiteSchema()];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
