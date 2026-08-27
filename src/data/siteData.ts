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
    prefix?: string;
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
  tagline: "Helping specialist B2B businesses turn search demand into revenue",
  email: "junaidkazi66@gmail.com",
  phone: "+91-9545087538",
  phoneTel: "tel:+919545087538",
  whatsapp:
    "https://wa.me/919545087538?text=Hi%2C%20I%27d%20like%20to%20discuss%20how%20you%20can%20help%20us%20find%20new%20customers",
  linkedin: "https://www.linkedin.com/in/junaid-kazi-b205b0222",
  location: "Nerul, Mumbai - 400706",
  siteUrl: "https://www.attributionfirst.co.in",
  description:
    "Attribution First helps high-value B2B businesses reach buyers who are actively searching. We combine commercial strategy, paid search and conversion technology to turn intent into qualified enquiries and measurable revenue.",
  profileImage: "/images/profileImage.jpeg",
  resumeUrl: "/resume/Myresume_JunaidahmedKazi.pdf",
  noumanPortfolioUrl: "https://nouman-portfolio-ashen.vercel.app",
  primaryCta: "Book a commercial review",
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Michael Simkin",
    role: "Commercial strategy, positioning & customer research",
    bio: "Michael works with businesses to understand where their commercial opportunities lie, what customers actually care about and how complex propositions can be communicated clearly.",
    linkedin: "https://www.linkedin.com/in/michael-simkin-gladhat",
    initials: "MS",
  },
  {
    name: "Junaid Kazi",
    role: "Paid search & performance marketing",
    bio: "Junaid brings extensive experience managing and optimising paid-search campaigns, including work for Thomas Cook and high-value international B2B campaigns.",
    linkedin: "https://www.linkedin.com/in/junaid-kazi-b205b0222/",
    initials: "JK",
    image: "/images/profileImage.jpeg",
  },
  {
    name: "Noumaan Khatib",
    role: "Search, technology & conversion",
    bio: "Noumaan brings more than ten years' experience across development, SEO, and landing-page optimisation, connecting campaigns with the technical infrastructure needed to turn searches into enquiries.",
    linkedin: "https://www.linkedin.com/in/nouman-khatib-495830100/",
    initials: "NK",
    image: "/images/nouman-profile.jpeg",
  },
];

export const homepageCopy = {
  hero: {
    label: "B2B Customer Acquisition",
    headline: "Your next customer is already searching.",
    subheading:
      "The question is whether they find you — or your competitor.",
    body: [
      "If you sell a specialist, technical or high-value B2B product, you rarely need more leads. You need the right leads — at the moment buyers are actively looking.",
      "We help you reach them, convert them, and measure what actually drives revenue.",
    ],
  },
  volumeProblem: {
    headline:
      "When one customer can change your year, volume metrics stop being useful.",
    paragraphs: [
      "Most agencies optimise for traffic, impressions and lead count. That works when every sale looks the same. It breaks down when you sell enterprise technology, specialist equipment or complex engineering solutions.",
      "In high-value B2B, a handful of the right enquiries can outperform thousands of the wrong ones. The hard part is knowing where genuine demand exists — and getting in front of it before your competitors do.",
      "We map buying intent in your market, build campaigns around it, and connect the path from search to enquiry to closed business.",
    ],
  },
  intent: {
    headline: "We start with demand, not ad spend.",
    paragraphs: [
      "When someone searches for a product or a problem, they are telling you what they need. That signal — search intent — is where we begin.",
      "We analyse how your buyers search, where the strongest commercial opportunities sit, and how competitors are positioned. Then we build campaigns around what the data shows — sharper targeting, not bigger budgets.",
    ],
  },
  process: {
    headline: "A clear path from search to sale",
    closing:
      "We track performance against commercial outcomes — qualified opportunities and, wherever your sales data allows, closed revenue. What works gets more investment. What doesn't, gets cut.",
    steps: [
      {
        number: "01",
        title: "Find",
        description:
          "We identify where your buyers search, which queries signal real purchase intent, and where competitors have left gaps you can own.",
      },
      {
        number: "02",
        title: "Reach",
        description:
          "Precision paid-search campaigns put your business in front of the right audience at the moment they are looking — not a broad audience hoping someone converts.",
      },
      {
        number: "03",
        title: "Convert",
        description:
          "Purpose-built landing pages match the search that brought someone in, answer what they care about, and make the next step obvious.",
      },
      {
        number: "04",
        title: "Measure & improve",
        description:
          "We report on what matters: enquiry quality, pipeline contribution and revenue impact — not vanity metrics that look good in a dashboard but don't pay salaries.",
      },
    ],
  },
  spotlight: {
    headline: "Results that show up in your pipeline, not just your analytics.",
    subheading: "Success is closed business — not green arrows on a chart.",
    story:
      "Server Factory, a UK enterprise IT infrastructure provider, needed to reach organisations actively buying high-value hardware. We mapped high-intent product searches, launched tightly segmented Google Ads campaigns, and built landing pages aligned to each query. The result: qualified enquiries that converted into substantial sales — not just website traffic.",
    period: "3-month campaign",
    disclaimer:
      "Media spend excludes strategy, campaign management, creative and landing-page development.",
    ctaLabel: "Read the Server Factory case study",
    pdfUrl: "/case-studies/scaling-b2b-lead-generation-serverfactory.pdf",
  },
  fit: {
    headline: "Built for businesses where every customer matters.",
    intro: "Our approach works best when:",
    criteria: [
      "a single customer represents significant revenue for your business",
      "buyers actively search for your products, services or the problems you solve",
      "your offer is specialist, technical or requires explanation before purchase",
      "lead quality matters more than lead quantity",
      "sales typically follow a conversation, not an instant checkout",
      "you need to know whether marketing is generating revenue, not just activity",
    ],
    closing:
      "We work with companies in enterprise technology, specialist manufacturing, infrastructure, engineering and B2B equipment — anywhere the commercial stakes justify precision over volume.",
  },
  simpleQuestions: {
    headline: "You shouldn't need a PPC glossary to understand your marketing.",
    subheading: "You should be able to ask straightforward questions:",
    questions: [
      "Where are our buyers searching?",
      "What are they looking for — and what is it costing to reach them?",
      "Are the enquiries commercially credible?",
      "Which campaigns are actually producing sales?",
      "Where should we invest more — and where should we stop?",
    ],
    closing:
      "Those are the questions we answer. The platform complexity, tracking and optimisation sit with us.",
  },
  team: {
    headline: "Three disciplines. One commercial objective.",
    subheading:
      "Winning in search requires more than campaign management — it requires strategy, execution and the technology to connect both.",
    intro: "Our team covers:",
    closing:
      "Commercial insight, paid search and conversion infrastructure — aligned to one goal: turning existing demand into new business.",
  },
  cta: {
    headline: "Before you increase spend, let's see what's already there.",
    subheading:
      "If you sell something valuable and believe more buyers are searching than you're currently reaching, that's the right place to start.",
    body: [
      "We'll review your market, assess what you're doing today, and give you an honest view on whether there's a commercial opportunity worth pursuing.",
      "No packaged pitch. No pressure to buy services you don't need.",
      "Just a direct conversation about whether we can help you win more of the demand that already exists.",
    ],
  },
};

export const serverFactoryStats = [
  { value: 15, prefix: "$", suffix: "k", label: "Media spend", sub: "3 month campaign" },
  { value: 100, suffix: "+", label: "Qualified leads", sub: "High-intent enquiries" },
  { value: 4.7, prefix: "$", suffix: "m", label: "Quoted", sub: "Pipeline value", decimals: 1 },
  { value: 1.2, prefix: "$", suffix: "m", label: "Sales", sub: "Closed revenue", decimals: 1 },
];

export const serverFactoryHighlights = [
  { value: 80, prefix: "$", suffix: "", label: "in sales for every $1 of advertising spend", highlight: true },
  { value: 150, prefix: "$", suffix: "", label: "or less per qualified lead", highlight: false },
];

export interface Profile {
  id: "michael" | "junaid" | "nouman";
  name: string;
  title: string;
  focus: string;
  image?: string;
  imageAlt: string;
  bio: string[];
  credentials: { value: string; label: string }[];
  skills: string[];
  experience: { role: string; company: string; period: string }[];
  resumeUrl?: string;
  externalUrl?: string;
  externalLabel?: string;
  statFloat: { value: string; label: string };
  availability: string;
}

export const heroHighlights = [
  "$1.2m in closed sales",
  "100+ qualified leads",
  "$80 return per $1 ad spend",
];

export const metrics = [
  { value: "$15k", label: "Media investment", animate: false },
  { value: "100+", label: "Qualified enquiries", animate: true },
  { value: "$4.7m", label: "Pipeline quoted", animate: false },
  { value: "$1.2m", label: "Revenue closed", animate: false },
];

export const pillars = [
  {
    num: "01",
    label: "Find",
    description:
      "Pinpoint where buyers search, which queries signal real intent, and where competitors have left commercial gaps.",
  },
  {
    num: "02",
    label: "Reach",
    description:
      "Run precision paid-search campaigns that place you in front of the right audience at the point of need.",
  },
  {
    num: "03",
    label: "Convert",
    description:
      "Build landing experiences that match search intent and give serious buyers a clear reason to get in touch.",
  },
];

export const problemCards = [
  {
    num: "01",
    title: "The volume trap",
    description:
      "Most marketing is judged on traffic and lead count. Useful for high-volume models — misleading when each sale is worth serious money.",
    accent: false,
  },
  {
    num: "02",
    title: "High-stakes B2B",
    description:
      "Enterprise technology, specialist equipment and engineering solutions don't scale on generic demand generation. Precision wins.",
    accent: false,
  },
  {
    num: "03",
    title: "Intent over volume",
    description:
      "A small number of well-qualified enquiries can transform a quarter. We find where that intent already exists — and help you capture it.",
    accent: true,
  },
];

export const problemFlowSteps = [
  "Search",
  "Intent",
  "Enquiry",
  "Opportunity",
  "Revenue",
];

export const philosophyJourneyStages = [
  "Search",
  "Intent",
  "Campaign",
  "Click",
  "Enquiry",
  "Opportunity",
  "Sale",
  "Revenue",
];

export const services = [
  {
    num: "01",
    title: "High customer value",
    description:
      "Each new customer represents meaningful revenue — so acquisition cost and lead quality both matter.",
  },
  {
    num: "02",
    title: "Active search demand",
    description:
      "Your buyers are already searching for products, services or solutions you can provide.",
  },
  {
    num: "03",
    title: "Complex propositions",
    description:
      "What you sell is specialist or technical, and needs the right message for the right audience.",
  },
  {
    num: "04",
    title: "Quality over quantity",
    description:
      "Your sales team would rather have ten credible enquiries than a hundred that go nowhere.",
  },
  {
    num: "05",
    title: "Consultative sales",
    description:
      "A conversation — not a checkout — is how deals get done in your business.",
  },
  {
    num: "06",
    title: "Revenue accountability",
    description:
      "You need marketing measured against pipeline and sales, not platform metrics alone.",
  },
  {
    num: "07",
    title: "Enterprise & infrastructure",
    description:
      "Technology, systems and infrastructure businesses with long sales cycles and high deal values.",
  },
  {
    num: "08",
    title: "Specialist manufacturing",
    description:
      "Engineering, industrial equipment and other B2B markets where expertise drives purchase decisions.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Find",
    description:
      "Map where buyers search, which terms indicate purchase intent, and where competitors are vulnerable.",
  },
  {
    number: "02",
    title: "Reach",
    description:
      "Launch tightly segmented paid-search campaigns that reach the right people at the right moment.",
  },
  {
    number: "03",
    title: "Convert",
    description:
      "Deploy landing pages built around specific searches — clear messaging, credible proof, a frictionless enquiry path.",
  },
  {
    number: "04",
    title: "Measure & improve",
    description:
      "Report on enquiry quality, pipeline and revenue. Scale what converts. Cut what doesn't.",
  },
];

export const comparisonSteps = {
  traditional: ["Impressions", "Clicks", "Form fills"],
  attribution: [
    "Qualified enquiries",
    "Sales conversations",
    "Pipeline value",
    "Closed revenue",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    company: "Server Factory",
    category: "B2B Lead Generation",
    period: "3 month campaign",
    spend: "$15k media spend",
    summary:
      "A UK enterprise IT infrastructure provider needed to reach organisations actively purchasing high-value hardware. We mapped product-level search intent, launched segmented Google Ads campaigns, and built landing pages matched to each query — delivering qualified enquiries that converted into seven-figure pipeline and closed sales.",
    highlight: { value: 1.2, prefix: "$", suffix: "m", label: "Revenue closed", decimals: 1 },
    stats: [
      { value: 100, suffix: "+", label: "Qualified enquiries", sub: "Commercially credible leads" },
      { value: 4.7, prefix: "$", suffix: "m", label: "Pipeline quoted", sub: "Opportunities created", decimals: 1 },
      { value: 80, prefix: "$", suffix: "", label: "Revenue per ad dollar", sub: "Return on media spend" },
      { value: 150, prefix: "$", suffix: "", label: "Cost per lead", sub: "Qualified, or below" },
    ],
    bars: [
      { label: "Qualified leads", before: 20, after: 100, unit: "+" },
      { label: "Pipeline quoted ($m)", before: 0.5, after: 4.7, prefix: "$" },
      { label: "Closed sales ($m)", before: 0.1, after: 1.2, prefix: "$" },
    ],
    pdfUrl: "/case-studies/scaling-b2b-lead-generation-serverfactory.pdf",
  },
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
    title: "Why lead volume is the wrong metric for high-value B2B",
    category: "Strategy",
    readTime: "5 min",
  },
  {
    title: "How to identify search intent worth paying for",
    category: "Paid Search",
    readTime: "6 min",
  },
  {
    title: "What a qualified enquiry actually looks like",
    category: "Lead Quality",
    readTime: "4 min",
  },
  {
    title: "Connecting ad spend to pipeline — not just platform ROAS",
    category: "Measurement",
    readTime: "7 min",
  },
  {
    title: "When to invest more in search — and when to stop",
    category: "Commercial",
    readTime: "5 min",
  },
  {
    title: "Landing pages that convert specialist B2B buyers",
    category: "Conversion",
    readTime: "6 min",
  },
];

export const profiles: Record<"michael" | "junaid" | "nouman", Profile> = {
  michael: {
    id: "michael",
    name: "Michael Simkin",
    title: "Commercial Strategy & Positioning",
    focus: "Strategy & Research",
    imageAlt: "Michael Simkin - Commercial Strategy",
    bio: [
      "Michael helps B2B businesses define where their commercial opportunities lie, understand what buyers actually value, and translate complex propositions into clear, compelling messaging.",
    ],
    credentials: [
      { value: "Strategy", label: "Commercial positioning" },
      { value: "Research", label: "Customer insight" },
      { value: "Messaging", label: "Complex propositions" },
    ],
    skills: [
      "Commercial Strategy",
      "Positioning",
      "Customer Research",
      "Messaging",
      "B2B Propositions",
    ],
    experience: [
      {
        role: "Commercial strategy, positioning & customer research",
        company: "Attribution First",
        period: "Present",
      },
    ],
    externalUrl: "https://www.linkedin.com/in/michael-simkin-gladhat",
    externalLabel: "LinkedIn",
    statFloat: { value: "Strategy", label: "Commercial & positioning" },
    availability: "UK & international B2B",
  },
  junaid: {
    id: "junaid",
    name: "Junaid Kazi",
    title: "Paid Search & Performance Marketing",
    focus: "Paid Search",
    image: "/images/profileImage.jpeg",
    imageAlt: "Junaid Kazi - Paid Search & Performance Marketing",
    bio: [
      "Junaid designs and manages paid-search programmes for high-value B2B markets — including enterprise campaigns for Thomas Cook and international lead generation across the UK, US and UAE.",
    ],
    credentials: [
      { value: "Thomas Cook", label: "Enterprise campaigns" },
      { value: "B2B", label: "High-value markets" },
      { value: "Google Ads", label: "Paid search" },
    ],
    skills: [
      "Google Ads",
      "Paid Search",
      "B2B Campaigns",
      "Landing Pages",
      "Conversion Tracking",
      "International Markets",
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
    externalUrl: "https://www.linkedin.com/in/junaid-kazi-b205b0222/",
    externalLabel: "LinkedIn",
    statFloat: { value: "B2B", label: "Paid search specialist" },
    availability: "India, UK & UAE · B2B",
  },
  nouman: {
    id: "nouman",
    name: "Noumaan Khatib",
    title: "Search, Technology & Conversion",
    focus: "Technology & SEO",
    image: "/images/nouman-profile.jpeg",
    imageAlt: "Noumaan Khatib - Search, Technology & Conversion",
    bio: [
      "Noumaan builds the search and conversion infrastructure behind effective campaigns — landing pages, technical SEO and performance engineering that turns traffic into credible enquiries.",
    ],
    credentials: [
      { value: "10+ Years", label: "Experience" },
      { value: "SEO", label: "Search & technical" },
      { value: "Next.js", label: "Landing pages" },
    ],
    skills: [
      "Next.js",
      "Technical SEO",
      "Landing Pages",
      "Core Web Vitals",
      "Conversion Optimisation",
      "Search Infrastructure",
    ],
    experience: [
      {
        role: "Senior Full Stack Developer",
        company: "Reliance Jio",
        period: "Nov 2016 – Present",
      },
    ],
    resumeUrl: "/resume/Nouman_Khatib_Resume.pdf",
    externalUrl: "https://www.linkedin.com/in/nouman-khatib-495830100/",
    externalLabel: "LinkedIn",
    statFloat: { value: "10+ Yrs", label: "Search & conversion" },
    availability: "Landing pages · SEO · CRO",
  },
};

/** @deprecated use profiles.junaid */
export const founder = profiles.junaid;
