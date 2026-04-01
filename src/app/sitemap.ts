import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: "2026-03-15", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: "2026-03-10",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages];
}
