import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: "2026-03-15", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: "2026-04-04", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: "2026-03-10",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
