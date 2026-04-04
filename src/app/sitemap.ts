import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const today = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                        lastModified: today,         changeFrequency: "weekly",   priority: 1.0 },
    { url: `${baseUrl}/services`,          lastModified: "2026-04-04",  changeFrequency: "monthly",  priority: 0.9 },
    { url: `${baseUrl}/case-studies`,      lastModified: "2026-04-04",  changeFrequency: "monthly",  priority: 0.9 },
    { url: `${baseUrl}/blog`,              lastModified: today,         changeFrequency: "weekly",   priority: 0.8 },
    { url: `${baseUrl}/about`,             lastModified: "2026-04-04",  changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,           lastModified: "2026-04-04",  changeFrequency: "monthly",  priority: 0.8 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: "2026-04-04",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
