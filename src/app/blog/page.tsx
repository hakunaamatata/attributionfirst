import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import { blogPosts } from "@/data/blog";
import { blogPageCopy, siteConfig } from "@/data/siteData";

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
      "@type": "Organization",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-padding relative overflow-hidden border-b border-border pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-60" />
        <div className="container-wide relative text-center">
          <FadeIn>
            <SectionLabel>{blogPageCopy.label}</SectionLabel>
            <h1 className="headline mx-auto mt-5 max-w-3xl">{blogPageCopy.headline}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.8] text-muted md:text-base">
              {blogPageCopy.subheading}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <FadeIn delay={0.08}>
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                {blogPageCopy.listHeading}
              </h2>
              <p className="mt-3 text-sm text-muted md:text-base">{blogPageCopy.listSubheading}</p>
            </FadeIn>
          </div>

          {blogPosts.length === 0 ? (
            <p className="text-center text-muted">New posts coming soon. Check back shortly.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={0.1 + i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-charcoal-elevated/60 p-6 transition-all duration-500 hover:border-border-hover hover:bg-charcoal-elevated"
                >
                  <div className="mb-4 flex items-center gap-2 text-[10px] tracking-[0.14em] text-accent uppercase">
                    <span>{post.category}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-dim">
                    <span>{post.readingTime} min read</span>
                    <span className="font-medium text-accent transition-transform group-hover:translate-x-0.5">
                      Read article →
                    </span>
                  </div>
                </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
