import type { Metadata } from "next";
import { siteConfig, teamMembers } from "@/data/siteData";

export const seoDefaults = {
  siteName: siteConfig.name,
  siteUrl: siteConfig.siteUrl,
  locale: "en_GB",
  defaultTitle: "B2B Paid Search & Revenue Attribution Consultancy",
  defaultDescription:
    "Attribution First helps high-value B2B businesses turn search demand into qualified enquiries and revenue — combining strategy, Google Ads, landing pages and attribution for UK & international markets.",
  keywords: [
    "B2B customer acquisition",
    "B2B paid search consultancy",
    "revenue attribution",
    "Google Ads B2B",
    "search intent marketing",
    "marketing measurement",
    "B2B lead generation",
    "paid search agency UK",
    "conversion tracking",
    "pipeline attribution",
  ],
  ogImagePath: "/opengraph-image",
  twitterHandle: undefined as string | undefined,
};

export const pageSeo = {
  home: {
    title: "B2B Paid Search & Revenue Attribution Consultancy",
    description: seoDefaults.defaultDescription,
    path: "/",
  },
  blog: {
    title: "B2B Marketing Attribution Blog",
    description:
      "Expert guides on revenue attribution, ROAS, Google Ads and B2B paid search. Practical frameworks to measure pipeline, fix tracking and scale what converts.",
    path: "/blog",
  },
  contact: {
    title: "Book a Commercial Review",
    description:
      "Contact Attribution First for B2B paid search, attribution, websites and SEO. Book a strategy call, send a message, or connect on WhatsApp. UK & international B2B.",
    path: "/contact",
  },
} as const;

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${seoDefaults.siteUrl}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImages = [{ url: absoluteUrl(seoDefaults.ogImagePath), width: 1200, height: 630, alt: `${seoDefaults.siteName} — ${title}` }];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: seoDefaults.siteName,
      locale: seoDefaults.locale,
      type,
      images: ogImages,
      ...(publishedTime ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((image) => image.url),
      ...(seoDefaults.twitterHandle ? { creator: seoDefaults.twitterHandle } : {}),
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    description: seoDefaults.defaultDescription,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/opengraph-image"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nerul",
      addressLocality: "Mumbai",
      postalCode: "400706",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      siteConfig.linkedin,
      ...teamMembers.map((member) => member.linkedin),
    ],
    knowsAbout: [
      "B2B paid search",
      "Google Ads",
      "Revenue attribution",
      "Marketing measurement",
      "Landing page optimisation",
      "Technical SEO",
      "Commercial strategy",
    ],
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      sameAs: member.linkedin,
      ...(member.image ? { image: absoluteUrl(member.image) } : {}),
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: seoDefaults.defaultDescription,
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    inLanguage: "en-GB",
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Attribution First",
    description: pageSeo.contact.description,
    url: absoluteUrl(pageSeo.contact.path),
    mainEntity: { "@id": `${siteConfig.siteUrl}/#organization` },
  };
}
