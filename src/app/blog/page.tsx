import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Blog — Marketing Attribution & Performance Insights",
  description:
    "Expert insights on marketing attribution, ROAS optimization, and paid ads strategy. Learn how to build measurement infrastructure that drives real business growth.",
  alternates: { canonical: `${siteConfig.siteUrl}/blog` },
  openGraph: { url: `${siteConfig.siteUrl}/blog` },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Attribution First — Marketing Insights",
    description: metadata.description,
    url: `${siteConfig.siteUrl}/blog`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Insights & Strategy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marketing Attribution Blog
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            No fluff. Just actionable frameworks on attribution, paid media, and
            the measurement infrastructure that separates scaling brands from
            stagnating ones.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <p className="text-center text-text-secondary text-lg">
              New posts coming soon. Check back shortly.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-text-secondary text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
