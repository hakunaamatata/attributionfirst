export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  longDescription: string;
}

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Full-funnel paid advertising strategy across Google and Meta platforms, optimized for maximum ROI.",
    icon: "Target",
    features: [
      "Multi-platform campaign architecture",
      "Audience segmentation and targeting",
      "Budget allocation and optimization",
      "Conversion tracking and attribution",
      "Monthly performance reporting",
    ],
    longDescription:
      "I design and execute data-driven performance marketing strategies that align with your business goals. From identifying your target audience to setting up cross-platform campaigns, every decision is backed by data. With experience managing ₹7Cr+ in ad spend across industries, I build campaigns that deliver measurable, scalable results.",
  },
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    description:
      "Expert management of Search, Display, Performance Max, and Shopping campaigns to capture high-intent buyers.",
    icon: "BarChart3",
    features: [
      "Search campaign optimization",
      "Performance Max campaigns",
      "Smart bidding strategies",
      "Keyword research and negative keyword management",
      "Quality Score optimization",
    ],
    longDescription:
      "With Google Ads Search certification and 5+ years of hands-on experience, I manage campaigns that consistently outperform industry benchmarks. From strategic keyword targeting that boosted ROI by 35% to bid optimization that reduced ad spend by 40%, I focus on every lever that moves the needle for your business.",
  },
  {
    slug: "meta-ads-campaigns",
    title: "Meta Ads Campaigns",
    description:
      "Facebook and Instagram advertising campaigns designed to generate qualified leads and drive conversions.",
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
  },
  {
    slug: "lead-generation-funnels",
    title: "Lead Generation Funnels",
    description:
      "End-to-end funnel design from ad click to lead capture, built to maximize conversion rates.",
    icon: "Filter",
    features: [
      "Funnel strategy and mapping",
      "Lead magnet creation",
      "Form optimization",
      "CRM integration (Salesforce, Oracle)",
      "Lead scoring and qualification",
    ],
    longDescription:
      "I build lead generation funnels that guide prospects from initial awareness to conversion. By integrating GA4, GTM, and CRM systems like Salesforce and Oracle, I ensure every lead is tracked, scored, and followed up on. The result: more qualified leads and a shorter sales cycle for your team.",
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization",
    description:
      "High-converting landing pages built and optimized using data-driven post-click optimization techniques.",
    icon: "Layout",
    features: [
      "Webflow landing page design",
      "A/B testing and experimentation",
      "Post-click optimization",
      "Page speed optimization",
      "Conversion rate optimization",
    ],
    longDescription:
      "Your ad is only half the equation — the landing page is where conversions happen. I specialize in post-click optimization, building and testing Webflow landing pages that align with ad messaging, reduce bounce rates, and maximize form submissions. Every element is tested and refined based on real user data.",
  },
];
