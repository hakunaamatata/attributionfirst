export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  longDescription: string;
  metric?: string;
  tags?: { label: string; tooltip: string }[];
}

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Full-funnel paid advertising strategy across Google and Meta platforms, engineered for maximum ROI and scalable revenue growth.",
    icon: "Target",
    features: [
      "Multi-platform campaign architecture",
      "Audience segmentation and targeting",
      "Budget allocation and optimisation",
      "Conversion tracking and attribution",
      "Monthly performance reporting",
    ],
    longDescription:
      "I design and execute data-driven performance marketing strategies that align with your business goals. From identifying your target audience to setting up cross-platform campaigns, every decision is backed by data. With experience managing ₹7Cr+ in ad spend across industries, I build campaigns that deliver measurable, scalable results.",
    metric: "₹7Cr+ in ad spend managed across Google, Meta, and Bing platforms.",
    tags: [
      { label: "Google Ads", tooltip: "Search, Display, Performance Max, and Shopping campaigns" },
      { label: "Meta Ads", tooltip: "Facebook and Instagram lead generation and conversion campaigns" },
      { label: "Attribution", tooltip: "GA4, GTM, and server-side tracking for accurate ROAS measurement" },
    ],
  },
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    description:
      "Expert management of Search, Display, Performance Max, and Shopping campaigns to capture high-intent buyers at every stage of the funnel.",
    icon: "BarChart3",
    features: [
      "Search campaign optimisation",
      "Performance Max campaigns",
      "Smart bidding strategies",
      "Keyword research & negative keyword management",
      "Quality Score optimisation",
    ],
    longDescription:
      "With Google Ads Search certification and 5+ years of hands-on experience, I manage campaigns that consistently outperform industry benchmarks. From strategic keyword targeting that boosted ROI by 35% to bid optimisation that reduced ad spend by 40%, I focus on every lever that moves the needle for your business.",
    metric: "35% ROI increase and 40% cost reduction across Search and PMax campaigns.",
    tags: [
      { label: "Search", tooltip: "Keyword-targeted campaigns for high-intent bottom-of-funnel buyers" },
      { label: "Performance Max", tooltip: "AI-driven campaigns across all Google inventory channels" },
      { label: "Shopping", tooltip: "Product listing ads for e-commerce and retail businesses" },
    ],
  },
  {
    slug: "meta-ads-campaigns",
    title: "Meta Ads Campaigns",
    description:
      "Facebook and Instagram advertising campaigns built for qualified lead generation, retargeting, and full-funnel conversion at scale.",
    icon: "Megaphone",
    features: [
      "Lead generation campaigns",
      "Custom and lookalike audiences",
      "Creative A/B testing",
      "Retargeting funnels",
      "Conversion API setup",
    ],
    longDescription:
      "I create Meta Ads campaigns that go beyond impressions and clicks. By combining precise audience targeting with compelling creatives and continuous A/B testing, I build campaigns that consistently generate high-quality leads at a cost-per-acquisition that makes sense for your business.",
    metric: "2× revenue uplift through Meta retargeting and lookalike audience optimisation.",
    tags: [
      { label: "Facebook", tooltip: "Feed, Stories, and Reels campaigns for lead generation and sales" },
      { label: "Instagram", tooltip: "Visual-first campaigns for brand awareness and direct response" },
      { label: "CAPI", tooltip: "Conversion API for accurate tracking post iOS 14 privacy changes" },
    ],
  },
  {
    slug: "lead-generation-funnels",
    title: "Lead Generation Funnels",
    description:
      "End-to-end funnel design from ad click to CRM — built to qualify, capture, and convert high-intent leads at the lowest possible CPA.",
    icon: "Filter",
    features: [
      "Funnel strategy and mapping",
      "Lead magnet creation",
      "Form and landing page optimisation",
      "CRM integration (Salesforce, Oracle)",
      "Lead scoring and qualification",
    ],
    longDescription:
      "I build lead generation funnels that guide prospects from initial awareness to conversion. By integrating GA4, GTM, and CRM systems like Salesforce and Oracle, I ensure every lead is tracked, scored, and followed up on. The result: more qualified leads and a shorter sales cycle for your team.",
    metric: "2000+ qualified leads generated across B2B and B2C verticals.",
    tags: [
      { label: "GA4 + GTM", tooltip: "Full event tracking and tag management for funnel visibility" },
      { label: "Salesforce", tooltip: "CRM integration for automated lead routing and scoring" },
      { label: "CRO", tooltip: "Conversion Rate Optimisation — testing every step of the funnel" },
    ],
  },
  {
    slug: "local-search-gmb-ads",
    title: "SEO & Local Search",
    description:
      "Technical SEO, on-page optimization, and Google Business Profile management to dominate organic search results — from local map packs to national rankings.",
    icon: "Search",
    features: [
      "Technical SEO audit & implementation",
      "On-page and content optimization",
      "Google Business Profile management",
      "Local citations & NAP consistency",
      "Core Web Vitals optimization",
      "Schema markup & rich result targeting",
    ],
    longDescription:
      "Search doesn't stop at paid ads. I combine technical SEO, on-page content strategy, and Google Business Profile optimization to build sustainable organic visibility. From fixing crawlability issues and structured data gaps to optimizing for local map pack rankings, every recommendation is tied to real traffic and lead outcomes — not just rankings.",
    metric: "Boosted local branch calls by 25% through targeted geographic campaign orchestration.",
    tags: [
      { label: "Technical SEO", tooltip: "Crawlability, indexability, Core Web Vitals, schema markup, and site architecture" },
      { label: "Local SEO", tooltip: "Google Business Profile, map pack rankings, NAP consistency, and local citations" },
      { label: "On-Page SEO", tooltip: "Title tags, meta descriptions, heading hierarchy, and content optimization" },
    ],
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization & AI SEO",
    description:
      "High-converting landing pages engineered for both human visitors and AI-powered search engines — optimized to rank, convert, and get cited by ChatGPT, Perplexity, and Google AI Overviews.",
    icon: "Layout",
    features: [
      "Webflow & Next.js landing page design",
      "A/B testing and CRO experimentation",
      "Post-click funnel alignment",
      "Core Web Vitals & page speed optimization",
      "AI-ready content structure (passage-level citability)",
      "Schema markup for rich results",
      "Answer-optimized FAQ and heading architecture",
    ],
    longDescription:
      "Your ad is only half the equation — the landing page is where conversions happen and where AI search engines decide whether to surface you. I build and optimize landing pages that score on both fronts: fast load times, clear messaging, and frictionless forms for human visitors; structured content, semantic markup, and entity-optimized copy for AI discovery engines. From Google AI Overviews to ChatGPT search to Perplexity, the next wave of search requires pages that AI models can parse, quote, and cite. Every page I build is engineered for this new reality — so your brand shows up whether the query is typed into Google, asked to an AI assistant, or processed by a large language model.",
    metric: "Pages optimized for AI search see 2–3× more organic impressions from AI Overview placements.",
    tags: [
      {
        label: "AIO",
        tooltip: "Artificial Intelligence Optimization — structuring content so AI systems understand and surface your pages",
      },
      {
        label: "AEO",
        tooltip: "Answer Engine Optimization — formatting content to be directly cited as answers by AI assistants",
      },
      {
        label: "AI SEO",
        tooltip: "AI Search Engine Optimization — optimizing for AI-powered SERP features like Google AI Overviews",
      },
      {
        label: "GEO",
        tooltip: "Generative Engine Optimization — emerging practice of optimizing for ChatGPT, Perplexity, and other generative AI search tools",
      },
      {
        label: "LLMO",
        tooltip: "Large Language Model Optimization — making your content machine-readable and citable by LLMs like GPT-4 and Claude",
      },
    ],
  },
];
