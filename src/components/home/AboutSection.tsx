import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Briefcase, Award, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { experience, achievements, resumePdfUrl } from "@/data/about";

const skills = [
  "Google Ads", "Meta Ads", "Bing Ads", "GA4", "GTM",
  "PPC", "SEM", "CRO", "A/B Testing", "Webflow",
  "Firebase", "Salesforce CRM",
];

const highlights = [
  { label: "Experience", value: "5+ Years", color: "text-violet-400", borderColor: "border-t-violet-500/40" },
  { label: "Current Role", value: "Thomas Cook India", color: "text-accent", borderColor: "border-t-accent/40" },
  { label: "Expertise", value: "Google & Meta Ads", color: "text-blue-400", borderColor: "border-t-blue-500/40" },
];

const expThemes = [
  { dot: "bg-emerald-400", ring: "ring-emerald-400/20", metricColor: "text-emerald-400" },
  { dot: "bg-violet-400", ring: "ring-violet-400/20", metricColor: "text-violet-400" },
  { dot: "bg-blue-400", ring: "ring-blue-400/20", metricColor: "text-blue-400" },
  { dot: "bg-amber-400", ring: "ring-amber-400/20", metricColor: "text-amber-400" },
];

/* ─── Achievement cards with pre-extracted metrics for bento layout ─── */
const achievementCards = [
  { metric: "35%", label: "ROI Increase", desc: "Google Search campaigns via strategic keyword targeting", color: "emerald" as const },
  { metric: "2x", label: "Revenue Growth", desc: "Travel campaigns via Looker Studio data analysis", color: "violet" as const },
  { metric: "40%", label: "Cost Reduction", desc: "Ad spend reduced while maintaining lead quality", color: "blue" as const },
  { metric: "40%", label: "Traffic Growth", desc: "Qualified website traffic in six months", color: "cyan" as const },
  { metric: "₹10", label: "App CPI", desc: "Android cost-per-install via Firebase integration", color: "amber" as const },
  { metric: "2x", label: "Revenue Scale", desc: "Keyword strategy optimization with historical data", color: "rose" as const },
];

const colorMap = {
  emerald: { metricText: "text-emerald-400", bg: "bg-emerald-500/8", border: "border-emerald-500/20", dot: "bg-emerald-400" },
  violet: { metricText: "text-violet-400", bg: "bg-violet-500/8", border: "border-violet-500/20", dot: "bg-violet-400" },
  blue: { metricText: "text-blue-400", bg: "bg-blue-500/8", border: "border-blue-500/20", dot: "bg-blue-400" },
  cyan: { metricText: "text-cyan-400", bg: "bg-cyan-500/8", border: "border-cyan-500/20", dot: "bg-cyan-400" },
  amber: { metricText: "text-amber-400", bg: "bg-amber-500/8", border: "border-amber-500/20", dot: "bg-amber-400" },
  rose: { metricText: "text-rose-400", bg: "bg-rose-500/8", border: "border-rose-500/20", dot: "bg-rose-400" },
};

function HighlightedText({ text, colorClass }: { text: string; colorClass: string }) {
  const parts = text.split(/(₹[\d,]+[KkLlCc]*\+?|\d+(?:\.\d+)?[%x×]?(?:\+)?)/g);
  return (
    <span>
      {parts.map((part, i) =>
        /^(₹[\d,]+[KkLlCc]*\+?|\d+(?:\.\d+)?[%x×]\+?)$/.test(part) ? (
          <span key={i} className={`font-bold ${colorClass}`}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="about-section py-16 md:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Photo Column ── */}
          <div className="flex justify-center lg:justify-start">
            <div className="about-photo-wrap relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[500px] mx-auto lg:mx-0">
              <div className="about-photo-inner aspect-square w-full rounded-2xl overflow-hidden relative bg-bg-card">
                <Image
                  src="/images/profileImage.jpeg"
                  alt="Junaid Ahmed Kazi - Performance Marketing Expert"
                  fill
                  className="object-cover object-[center_top]"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
                  priority
                />
              </div>
              <div className="about-stat-card-float absolute -bottom-3 -right-3 bg-bg-card/90 rounded-xl p-3 backdrop-blur-sm border border-[rgba(139,92,246,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <p className="text-xs text-text-secondary leading-snug">Ad Spend Managed</p>
                <p className="text-base md:text-lg font-bold text-accent leading-tight">₹7Cr+</p>
              </div>
            </div>
          </div>

          {/* ── Content Column ── */}
          <div className="max-w-xl">
            <h2 className="about-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
              Hi, I&apos;m Junaid Ahmed Kazi
            </h2>
            <p className="about-bio text-base md:text-lg mb-3 text-text-secondary" style={{ lineHeight: 1.8 }}>
              Digital marketing professional with over 5 years of experience
              in data-driven marketing strategy and campaign execution. Expert
              in Google Ads and Meta Ads with a track record of delivering{" "}
              <span className="font-semibold text-emerald-400">35% ROI increases</span> and{" "}
              <span className="font-semibold text-violet-400">40% ad spend reductions</span>{" "}
              while maintaining lead quality.
            </p>
            <p className="about-bio text-base mb-8 text-text-secondary" style={{ lineHeight: 1.8 }}>
              Currently serving as Assistant Manager - Digital at{" "}
              <span className="font-semibold text-primary">Thomas Cook India</span>,
              where I develop cross-platform campaigns, optimize user
              acquisition through Firebase Analytics integration, and manage
              performance across Google, Meta, and App install campaigns.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className={`about-stat-card bg-surface rounded-xl text-center border-t-2 ${h.borderColor}`}
                  style={{ padding: "20px 16px", minHeight: "80px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                >
                  <p className={`font-bold text-sm md:text-base leading-tight ${h.color}`}>{h.value}</p>
                  <p className="text-text-tertiary text-xs mt-1 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="about-skill-tags flex flex-wrap gap-2 mb-6">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`about-skill-tag about-skill-tag-${(i % 5) + 1} text-xs font-medium px-3 py-1.5 rounded-full border leading-snug`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience & Achievements expandable */}
            <details className="group/about-details rounded-2xl border border-white/6 bg-bg-card/50 backdrop-blur-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-2 cursor-pointer list-none px-5 py-4 text-accent font-semibold hover:bg-accent/5 transition-colors [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 transition-transform group-open/about-details:rotate-180" />
                  Experience & Achievements
                </span>
              </summary>

              <div className="border-t border-white/6">
                {/* ── Experience Timeline ── */}
                <div className="px-5 pt-5 pb-6">
                  <h3 className="flex items-center gap-2 text-primary font-bold text-sm mb-5">
                    <Briefcase className="w-4 h-4 text-accent" />
                    Experience
                  </h3>

                  <div className="space-y-5">
                    {experience.map((exp, i) => {
                      const theme = expThemes[i % expThemes.length];
                      const isFirst = i === 0;
                      return (
                        <div key={`${exp.company}-${exp.period}`} className="relative flex gap-4">
                          <div className="flex flex-col items-center shrink-0">
                            <div className={`w-3 h-3 rounded-full ${theme.dot} ring-4 ${theme.ring} shrink-0 mt-1.5`} />
                            {i < experience.length - 1 && (
                              <div className="w-px flex-1 bg-white/6 mt-1" />
                            )}
                          </div>
                          <div className="pb-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <p className="font-bold text-primary text-sm">{exp.role}</p>
                              {isFirst && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                              <span className={`inline-flex items-center text-xs font-semibold ${theme.metricColor}`}>
                                {exp.company}
                              </span>
                              <span className="text-text-muted text-xs">{exp.period}</span>
                              {exp.location !== "—" && (
                                <span className="flex items-center gap-1 text-text-muted text-xs">
                                  <MapPin className="w-3 h-3" />
                                  {exp.location}
                                </span>
                              )}
                            </div>
                            <p className="text-text-secondary text-xs leading-relaxed">
                              <HighlightedText text={exp.summary} colorClass={theme.metricColor} />
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Key Achievements — Bento Grid ── */}
                <div className="px-5 pb-5">
                  <h3 className="flex items-center gap-2 text-primary font-bold text-sm mb-5">
                    <Award className="w-4 h-4 text-accent" />
                    Key Achievements
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {achievementCards.map((card, i) => {
                      const c = colorMap[card.color];
                      return (
                        <div
                          key={i}
                          className={`group relative rounded-2xl p-4 ${c.bg} border ${c.border} hover:border-opacity-40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
                        >
                          {/* Large metric number */}
                          <p className={`text-2xl sm:text-3xl font-extrabold ${c.metricText} leading-none mb-1 tracking-tight`}>
                            {card.metric}
                          </p>

                          {/* Label */}
                          <p className="text-primary text-xs font-semibold mb-1.5">
                            {card.label}
                          </p>

                          {/* Description */}
                          <p className="text-text-tertiary text-[11px] leading-snug">
                            {card.desc}
                          </p>

                          {/* Corner glow on hover */}
                          <div
                            className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                            style={{ background: `var(--tw-gradient-from, ${c.dot})` }}
                            aria-hidden="true"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Resume download */}
                <div className="px-5 pb-5 pt-1">
                  <Link
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors group"
                  >
                    <FileText className="w-4 h-4" />
                    Download resume (PDF)
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
