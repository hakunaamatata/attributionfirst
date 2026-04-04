import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `Attribution First | ${siteConfig.title}`,
    template: `%s | Attribution First`,
  },
  description: siteConfig.description,
  keywords: [
    "attribution first",
    "marketing attribution",
    "performance marketing",
    "google ads expert",
    "meta ads specialist",
    "ROAS declining",
    "attribution infrastructure",
    "incrementality measurement",
    "PPC consultant india",
    "lead generation",
    "blended MER",
    "server-side tracking",
    "digital marketing mumbai",
    "google ads management",
    "ROAS optimization",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: "Attribution First",
    title: `Attribution First | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/profileImage.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Performance Marketing Expert`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Attribution First | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/images/profileImage.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-542SQV8N');` }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-542SQV8N" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
