export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  adSpend: string;
  leads: string;
  roas: string;
  period: string;
  challenge: string;
  strategy: string[];
  results: { label: string; value: string }[];
  keyTakeaways: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "travel-campaign-optimization",
    title: "Travel Campaign Optimization",
    industry: "Travel & Tourism",
    client: "Thomas Cook India",
    adSpend: "₹5L",
    leads: "2x Revenue Uplift",
    roas: "4.5x",
    period: "6 Months",
    challenge:
      "Thomas Cook needed to optimize PPC spend across domestic and international travel campaigns while maintaining lead quality. Historical campaigns had significant budget allocated to non-performing keywords, resulting in wasted ad spend and stagnant revenue growth.",
    strategy: [
      "Performed 12-month historical keyword analysis using Looker Studio to identify revenue-generating vs non-performing keywords",
      "Strategically paused non-revenue generating keywords and reallocated budget to proven performers",
      "Developed data-driven top-of-funnel (TOFU) campaigns focused on quality traffic acquisition",
      "Engineered cross-platform App Campaigns for iOS and Android, integrating Firebase Analytics events as Google Ads conversions",
      "Launched targeted Google My Business ad campaigns to boost local branch visibility",
    ],
    results: [
      { label: "Revenue Uplift", value: "200% (2x)" },
      { label: "Traffic Increase", value: "40%" },
      { label: "Branch Calls Increase", value: "25%" },
      { label: "Cost/Install (Android)", value: "₹10" },
    ],
    keyTakeaways: [
      "Data-driven keyword pruning delivers outsized returns when backed by historical analysis",
      "Firebase Analytics integration enables precise optimization for post-install user behavior",
      "Localized GMB campaigns are highly effective for driving branch-level conversions",
    ],
  },
  {
    slug: "real-estate-lead-generation",
    title: "Real Estate Lead Generation",
    industry: "Real Estate",
    client: "Premium Property Developer",
    adSpend: "₹2L",
    leads: "850+",
    roas: "4.2x",
    period: "3 Months",
    challenge:
      "A premium real estate developer needed to generate high-quality leads for a new residential project launch. Previous campaigns suffered from high cost per lead and low lead quality, with most inquiries coming from unqualified buyers.",
    strategy: [
      "Built granular audience segments based on income level, location, and property interest signals",
      "Created compelling ad creatives showcasing project USPs with strong CTAs",
      "Set up end-to-end conversion tracking with GA4 and GTM for form submissions and call tracking",
      "Implemented A/B testing across ad copy, visuals, and landing page variants",
      "Optimized bidding strategy from maximize clicks to target CPA as data matured",
    ],
    results: [
      { label: "Leads Generated", value: "850+" },
      { label: "Cost Per Lead", value: "Reduced by 35%" },
      { label: "ROAS", value: "4.2x" },
      { label: "Lead Quality Score", value: "85%" },
    ],
    keyTakeaways: [
      "Granular audience segmentation is critical for high-ticket products like real estate",
      "Transitioning from maximize clicks to target CPA bidding at the right data threshold dramatically improves lead quality",
      "Landing page A/B testing contributed to a 25% improvement in conversion rate",
    ],
  },
  {
    slug: "ppc-roi-optimization",
    title: "PPC ROI Optimization",
    industry: "Marketing & Content Services",
    client: "Crimson Interactive",
    adSpend: "₹3L",
    leads: "35% ROI Increase",
    roas: "3.8x",
    period: "10 Months",
    challenge:
      "Crimson Interactive needed to improve PPC campaign performance across Google, Bing, and Yahoo while reducing overall ad spend. Campaigns lacked proper tracking, A/B testing, and the landing pages had low conversion rates.",
    strategy: [
      "Developed comprehensive PPC strategies aligned with business goals including target audience identification and platform selection",
      "Set up comprehensive tracking to monitor all valuable user actions — purchases, form submissions, and micro-conversions",
      "Designed and executed systematic A/B tests across ad creatives, targeting options, and landing pages",
      "Implemented strategic keyword research and competitive analysis via Auction Insights and SpyFu",
      "Optimized campaigns across Google, Bing, and Yahoo with platform-specific bidding strategies",
    ],
    results: [
      { label: "ROI Increase", value: "35%" },
      { label: "Ad Spend Reduction", value: "40%" },
      { label: "Traffic Growth", value: "40%" },
      { label: "Engagement Uplift", value: "40%" },
    ],
    keyTakeaways: [
      "Cross-platform optimization (Google + Bing + Yahoo) captures incremental traffic at lower CPCs",
      "Proper conversion tracking is the foundation — without it, optimization is guesswork",
      "Systematic A/B testing across the full funnel compounds improvements over time",
    ],
  },
];
