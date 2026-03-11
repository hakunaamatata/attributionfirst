export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  adSpend: string;
  leads: string;
  /** Third metric value (e.g. ROAS, CPA reduction, Qualified Lead Rate) */
  roas: string;
  /** Optional label for third metric when not "ROAS" (e.g. "Qualified Lead Rate", "CPA reduction") */
  roasLabel?: string;
  period: string;
  challenge: string;
  strategy: string[];
  results: {
    label: string;
    value: string;
    /** Optional: main stat for hero-style display (e.g. "13x") */
    highlight?: string;
    /** Optional: before→after or context line (e.g. "1,022 → 14,165 /mo") */
    subline?: string;
  }[];
  keyTakeaways: string[];
  /** Optional: path to PDF (in public folder) for download, e.g. "/case-studies/example.pdf" */
  pdfUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "scaling-app-acquisition-13x-halving-cpa",
    title: "Scaling Cross-Platform App Acquisition by 13x While Halving CPA",
    industry: "Travel & Tourism",
    client: "Thomas Cook India App",
    adSpend: "₹3L/month",
    leads: "14,165 installs",
    roas: "54% CPA ↓",
    roasLabel: "CPA reduction",
    period: "Dec 2025 – Feb 2026",
    challenge:
      "Thomas Cook India needed to massively scale user acquisition for iOS and Android apps in a highly competitive travel market—without inflating cost per acquisition. Scaling ad spend typically increases per-click costs; the mandate was volume growth with cost efficiency and focus on high-value, booking-intent users.",
    strategy: [
      "Engineered closed-loop tracking: linked Google Analytics for Firebase with Google Ads for real-time post-click, in-app action tracking.",
      "Defined and imported granular conversion events (first_open to calculate_price, booking completion) so bidding moved beyond top-of-funnel clicks.",
      "Trained Google Ads algorithms on high-intent events so bidding targeted users with historical booking propensity and ignored low-quality traffic.",
      "Started with first_open for volume and baseline, then progressively shifted to calculate_price and booking completion for maximum efficiency.",
    ],
    results: [
      { label: "Total installs", value: "13x (1,022 → 14,165/mo)", highlight: "13x", subline: "1,022 → 14,165 /mo" },
      { label: "Blended CPA", value: "54% reduction (₹42.80 → ₹19.55)", highlight: "54% ↓", subline: "₹42.80 → ₹19.55" },
      { label: "Android CPI", value: "59% lower (₹39.75 → ₹7.94)", highlight: "59% ↓", subline: "₹39.75 → ₹7.94" },
      { label: "iOS installs", value: "10x (73 → 788)", highlight: "10x", subline: "73 → 788" },
    ],
    keyTakeaways: [
      "Granular post-install event mapping lets ML algorithms identify high-value users, enabling aggressive scale without CPA inflation.",
      "Sequential optimization—volume-building events first (first_open), then high-intent signals (calculate_price)—drives maximum efficiency.",
      "Direct Firebase-to-Google Ads integration creates real-time feedback loops that significantly improve algorithmic bidding accuracy.",
    ],
    pdfUrl: "/case-studies/scaling-app-acquisition-13x-halving-cpa.pdf",
  },
  {
    slug: "scaling-b2b-lead-generation-serverfactory",
    title: "Scaling High-Ticket B2B Lead Generation for Global IT Infrastructure",
    industry: "B2B & IT Infrastructure",
    client: "ServerFactory (USA & UAE)",
    adSpend: "USA & UAE",
    leads: "50+ high-quality leads",
    roas: "70%",
    roasLabel: "Qualified Lead Rate",
    period: "1 Month",
    challenge:
      "ServerFactory needed to capture B2B decision-makers actively searching for enterprise-grade GPU servers, rackmount workstations, and Supermicro systems. The mandate was to penetrate highly competitive, high-CPC markets in USA and UAE without letting cost per acquisition spiral, while ensuring traffic quality translated into genuine sales opportunities—not wasted clicks from unqualified visitors.",
    strategy: [
      "Engineered a hybrid Google Ads architecture segmented by geography and intent: isolated high-intent keyword search campaigns by region (USA vs. UAE) for granular budget control.",
      "Deployed dedicated Performance Max campaigns to capture top-funnel demand and discover new converting audiences across Google's network at significantly lower CPC rates.",
      "Prevented expensive US clicks from cannibalizing the highly profitable UAE market, enabling independent optimization for each region.",
      "Deployed Custom Intent and In-Market audience layers, mapping search intent to specific hardware categories so budget was spent on users with a documented propensity to buy.",
      "Integrated GA4 to monitor engaged sessions and verify that search ads drove genuine B2B buyers, with zero budget wasted on immediate bounces.",
      "Used Maximize Conversions and Target CPA strategies to train the algorithm for cost-effective, high-value leads.",
    ],
    results: [
      { label: "High-quality leads", value: "50+", highlight: "50+", subline: "B2B leads in 1 month" },
      { label: "UAE Search Cost/Conv", value: "$85", highlight: "$85", subline: "Efficient UAE CPL" },
      { label: "PMax Cost/Conv", value: "$18", highlight: "$18", subline: "Top-funnel CPL" },
      { label: "Qualified lead rate", value: "70%+", highlight: "70%+", subline: "Highly targeted" },
      { label: "Engaged session rate (UAE)", value: "93.68%", highlight: "93.68%", subline: "Quality traffic" },
      { label: "Engaged session rate (USA)", value: "92.02%", highlight: "92.02%", subline: "Quality traffic" },
    ],
    keyTakeaways: [
      "Geographic segmentation (USA vs. UAE) ensures optimal budget allocation and prevents high-CPC regions from cannibalizing profitable markets.",
      "Performance Max plus GA4 quality layering captures mid-funnel demand and verifies B2B buyer intent, avoiding wasted spend on bounces.",
      "Custom Intent and In-Market audiences mapped to hardware categories ensured budget was spent on users with a documented propensity to buy.",
      "Value-based bidding (Maximize Conversions, Target CPA) with regional isolation established predictable, scalable cost per lead—50+ high-quality leads at efficient cost/conv within a month.",
    ],
    pdfUrl: "/case-studies/scaling-b2b-lead-generation-serverfactory.pdf",
  },
  {
    slug: "data-architecting-200-revenue-scale-up",
    title: "Data-Architecting a 200% Revenue Scale-Up",
    industry: "Travel & Tourism",
    client: "Thomas Cook",
    adSpend: "Multi-platform",
    leads: "2x Revenue",
    roas: "44x",
    roasLabel: "Brand ROAS",
    period: "May – Dec 2025",
    challenge:
      "The objective was to break through a revenue ceiling while managing a massive keyword inventory across domestic and international travel segments. Traditional metrics like CPL proved insufficient — the real problem was distinguishing between low-intent leads that drained budgets versus high-intent searches that converted into premium bookings worth ₹345K+.",
    strategy: [
      "Identified and eliminated high-cost, zero-conversion keywords (e.g., generic cruise searches) that consumed budget without delivering returns, and reallocated funds into high-intent keyword clusters with proven conversion patterns.",
      "Analyzed L2B (Lead to Booking) ratios across all keyword groups — while branded terms like 'Thomas Cook' maintained exceptional 44x ROAS, strategically scaled 'Holiday' and 'International' clusters to maintain premium ATV benchmarks.",
      "Deployed strategic TOFU (Top of Funnel) campaigns that increased qualified website traffic by 40%, creating a robust foundation for retargeting loops in Meta and Google.",
      "Maintained a clean account structure across Google Ads Search, Performance Max, Meta Lead Generation, and Bing Ads for scalable reporting — ensuring data integrity from click to booking confirmation.",
      "Built a custom reporting framework using GA4 event tracking, GTM container management, Looker Studio, and custom data connectors to connect advertising platforms directly to revenue outcomes.",
    ],
    results: [
      { label: "Revenue Jump", value: "2x (200%)", highlight: "2x", subline: "12-month data audit driven" },
      { label: "Brand ROAS", value: "44x", highlight: "44x", subline: "Thomas Cook branded terms" },
      { label: "Premium ATV", value: "₹345K+", highlight: "₹345K+", subline: "Sustained high booking value" },
      { label: "Traffic Increase", value: "40%", highlight: "40%", subline: "Qualified website traffic" },
    ],
    keyTakeaways: [
      "Cost Per Lead is a vanity metric in high-value verticals — focus on booking value, ATV, and L2B ratios to understand true campaign efficiency.",
      "Invest in custom reporting frameworks that connect advertising platforms directly to revenue outcomes; Looker Studio proved essential for granular keyword-to-booking mapping.",
      "TOFU campaigns aren't wasted spend — they're strategic investments that feed profitable retargeting loops. The 40% traffic increase paid dividends downstream.",
    ],
    pdfUrl: "/case-studies/data-architecting-200-revenue-scale-up.pdf",
  },
];
