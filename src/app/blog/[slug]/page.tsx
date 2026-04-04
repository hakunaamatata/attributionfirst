import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Phone, MessageCircle, ChevronRight, CheckCircle } from "lucide-react";
import { blogPosts, BlogContent } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  const url = `${siteConfig.siteUrl}/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

// ─── Render helpers ─────────────────────────────────────────────────────────

function RenderContent({ block }: { block: BlogContent }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="text-lg text-text-secondary leading-relaxed border-l-4 border-accent pl-5 bg-accent/5 py-4 pr-4 rounded-r-xl">
          {block.text}
        </p>
      );

    case "toc":
      return (
        <nav
          aria-label="Table of contents"
          className="bg-surface border border-border rounded-2xl p-6 mb-2"
        >
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
            Table of Contents
          </p>
          <ol className="space-y-2">
            {block.items.map((item, i) => (
              <li key={item.anchor} className="flex items-start gap-2.5">
                <span className="text-accent font-bold text-sm w-5 shrink-0 pt-px">
                  {i + 1}.
                </span>
                <a
                  href={`#${item.anchor}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors leading-snug"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      );

    case "h2":
      return (
        <h2
          id={block.id}
          className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={block.id}
          className="text-xl md:text-2xl font-bold text-primary mt-8 mb-3 scroll-mt-24"
        >
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="text-text-secondary leading-relaxed">{block.text}</p>
      );

    case "callout": {
      const styles = {
        warning: "border-amber-400 bg-amber-50 text-amber-900",
        info: "border-blue-400 bg-blue-50 text-blue-900",
        success: "border-emerald-400 bg-emerald-50 text-emerald-900",
      };
      return (
        <div
          className={`border-l-4 rounded-r-xl px-5 py-4 text-sm leading-relaxed ${styles[block.variant]}`}
        >
          {block.text}
        </div>
      );
    }

    case "comparison_table":
      return (
        <figure className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="bg-primary text-white text-left px-4 py-3 first:rounded-tl-xl last:rounded-tr-xl font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white" : "bg-surface"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 border-b border-border text-text-secondary"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <figcaption className="text-xs text-text-secondary text-center mt-2 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "bullet_list":
      return (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "numbered_list":
      return (
        <ol className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "stat_highlight":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
          {block.stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-border rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent leading-none mb-1">
                {s.value}
              </p>
              <p className="text-text-secondary text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      );

    case "faq":
      return (
        <div className="space-y-4">
          {block.items.map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-border rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none font-semibold text-primary text-sm md:text-base hover:bg-surface transition-colors">
                <span>{item.q}</span>
                <ChevronRight className="w-4 h-4 text-accent shrink-0 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      );

    case "phase_list":
      return (
        <div className="space-y-6">
          {block.phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-white border border-border rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                  {phase.number}
                </div>
                <div>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">
                    Phase {phase.number}
                  </p>
                  <h3 className="text-lg font-bold text-primary leading-tight">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                <span className="font-semibold text-primary">Goal:</span>{" "}
                {phase.goal}
              </p>
              <ul className="space-y-2 mb-4">
                {phase.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm text-primary">
                <span className="font-semibold">Deliverable:</span>{" "}
                {phase.deliverable}
              </div>
            </div>
          ))}
        </div>
      );

    case "cta":
      return (
        <div className="bg-gradient-to-br from-primary via-primary-light to-primary-mid rounded-2xl p-8 md:p-10 text-center my-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {block.heading}
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            {block.subtext}
          </p>
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
          >
            {block.buttonText}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      );

    default:
      return null;
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${siteConfig.siteUrl}/blog/${slug}`;

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Attribution First",
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // FAQ schema (extracted from content blocks)
  const faqBlock = post.content.find((b) => b.type === "faq");
  const faqSchema =
    faqBlock && faqBlock.type === "faq"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqBlock.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  // HowTo schema (extracted from phase list)
  const phaseBlock = post.content.find((b) => b.type === "phase_list");
  const howToSchema =
    phaseBlock && phaseBlock.type === "phase_list"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Fix Broken Marketing Attribution",
          description: "A three-phase framework to rebuild your attribution infrastructure and restore ROAS accuracy.",
          step: phaseBlock.phases.map((p) => ({
            "@type": "HowToStep",
            name: `Phase ${p.number}: ${p.title}`,
            text: p.goal,
            itemListElement: p.activities.map((a) => ({
              "@type": "HowToDirection",
              text: a,
            })),
          })),
        }
      : null;

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
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        suppressHydrationWarning
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
          suppressHydrationWarning
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80 truncate max-w-[200px]">{post.metaTitle}</span>
          </nav>

          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} min read
            </span>
            <time dateTime={post.publishedAt} className="text-white/50 text-xs">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Content blocks */}
          <div className="space-y-6">
            {post.content.map((block, i) => (
              <RenderContent key={i} block={block} />
            ))}
          </div>

          {/* Author card */}
          <div className="mt-16 pt-8 border-t border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <span className="text-accent font-bold text-lg">J</span>
            </div>
            <div>
              <p className="font-bold text-primary">{siteConfig.name}</p>
              <p className="text-text-secondary text-sm leading-relaxed mt-1">
                {siteConfig.title} with 5+ years experience building attribution
                infrastructure for scaling brands across Google Ads, Meta Ads,
                and LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Fix Your Attribution?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s audit your tracking infrastructure and rebuild a
            measurement system that gives you confidence in every budget
            decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Book Strategy Call
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
