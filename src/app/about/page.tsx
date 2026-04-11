import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Award, Briefcase, GraduationCap, MapPin, Zap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Junaid Ahmed Kazi — a performance marketing expert with 5+ years of experience in Google Ads, Meta Ads, and data-driven campaign management.",
  alternates: { canonical: `${siteConfig.siteUrl}/about` },
  openGraph: { url: `${siteConfig.siteUrl}/about` },
};

const experience = [
  {
    role: "Assistant Manager - Digital",
    company: "Thomas Cook India",
    period: "Oct 2024 - Present",
    location: "Lower Parel, Mumbai",
    accent: { dot: "bg-emerald-400", ring: "border-emerald-400/30", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", glow: "shadow-emerald-500/20", line: "from-emerald-400/60" },
    current: true,
    highlights: [
      "Developed and implemented digital strategies across multiple platforms",
      "Engineered cross-platform App Campaigns for iOS and Android with Firebase Analytics integration",
      "Boosted local branch calls by 25% via targeted Google My Business campaigns",
      "Expert in Post-Click Optimization, bridging Google Ads and Webflow landing pages",
      "Achieved 2x revenue uplift through Looker Studio data analysis and keyword optimization",
    ],
  },
  {
    role: "PPC Lead",
    company: "Crimson Interactive",
    period: "Jan 2024 - Oct 2024",
    location: "Goregaon, Mumbai",
    accent: { dot: "bg-violet-400", ring: "border-violet-400/30", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", glow: "shadow-violet-500/20", line: "from-violet-400/40" },
    current: false,
    highlights: [
      "Developed comprehensive PPC strategies aligned with business goals",
      "Designed and executed A/B tests for ad creatives, targeting, and landing pages",
      "Set up comprehensive conversion tracking for purchases and form submissions",
      "Optimized Google, Bing, and Yahoo Ad campaigns",
      "Achieved 35% ROI increase through strategic keyword targeting",
    ],
  },
  {
    role: "SEM Analyst",
    company: "ReachLocal India Pvt. Ltd",
    period: "Dec 2021 - Aug 2023",
    location: "Goregaon, Mumbai",
    accent: { dot: "bg-blue-400", ring: "border-blue-400/30", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", glow: "shadow-blue-500/20", line: "from-blue-400/30" },
    current: false,
    highlights: [
      "Optimized Google Ads campaigns including sitelinks, callouts, and snippets",
      "Managed keyword-level and device-level bids with daily budget adjustments",
      "Built high-converting landing pages using Webflow",
      "Generated performance reports and presented findings to stakeholders",
      "Achieved maximum ROI through data analysis in paid search campaigns",
    ],
  },
  {
    role: "Freelance Digital Marketing",
    company: "Self-employed",
    period: "Mar 2020 - Apr 2021",
    location: "Mumbai",
    accent: { dot: "bg-amber-400", ring: "border-amber-400/30", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", glow: "shadow-amber-500/20", line: "from-amber-400/20" },
    current: false,
    highlights: [
      "Content writing and blog creation for multiple companies",
      "Designed social media posts, website graphics, and marketing materials",
      "Mastered Canva and Vistacreate for visual content creation",
      "Wrote marketing and promotional materials for diverse products and services",
    ],
  },
];

const certifications = [
  { name: "Google Ads Search Certification", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { name: "Google Analytics 4 Certification (Udemy)", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { name: "Microsoft Ads Certified Professional", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { name: "Advanced Google Ads (LinkedIn)", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { name: "Meta Social Media Marketing Professional (Coursera)", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { name: "Advanced Tracking & Measurement Program (Measure Marketer)", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Digital Marketing Course (Freelancer Academy)", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
];

const skillCategories = [
  { label: "Paid Ads", color: "border-violet-500/30 hover:border-violet-400/60 hover:bg-violet-500/5", items: ["Google Ads", "Meta Ads", "Bing Ads", "Yahoo Ads"] },
  { label: "Analytics", color: "border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-500/5", items: ["GA4", "GTM", "SEMrush", "Firebase"] },
  { label: "Strategy", color: "border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-500/5", items: ["PPC", "SEM", "CRO", "A/B Testing", "Paid Ads Strategy", "Paid Ads Funnel"] },
  { label: "CRM & Tools", color: "border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-500/5", items: ["Salesforce CRM", "Oracle CRM", "Google My Business Ads", "App Install Campaigns", "Canva"] },
  { label: "Optimization", color: "border-rose-500/30 hover:border-rose-400/60 hover:bg-rose-500/5", items: ["Post-Click Optimization", "Conversion Rate Optimization"] },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person-junaid`,
    name: "Junaid Ahmed Kazi",
    jobTitle: "Performance Marketing Expert",
    url: `${siteConfig.siteUrl}/about`,
    image: `${siteConfig.siteUrl}/images/profileImage.jpeg`,
    description: "Digital marketing professional with over 5 years of experience in data-driven marketing strategy and campaign execution. Expert in Google Ads and Meta Ads.",
    worksFor: { "@type": "Organization", name: "Thomas Cook India" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Savitribai Phule Pune University" },
    knowsAbout: ["Google Ads", "Meta Ads", "Performance Marketing", "Marketing Attribution", "PPC Management", "GA4", "Google Tag Manager", "CRO"],
    sameAs: [siteConfig.linkedin],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "About" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} suppressHydrationWarning />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl relative bg-bg-card">
                <Image
                  src="/images/profileImage.jpeg"
                  alt="Junaid Ahmed Kazi - Performance Marketing Expert"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Junaid Ahmed Kazi
              </h1>
              <p className="text-accent text-lg font-medium mb-4">
                Performance Marketing Expert
              </p>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                Digital marketing professional with over 5 years of
                experience in data-driven marketing strategy and campaign
                execution. Expert in Google Ads and Meta Ads with key
                achievements including a 35% increase in Google Search campaigns
                ROI and a 40% reduction in ad spend while maintaining lead
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase bg-accent/10 border border-accent/20 text-accent">
              <Briefcase className="w-3.5 h-3.5" />
              Career Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-linear-to-b from-accent/40 via-white/8 to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative flex gap-5 md:gap-8 animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "backwards" }}
                >
                  {/* Timeline node */}
                  <div className="relative flex flex-col items-center shrink-0 z-10">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${exp.accent.dot} flex items-center justify-center shadow-lg ${exp.accent.glow} border-2 ${exp.accent.ring}`}>
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 -mt-1 group">
                    <div className={`bg-bg-card rounded-2xl border border-white/8 hover:border-white/15 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${exp.accent.glow}`}>
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-accent font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 text-sm shrink-0">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium text-xs ${exp.accent.badge}`}>
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-text-tertiary text-xs">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed"
                          >
                            <span className={`w-1.5 h-1.5 ${exp.accent.dot} rounded-full shrink-0 mt-2`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase bg-accent/10 border border-accent/20 text-accent">
              <Award className="w-3.5 h-3.5" />
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              Certifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="group bg-bg rounded-xl border border-white/8 hover:border-white/15 p-5 flex items-center gap-4 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${cert.color}`}>
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-primary text-sm font-medium leading-snug">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase bg-accent/10 border border-accent/20 text-accent">
              <Zap className="w-3.5 h-3.5" />
              Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              Skills & Tools
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="bg-bg-card rounded-2xl border border-white/8 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-4">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`text-text-primary text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 bg-bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase bg-accent/10 border border-accent/20 text-accent">
              <GraduationCap className="w-3.5 h-3.5" />
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              Education
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group bg-bg rounded-2xl border border-white/8 hover:border-violet-500/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-lg">
                Bachelor of Engineering
              </h3>
              <p className="text-accent text-sm font-semibold">
                Savitribai Phule Pune University
              </p>
              <p className="text-text-tertiary text-sm mt-2 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                2014 – 2018 · Pune, India
              </p>
            </div>
            <div className="group bg-bg rounded-2xl border border-white/8 hover:border-blue-500/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-lg">
                Diploma in Engineering
              </h3>
              <p className="text-accent text-sm font-semibold">MSBTE</p>
              <p className="text-text-tertiary text-sm mt-2 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                2011 – 2014 · Pune, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bg-card border-b border-white/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Ready to take your digital marketing to the next level? Let&apos;s
            talk strategy.
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
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
