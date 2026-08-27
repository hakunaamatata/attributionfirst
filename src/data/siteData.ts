export interface CaseStudyStat {
  value: number;
  label: string;
  sub: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface CaseStudyBar {
  label: string;
  before: number;
  after: number;
  unit?: string;
  prefix?: string;
  invert?: boolean;
}

export interface CaseStudy {
  company: string;
  category: string;
  period: string;
  spend: string;
  summary: string;
  highlight: {
    value: number;
    suffix: string;
    label: string;
    decimals: number;
  };
  stats: CaseStudyStat[];
  bars: CaseStudyBar[];
  pdfUrl?: string;
}

export const siteConfig = {
  name: "Attribution First",
  founder: "Junaid Ahmed Kazi",
  title: "Performance Marketing Expert",
  tagline: "Helping Businesses Generate High Quality Leads",
  email: "junaidkazi66@gmail.com",
  phone: "+91-9545087538",
  phoneTel: "tel:+919545087538",
  whatsapp:
    "https://wa.me/919545087538?text=Hi%20Junaid%2C%20I%20need%20help%20with%20my%20marketing%20campaigns",
  linkedin: "https://www.linkedin.com/in/junaid-kazi-b205b0222",
  location: "Nerul, Mumbai - 400706",
  siteUrl: "https://www.attributionfirst.co.in",
  description:
    "Performance marketing & attribution infrastructure for scaling brands. Google Ads, Meta Ads, and measurement systems that connect ad spend to real revenue.",
  profileImage: "/images/profileImage.jpeg",
  resumeUrl: "/resume/Myresume_JunaidahmedKazi.pdf",
  noumanPortfolioUrl: "https://nouman-portfolio-ashen.vercel.app",
};

export interface Profile {
  id: "junaid" | "nouman";
  name: string;
  title: string;
  focus: string;
  image: string;
  imageAlt: string;
  bio: string[];
  credentials: { value: string; label: string }[];
  skills: string[];
  experience: { role: string; company: string; period: string }[];
  resumeUrl: string;
  externalUrl?: string;
  externalLabel?: string;
  statFloat: { value: string; label: string };
  availability: string;
}

export const heroHighlights = [
  "₹7Cr+ Ad Spend Managed",
  "2,000+ Qualified Leads",
  "35% ROI Increase",
];

export const metrics = [
  { value: "₹7Cr+", label: "Ad Spend Managed", animate: false },
  { value: "2000+", label: "Qualified Leads", animate: true },
  { value: "35%", label: "ROI Increase", animate: true },
  { value: "2x", label: "Revenue Growth", animate: false },
];

export const pillars = [
  {
    num: "01",
    label: "Acquire",
    description:
      "Google Ads, Meta Ads & Bing Ads — multi-platform campaigns engineered for maximum ROI and scalable revenue growth.",
  },
  {
    num: "02",
    label: "Convert",
    description:
      "Lead generation funnels from ad click to CRM — GA4, GTM, Salesforce integration with form friction controls and server-side tracking.",
  },
  {
    num: "03",
    label: "Dominate",
    description:
      "Technical SEO, landing page optimisation & AI SEO (AEO/GEO) — get cited in ChatGPT, Perplexity, and Google AI Overviews.",
  },
];

export const services = [
  {
    num: "01",
    title: "Performance Marketing",
    description:
      "Full-funnel paid advertising across Google and Meta. ₹7Cr+ in ad spend managed with conversion tracking and attribution.",
  },
  {
    num: "02",
    title: "Google Ads Management",
    description:
      "Search, Performance Max, Shopping & remarketing. 35% ROI increase and 40% cost reduction across campaigns.",
  },
  {
    num: "03",
    title: "Meta Ads Campaigns",
    description:
      "Lead generation, retargeting, lookalike audiences and Conversions API. 2× revenue uplift through audience optimisation.",
  },
  {
    num: "04",
    title: "Lead Generation Funnels",
    description:
      "End-to-end funnel design from ad click to CRM. 2,000+ qualified leads across B2B and B2C verticals.",
  },
  {
    num: "05",
    title: "Marketing Attribution",
    description:
      "GA4, GTM, CRM integration, conversion tracking and revenue attribution — connect ad spend to real business outcomes.",
  },
  {
    num: "06",
    title: "SEO Optimisation",
    description:
      "Technical SEO, on-page optimisation, schema markup and Core Web Vitals. 40% organic impressions improvement.",
  },
  {
    num: "07",
    title: "Local Search & GMB Ads",
    description:
      "Google Business Profile and Map ads for local dominance. 25% boost in local branch calls via geo-targeted campaigns.",
  },
  {
    num: "08",
    title: "Landing Pages & AI SEO",
    description:
      "High-converting landing pages optimised for AI search. 2–3× more impressions from Google AI Overview placements.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    company: "Thomas Cook India App",
    category: "App Acquisition + Attribution",
    period: "Dec 2025 – Feb 2026",
    spend: "₹3L/month ad spend",
    summary:
      "Engineered closed-loop Firebase-to-Google Ads tracking. Shifted bidding from top-of-funnel clicks to high-intent booking events — scaling installs 13x while halving CPA.",
    highlight: { value: 13, suffix: "x", label: "Install growth", decimals: 0 },
    stats: [
      { value: 54, suffix: "%", label: "CPA reduction", sub: "₹42.80 → ₹19.55" },
      { value: 13, suffix: "x", label: "Total installs", sub: "1,022 → 14,165/mo" },
      { value: 59, suffix: "%", label: "Android CPI lower", sub: "₹39.75 → ₹7.94" },
      { value: 10, suffix: "x", label: "iOS installs", sub: "73 → 788" },
    ],
    bars: [
      { label: "Monthly installs", before: 1022, after: 14165 },
      { label: "Blended CPA (₹)", before: 42.8, after: 19.55, prefix: "₹", invert: true },
      { label: "Android CPI (₹)", before: 39.75, after: 7.94, prefix: "₹", invert: true },
    ],
    pdfUrl: "/case-studies/scaling-app-acquisition-13x-halving-cpa.pdf",
  },
  {
    company: "ServerFactory",
    category: "B2B Lead Generation",
    period: "1-month engagement",
    spend: "USA & UAE markets",
    summary:
      "Hybrid Google Ads architecture segmented by geography and intent. Captured 50+ high-quality B2B leads for enterprise GPU servers with 70%+ qualified lead rate.",
    highlight: { value: 70, suffix: "%+", label: "Qualified lead rate", decimals: 0 },
    stats: [
      { value: 50, suffix: "+", label: "High-quality leads", sub: "In 1 month" },
      { value: 85, prefix: "$", label: "UAE cost/conv", sub: "Search campaigns" },
      { value: 18, prefix: "$", label: "PMax cost/conv", sub: "Top-funnel demand" },
      { value: 93.7, suffix: "%", label: "Engaged sessions", sub: "UAE traffic quality", decimals: 1 },
    ],
    bars: [
      { label: "Qualified lead rate", before: 40, after: 70, unit: "%" },
      { label: "UAE cost/conv ($)", before: 120, after: 85, prefix: "$", invert: true },
      { label: "Engaged session rate", before: 75, after: 93.7, unit: "%" },
    ],
    pdfUrl: "/case-studies/scaling-b2b-lead-generation-serverfactory.pdf",
  },
  {
    company: "Thomas Cook",
    category: "Revenue Attribution",
    period: "May – Dec 2025",
    spend: "Multi-platform",
    summary:
      "Built custom reporting connecting Google Ads, Meta, Bing and GA4 to booking revenue via Looker Studio. Eliminated zero-conversion keywords and scaled high-intent clusters.",
    highlight: { value: 2, suffix: "x", label: "Revenue growth", decimals: 0 },
    stats: [
      { value: 44, suffix: "x", label: "Brand ROAS", sub: "Thomas Cook branded terms" },
      { value: 345, prefix: "₹", suffix: "K+", label: "Premium ATV", sub: "Sustained booking value", decimals: 0 },
      { value: 40, suffix: "%", label: "Traffic increase", sub: "Qualified website traffic" },
      { value: 200, suffix: "%", label: "Revenue scale-up", sub: "12-month data audit" },
    ],
    bars: [
      { label: "Revenue index", before: 100, after: 200, unit: "%" },
      { label: "Brand ROAS", before: 22, after: 44, unit: "x" },
      { label: "Qualified traffic", before: 100, after: 140, unit: "%" },
    ],
    pdfUrl: "/case-studies/data-architecting-200-revenue-scale-up.pdf",
  },
];

export const testimonials = [
  {
    quote:
      "Efficient, capable, knowledgable, friendly and reliable. If you need a PPC expert and you want your campaign to be successful — better hire Junaid.",
    name: "Michael Simkin",
    role: "Client",
    company: "Climate-Tech & Wellness",
  },
  {
    quote:
      "A pleasant and reliable experience. He takes on my toughest requests and always delivers prompt solutions. His experience in the industry is clear in the detail of his work.",
    name: "Zachary Miller",
    role: "Sr. Campaign Manager",
    company: "ReachLocal",
  },
  {
    quote:
      "A quick learner who effortlessly stays on top of tasks, ensuring projects are completed with efficiency and precision. His proactive approach makes him a great asset to any team.",
    name: "Sarah Tropper",
    role: "Manager",
    company: "Marketing & Advertising",
  },
  {
    quote:
      "Someone you can really count on. He knows what he is doing and helped us curate various strategies. A growthful experience to work by his side.",
    name: "Zaid Khan",
    role: "Founder",
    company: "Froheyo",
  },
];

export const insights = [
  {
    title: "Why Your ROAS Is Declining: The Real Problem Isn't Your Paid Ads Expert",
    category: "Attribution & Measurement",
    readTime: "12 min",
  },
  {
    title: "Why Platform ROAS Can Mislead You",
    category: "Revenue Attribution",
    readTime: "6 min",
  },
  {
    title: "Last-Click Attribution Is Not Enough",
    category: "Marketing Attribution",
    readTime: "5 min",
  },
  {
    title: "How to Connect Google Ads With CRM Revenue",
    category: "Google Ads",
    readTime: "8 min",
  },
  {
    title: "GA4 vs CRM: Which One Should You Trust?",
    category: "GA4",
    readTime: "7 min",
  },
  {
    title: "How AI Search Is Changing SEO",
    category: "AI SEO",
    readTime: "6 min",
  },
];

export const profiles: Record<"junaid" | "nouman", Profile> = {
  junaid: {
    id: "junaid",
    name: "Junaid Ahmed Kazi",
    title: "Performance Marketing Expert",
    focus: "Marketing & Attribution",
    image: "/images/profileImage.jpeg",
    imageAlt: "Junaid Ahmed Kazi - Performance Marketing Expert",
    bio: [
      "Digital marketing professional with over 5 years of experience in data-driven marketing strategy and campaign execution. Expert in Google Ads and Meta Ads with a track record of delivering 35% ROI increases and 40% ad spend reductions while maintaining lead quality.",
      "Currently serving as Assistant Manager - Digital at Thomas Cook India, where I develop cross-platform campaigns, optimise user acquisition through Firebase Analytics integration, and manage performance across Google, Meta, and App install campaigns.",
    ],
    credentials: [
      { value: "5+ Years", label: "Experience" },
      { value: "₹7Cr+", label: "Ad Spend Managed" },
      { value: "Thomas Cook India", label: "Current Role" },
    ],
    skills: [
      "Google Ads",
      "Meta Ads",
      "Bing Ads",
      "GA4",
      "GTM",
      "Firebase",
      "Salesforce CRM",
      "CRO",
    ],
    experience: [
      {
        role: "Assistant Manager - Digital",
        company: "Thomas Cook India",
        period: "Oct 2024 – Present",
      },
      {
        role: "PPC Lead",
        company: "Crimson Interactive",
        period: "Jan 2024 – Oct 2024",
      },
      {
        role: "SEM Analyst",
        company: "ReachLocal India",
        period: "Dec 2021 – Aug 2023",
      },
    ],
    resumeUrl: "/resume/Myresume_JunaidahmedKazi.pdf",
    externalUrl: "https://www.linkedin.com/in/junaid-kazi-b205b0222",
    externalLabel: "LinkedIn",
    statFloat: { value: "₹7Cr+", label: "Ad Spend Managed" },
    availability: "India & UAE · B2B & Travel",
  },
  nouman: {
    id: "nouman",
    name: "Nouman Khatib",
    title: "Senior Full Stack Developer",
    focus: "Technology & Websites",
    image: "/images/nouman-profile.jpeg",
    imageAlt: "Nouman Khatib - Senior Full Stack Developer",
    bio: [
      "Senior Full Stack Developer with 8+ years building the websites, landing pages, and technical SEO foundation that performance marketing campaigns run on — fast, structured, and built to convert.",
      "8+ years engineering distributed systems at enterprise scale (100M+ daily requests, 500M+ users at Reliance Jio) — pages built to hold up under real traffic, not just look good in a demo.",
    ],
    credentials: [
      { value: "8+ Years", label: "Experience" },
      { value: "100M+", label: "Daily Auth Requests" },
      { value: "Reliance Jio", label: "Enterprise Scale" },
    ],
    skills: [
      "Next.js",
      "React",
      "Technical SEO",
      "Landing Pages",
      "Core Web Vitals",
      "Node.js",
      "TypeScript",
      "GA4 + GTM",
      "GraphQL",
      "Kubernetes",
    ],
    experience: [
      {
        role: "Senior Full Stack Developer",
        company: "Reliance Jio",
        period: "Nov 2016 – Present",
      },
      {
        role: "JioID — Universal Identity Platform",
        company: "Reliance Jio",
        period: "2019 – Present",
      },
      {
        role: "UIFP — Identity & Fingerprinting",
        company: "Reliance Jio",
        period: "2021 – Present",
      },
    ],
    resumeUrl: "/resume/Nouman_Khatib_Resume.pdf",
    externalUrl: "https://nouman-portfolio-ashen.vercel.app",
    externalLabel: "Portfolio",
    statFloat: { value: "8+ Yrs", label: "Websites, SEO & Landing Pages" },
    availability: "Next.js · Technical SEO · CRO Pages",
  },
};

/** @deprecated use profiles.junaid */
export const founder = profiles.junaid;
