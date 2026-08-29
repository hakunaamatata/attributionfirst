import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContentRenderer from "@/components/BlogContent";
import SectionLabel from "@/components/SectionLabel";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteData";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    alternativeHeadline: post.metaTitle,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    wordCount: post.readingTime * 200,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.linkedin,
      jobTitle: siteConfig.title,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    image: absoluteUrl("/opengraph-image"),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="section-padding relative overflow-hidden border-b border-border pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-50" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-dim">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-muted">{post.metaTitle}</span>
          </nav>

          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-muted-dim">
            <span className="rounded-full border border-border-active bg-accent-muted px-3 py-1 text-accent">
              {post.category}
            </span>
            <span>{post.readingTime} min read</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{post.excerpt}</p>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-wide mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-dim transition-colors hover:text-accent"
          >
            ← Back to Blog
          </Link>

          <div className="space-y-6">
            {post.content.map((block, i) => (
              <BlogContentRenderer key={i} block={block} />
            ))}
          </div>

          <div className="mt-16 flex items-start gap-4 border-t border-border pt-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-active bg-accent-muted font-display text-lg font-semibold text-accent">
              J
            </div>
            <div>
              <p className="font-display font-semibold text-white">{siteConfig.founder}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {siteConfig.title} with 5+ years experience building attribution infrastructure
                for scaling brands across Google Ads, Meta Ads, and LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="section-padding border-t border-border bg-charcoal-light">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <SectionLabel>Next step</SectionLabel>
          <h2 className="headline mt-5">Ready to Fix Your Attribution?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Let&apos;s audit your tracking infrastructure and rebuild a measurement system that
            gives you confidence in every budget decision.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={siteConfig.contactUrl} className="btn-primary justify-center">
              Book Strategy Call
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
