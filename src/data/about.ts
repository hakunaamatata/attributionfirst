/** Path to resume PDF in public folder */
export const resumePdfUrl = "/resume/Myresume_JunaidahmedKazi.pdf";

/** Second resume (collaborator) */
export const resumePdfUrlNoumanKhatib = "/resume/Nouman_Khatib_Resume.pdf";

export type AchievementCardColor =
  | "emerald"
  | "violet"
  | "blue"
  | "cyan"
  | "amber"
  | "rose";

export type ProfileAchievementCard = {
  metric: string;
  label: string;
  desc: string;
  color: AchievementCardColor;
};

export type ProfileExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
};

export type AboutProfile = {
  id: "junaid" | "nouman";
  name: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  statFloat: { label: string; value: string; valueClass: string };
  bio: [string, string];
  highlights: { label: string; value: string; color: string; borderColor: string }[];
  skills: string[];
  experience: ProfileExperience[];
  achievementCards: ProfileAchievementCard[];
  resumeUrl: string;
  /** second column: image on the right when true (desktop) */
  reverseLayout?: boolean;
};

export const junaidExperience: ProfileExperience[] = [
  {
    role: "Assistant Manager - Digital",
    company: "Thomas Cook India",
    period: "Oct 2024 – Present",
    location: "Lower Parel, Mumbai",
    summary:
      "Digital strategies and campaigns across multiple platforms; post-click optimization (Google Ads + Webflow); cross-platform App Campaigns (iOS/Android) with Firebase; 25% boost in local branch calls via GMB ads.",
  },
  {
    role: "PPC Lead",
    company: "Crimson Interactive",
    period: "Jan 2024 – Oct 2024",
    location: "Goregaon, Mumbai",
    summary:
      "PPC strategy, audience and keyword research, A/B testing, tracking setup; optimization across Google, Bing, and Yahoo; increased qualified traffic and leads.",
  },
  {
    role: "SEM Analyst",
    company: "ReachLocal India Pvt. Ltd",
    period: "Dec 2021 – Aug 2023",
    location: "Mumbai",
    summary:
      "Google Ads optimization, bid and budget management, ad copy and landing pages; Webflow landing pages; reporting and stakeholder presentations.",
  },
  {
    role: "Freelance Digital Marketing",
    company: "Self-employed",
    period: "Mar 2020 – Apr 2021",
    location: "—",
    summary:
      "Content and blog writing, social media posts, website graphics, marketing materials; Canva and Vista Create.",
  },
];

/** @deprecated use junaidProfile.experience */
export const experience = junaidExperience;

export const achievements = [
  "Increased Google Search campaigns ROI by 35% through strategic keyword targeting and bid optimization.",
  "Grew travel campaign revenue by 2x using Looker Studio analysis: paused non-revenue keywords and reallocated budget.",
  "Achieved 40% reduction in ad spend while maintaining lead quality through data analysis.",
  "Boosted brand visibility and digital engagement by 40% through cross-functional initiatives.",
  "Increased qualified website traffic by 40% in six months with data-driven campaigns.",
  "Optimized keyword strategy using Looker Studio and historical data to boost revenue 2x.",
  "Reduced Android app cost per install to ₹10 via Firebase–Google Ads integration and event-based optimization.",
];

const junaidAchievementCards: ProfileAchievementCard[] = [
  { metric: "35%", label: "ROI Increase", desc: "Google Search campaigns via strategic keyword targeting", color: "emerald" },
  { metric: "2x", label: "Revenue Growth", desc: "Travel campaigns via Looker Studio data analysis", color: "violet" },
  { metric: "40%", label: "Cost Reduction", desc: "Ad spend reduced while maintaining lead quality", color: "blue" },
  { metric: "40%", label: "Traffic Growth", desc: "Qualified website traffic in six months", color: "cyan" },
  { metric: "₹10", label: "App CPI", desc: "Android cost-per-install via Firebase integration", color: "amber" },
  { metric: "2x", label: "Revenue Scale", desc: "Keyword strategy optimization with historical data", color: "rose" },
];

export const noumanExperience: ProfileExperience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Reliance Jio (Reliance Industries Limited)",
    period: "Nov 2016 – Present",
    location: "India — Remote",
    summary:
      "Identity & Access Management (IDAM): centralized platform for JioTV, JioSaavn, Hotstar; authentication APIs at 100M+ daily requests with 99.9% uptime; LDAP, OTP, multi-channel federation; JAAM failover for agent auth.",
  },
  {
    role: "JioID — Universal Identity Platform",
    company: "Reliance Jio",
    period: "2019 – Present",
    location: "India — Remote",
    summary:
      "Led backend for universal SSO: sign-up, login, account management across Jio products for 100M+ users; Node.js + Cassandra REST APIs with sub-100ms latency at peak load; 360° identity view with social logins and multi-device SSO.",
  },
  {
    role: "UIFP — Unified Identity & Fingerprinting",
    company: "Reliance Jio",
    period: "2021 – Present",
    location: "India — Remote",
    summary:
      "Architected Global Unique ID across RIL subsidiaries; cross-domain user identification; data analysis and correction for 500M+ user records with zero data loss.",
  },
  {
    role: "Data Migration & Reconciliation",
    company: "Reliance Jio",
    period: "Ongoing",
    location: "India — Remote",
    summary:
      "End-to-end migration across identity platforms: 2B+ records processed and validated with zero data loss.",
  },
];

const noumanAchievementCards: ProfileAchievementCard[] = [
  { metric: "100M+", label: "Daily Auth Requests", desc: "Engineered authentication APIs at enterprise scale", color: "violet" },
  { metric: "500M+", label: "Users Served", desc: "Identity and analytics at telecom scale", color: "blue" },
  { metric: "2B+", label: "Records Migrated", desc: "Zero-downtime migrations with full validation", color: "emerald" },
  { metric: "99.9%", label: "Uptime", desc: "Mission-critical production systems", color: "cyan" },
  { metric: "<100ms", label: "API Latency", desc: "Node.js + Cassandra at peak load", color: "amber" },
  { metric: "8+", label: "Years", desc: "Node.js, TypeScript, IDAM & data engineering", color: "rose" },
];

export const junaidProfile: AboutProfile = {
  id: "junaid",
  name: "Junaid Ahmed Kazi",
  heading: "Hi, I'm Junaid Ahmed Kazi",
  imageSrc: "/images/profileImage.jpeg",
  imageAlt: "Junaid Ahmed Kazi - Performance Marketing Expert",
  statFloat: {
    label: "Ad Spend Managed",
    value: "₹7Cr+",
    valueClass: "text-blue-600 dark:text-blue-400",
  },
  bio: [
    "Digital marketing professional with over 5 years of experience in data-driven marketing strategy and campaign execution. Expert in Google Ads and Meta Ads with a track record of delivering 35% ROI increases and 40% ad spend reductions while maintaining lead quality.",
    "Currently serving as Assistant Manager - Digital at Thomas Cook India, where I develop cross-platform campaigns, optimize user acquisition through Firebase Analytics integration, and manage performance across Google, Meta, and App install campaigns.",
  ],
  highlights: [
    { label: "Experience", value: "5+ Years", color: "text-violet-600 dark:text-violet-400", borderColor: "border-t-violet-500/50" },
    { label: "Current Role", value: "Thomas Cook India", color: "text-blue-600 dark:text-blue-400", borderColor: "border-t-blue-500/50" },
    { label: "Expertise", value: "Google & Meta Ads", color: "text-emerald-600 dark:text-emerald-400", borderColor: "border-t-emerald-500/50" },
  ],
  skills: [
    "Google Ads", "Meta Ads", "Bing Ads", "GA4", "GTM",
    "PPC", "SEM", "CRO", "A/B Testing", "Webflow",
    "Firebase", "Salesforce CRM",
  ],
  experience: junaidExperience,
  achievementCards: junaidAchievementCards,
  resumeUrl: resumePdfUrl,
};

export const noumanProfile: AboutProfile = {
  id: "nouman",
  name: "Nouman Khatib",
  heading: "Hi, I'm Nouman Khatib",
  imageSrc: "/images/nouman-profile.jpeg",
  imageAlt: "Nouman Khatib - Senior Full Stack Developer",
  statFloat: {
    label: "Daily Auth Requests",
    value: "100M+",
    valueClass: "text-violet-600 dark:text-violet-400",
  },
  bio: [
    "Senior Full Stack Developer with 8+ years building highly scalable distributed backends — 100M+ daily requests, 500M+ users — with deep expertise in Node.js, TypeScript, microservices, enterprise Identity & Access Management (IDAM), data engineering, and DevOps.",
    "At Reliance Jio, I lead zero-downtime migrations of 2B+ records, sustain 99.9% uptime on mission-critical systems, and translate complex technical challenges into pragmatic, high-impact solutions across one of the world's largest telecom ecosystems.",
  ],
  highlights: [
    { label: "Experience", value: "8+ Years", color: "text-violet-600 dark:text-violet-400", borderColor: "border-t-violet-500/50" },
    { label: "Current Role", value: "Reliance Jio", color: "text-blue-600 dark:text-blue-400", borderColor: "border-t-blue-500/50" },
    { label: "Expertise", value: "Node.js & IDAM", color: "text-emerald-600 dark:text-emerald-400", borderColor: "border-t-emerald-500/50" },
  ],
  skills: [
    "Node.js", "TypeScript", "React", "Next.js", "Express", "GraphQL",
    "Cassandra", "PostgreSQL", "Redis", "Azure", "Kubernetes",
    "OAuth", "SAML", "LDAP", "Docker", "Prometheus",
  ],
  experience: noumanExperience,
  achievementCards: noumanAchievementCards,
  resumeUrl: resumePdfUrlNoumanKhatib,
  reverseLayout: true,
};
