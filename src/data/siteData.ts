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
  tagline: "Finding high-value B2B customers through search",
  email: "junaidkazi66@gmail.com",
  phone: "+91-9545087538",
  phoneTel: "tel:+919545087538",
  whatsapp:
    "https://wa.me/919545087538?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20finding%20new%20customers",
  linkedin: "https://www.linkedin.com/in/junaid-kazi-b205b0222",
  location: "Nerul, Mumbai - 400706",
  siteUrl: "https://www.attributionfirst.co.in",
  description:
    "We help high-value B2B businesses find the right customers at the right moment — when they are actively searching for what you sell. Intent-based paid search, landing pages, and measurement that ties to real revenue.",
  profileImage: "/images/profileImage.jpeg",
  resumeUrl: "/resume/Myresume_JunaidahmedKazi.pdf",
  noumanPortfolioUrl: "https://nouman-portfolio-ashen.vercel.app",
  primaryCta: "Talk to us about finding new customers",
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
    label: "High-value B2B marketing",
    headline: "Potential customers are looking for you.",
    subheading:
      "The question is whether they find you or your competitors.",
    body: [
      "If you sell a high-value, specialist or technical product, you don't necessarily need thousands of new leads.",
      "You need to find the right people at the right moment: when they are actively looking for what you sell.",
      "We help you find them.",
    ],
  },
  volumeProblem: {
    headline: "When one new customer is worth a lot, finding the right ones is vital.",
    paragraphs: [
      "Most digital marketing is built around volume. More traffic. More impressions. More clicks. More leads.",
      "But if you sell enterprise technology, specialist equipment, engineering solutions or another high-value B2B product, those numbers can be almost meaningless.",
      "You may only need a handful of new customers for a campaign to transform your year. The challenge is finding them.",
      "We identify where genuine buying intent already exists, put your business in front of those buyers, and build the path from search to enquiry to sale.",
    ],
  },
  intent: {
    headline: "Tapping the demand for what you sell",
    paragraphs: [
      "Someone searches Google for a product because they need it. Someone else searches for a problem because they need a solution. Those searches tell us something important: intent.",
      "We research how your prospective customers search, what they are looking for, where the strongest commercial opportunities lie and what your competitors are doing.",
      "Then we build campaigns around what we find. Not more advertising, but better-targeted advertising.",
    ],
  },
  process: {
    headline: "From search to sale",
    closing:
      "We want to know which campaigns are producing genuine opportunities and, wherever your sales data allows it, which are producing actual business. Then we put more effort into what works and less into what doesn't.",
    steps: [
      {
        number: "01",
        title: "Find",
        description:
          "Where are your prospective customers searching? What are they searching for? Which searches indicate genuine commercial intent? Where are competitors strong, and where have they left opportunities open? We start by finding the answers.",
      },
      {
        number: "02",
        title: "Reach",
        description:
          "Once we know where the demand is, we build tightly targeted paid-search campaigns designed to put you in front of the right people at the right moment.",
      },
      {
        number: "03",
        title: "Convert",
        description:
          "Getting the click is only half the job. We create dedicated landing pages that speak directly to what that customer is looking for and give them a clear reason to contact you.",
      },
      {
        number: "04",
        title: "Measure & improve",
        description:
          "And then we follow what happens. Not just impressions. Not just clicks. Not just form submissions.",
      },
    ],
  },
  spotlight: {
    headline: "What does success look like?",
    subheading: "It isn't a dashboard full of green arrows. It's sales.",
    story:
      "For Server Factory, a UK enterprise IT infrastructure company, the challenge was finding organisations actively looking for high-value enterprise hardware. We identified high-intent searches for specific products, built tightly targeted Google Ads campaigns and created dedicated landing pages around those searches. The campaigns didn't simply generate traffic. They generated real enquiries that became high-value sales.",
    period: "3 month campaign",
    disclaimer:
      "Media spend shown excludes strategy, campaign management, creative/landing-page work and other associated costs.",
    ctaLabel: "Read the Server Factory case study",
    pdfUrl: "/case-studies/scaling-b2b-lead-generation-serverfactory.pdf",
  },
  fit: {
    headline: "This approach isn't right for every business.",
    intro: "It works particularly well when:",
    criteria: [
      "an individual customer is worth a significant amount to your business",
      "people actively search online for your products, services or the problems you solve",
      "what you sell is specialist, technical or complex",
      "quality matters considerably more than lead volume",
      "a sales conversation usually happens after the initial enquiry",
      "you want to understand whether your advertising is producing revenue, not merely traffic",
    ],
    closing:
      "We work especially well with companies in enterprise technology, specialist manufacturing, infrastructure, engineering, B2B equipment and other high-value specialist markets.",
  },
  simpleQuestions: {
    headline: "You shouldn't need to become a PPC expert.",
    subheading: "You should be able to ask much simpler questions:",
    questions: [
      "Where are our customers?",
      "What are they looking for?",
      "How much does it cost to reach them?",
      "Are those enquiries any good?",
      "Are they turning into sales?",
    ],
    closing:
      "Those are the questions we care about too. The technical complexity sits with us.",
  },
  team: {
    headline: "Three disciplines. One commercial problem.",
    subheading:
      "Finding customers online requires more than knowing how to operate Google Ads.",
    intro:
      "Our team combines three key areas of expertise:",
    closing:
      "Three different disciplines, one objective: find the right customers and turn demand into business.",
  },
  cta: {
    headline: "Before you spend more, let's see what's already there.",
    subheading:
      "If you sell something valuable and suspect there are more customers searching for it than you're currently reaching, that's a useful place to start.",
    body: [
      "We'll look at your market, what you're currently doing and whether we can see an opportunity worth pursuing.",
      "No generic digital-marketing package. No obligation to buy ten different services.",
      "Just a commercial conversation about whether we think we can help you find more customers.",
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
  "$1.2m Sales",
  "100+ Qualified Leads",
  "$80 per $1 Ad Spend",
];

export const metrics = [
  { value: "$15k", label: "Media Spend", animate: false },
  { value: "100+", label: "Qualified Leads", animate: true },
  { value: "$4.7m", label: "Quoted Pipeline", animate: false },
  { value: "$1.2m", label: "Closed Sales", animate: false },
];

export const pillars = [
  {
    num: "01",
    label: "Find",
    description:
      "Where are your customers searching? What indicates genuine commercial intent? Where have competitors left opportunities open?",
  },
  {
    num: "02",
    label: "Reach",
    description:
      "Tightly targeted paid-search campaigns designed to put you in front of the right people at the right moment.",
  },
  {
    num: "03",
    label: "Convert",
    description:
      "Dedicated landing pages that speak directly to what each customer is looking for — and give them a clear reason to contact you.",
  },
];

export const problemCards = [
  {
    num: "01",
    title: "Volume Marketing",
    description:
      "Most digital marketing is built around volume. More traffic. More impressions. More clicks. More leads.",
    accent: false,
  },
  {
    num: "02",
    title: "High-Value B2B",
    description:
      "If you sell enterprise technology, specialist equipment or engineering solutions, those numbers can be almost meaningless.",
    accent: false,
  },
  {
    num: "03",
    title: "Finding the Right Ones",
    description:
      "You may only need a handful of new customers for a campaign to transform your year. We identify where genuine buying intent already exists.",
    accent: true,
  },
];

export const problemFlowSteps = [
  "Search",
  "Intent",
  "Enquiry",
  "Opportunity",
  "Sale",
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
      "An individual customer is worth a significant amount to your business.",
  },
  {
    num: "02",
    title: "Active search demand",
    description:
      "People actively search online for your products, services or the problems you solve.",
  },
  {
    num: "03",
    title: "Specialist products",
    description:
      "What you sell is specialist, technical or complex — and needs the right audience.",
  },
  {
    num: "04",
    title: "Quality over volume",
    description:
      "Quality matters considerably more than lead volume for your sales process.",
  },
  {
    num: "05",
    title: "Sales conversations",
    description:
      "A sales conversation usually happens after the initial enquiry, not at first click.",
  },
  {
    num: "06",
    title: "Revenue measurement",
    description:
      "You want to understand whether advertising is producing revenue, not merely traffic.",
  },
  {
    num: "07",
    title: "Enterprise technology",
    description:
      "We work especially well with enterprise technology and infrastructure companies.",
  },
  {
    num: "08",
    title: "Specialist manufacturing",
    description:
      "Engineering, B2B equipment and other high-value specialist markets.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Find",
    description:
      "Where are your prospective customers searching? What are they searching for? Which searches indicate genuine commercial intent? We start by finding the answers.",
  },
  {
    number: "02",
    title: "Reach",
    description:
      "Once we know where the demand is, we build tightly targeted paid-search campaigns designed to put you in front of the right people at the right moment.",
  },
  {
    number: "03",
    title: "Convert",
    description:
      "Getting the click is only half the job. We create dedicated landing pages that speak directly to what that customer is looking for.",
  },
  {
    number: "04",
    title: "Measure & improve",
    description:
      "We follow what happens — not just impressions, clicks or form submissions, but genuine opportunities and actual business.",
  },
];

export const comparisonSteps = {
  traditional: ["Impressions", "Clicks", "Leads"],
  attribution: [
    "Qualified Leads",
    "Opportunities",
    "Customers",
    "Sales",
    "Revenue",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    company: "Server Factory",
    category: "B2B Lead Generation",
    period: "3 month campaign",
    spend: "$15k media spend",
    summary:
      "For a UK enterprise IT infrastructure company, we identified high-intent searches for specific products, built tightly targeted Google Ads campaigns and created dedicated landing pages. The campaigns generated real enquiries that became high-value sales.",
    highlight: { value: 1.2, prefix: "$", suffix: "m", label: "Closed sales", decimals: 1 },
    stats: [
      { value: 100, suffix: "+", label: "Qualified leads", sub: "High-intent enquiries" },
      { value: 4.7, prefix: "$", suffix: "m", label: "Quoted", sub: "Pipeline value", decimals: 1 },
      { value: 80, prefix: "$", suffix: "", label: "Sales per ad $", sub: "Return on media spend" },
      { value: 150, prefix: "$", suffix: "", label: "Cost per lead", sub: "Or less, qualified" },
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
    title: "Where are our customers?",
    category: "Commercial Questions",
    readTime: "2 min",
  },
  {
    title: "What are they looking for?",
    category: "Search Intent",
    readTime: "3 min",
  },
  {
    title: "How much does it cost to reach them?",
    category: "Paid Search",
    readTime: "3 min",
  },
  {
    title: "Are those enquiries any good?",
    category: "Lead Quality",
    readTime: "4 min",
  },
  {
    title: "Are they turning into sales?",
    category: "Revenue",
    readTime: "4 min",
  },
  {
    title: "When one customer is worth a lot",
    category: "High-Value B2B",
    readTime: "5 min",
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
      "Michael works with businesses to understand where their commercial opportunities lie, what customers actually care about and how complex propositions can be communicated clearly.",
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
      "Junaid brings extensive experience managing and optimising paid-search campaigns, including work for Thomas Cook and high-value international B2B campaigns.",
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
      "Noumaan brings more than ten years' experience across development, SEO, and landing-page optimisation, connecting campaigns with the technical infrastructure needed to turn searches into enquiries.",
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
