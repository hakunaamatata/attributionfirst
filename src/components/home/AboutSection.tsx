"use client";

import {
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Briefcase, Award, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { junaidProfile, noumanProfile, type AboutProfile } from "@/data/about";

const ABOUT_TABS = [
  {
    id: "junaid" as const,
    label: "Junaid Ahmed Kazi",
    shortLabel: "Junaid",
    profile: junaidProfile,
  },
  {
    id: "nouman" as const,
    label: "Nouman Khatib",
    shortLabel: "Nouman",
    profile: noumanProfile,
  },
];

const expThemes = [
  { dot: "bg-violet-500", ring: "ring-violet-500/25", metricColor: "text-violet-600 dark:text-violet-400" },
  { dot: "bg-blue-500", ring: "ring-blue-500/25", metricColor: "text-blue-600 dark:text-blue-400" },
  { dot: "bg-emerald-500", ring: "ring-emerald-500/25", metricColor: "text-emerald-600 dark:text-emerald-400" },
  { dot: "bg-amber-500", ring: "ring-amber-500/25", metricColor: "text-amber-600 dark:text-amber-400" },
];

const colorMap = {
  emerald: {
    metricText: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/8",
    border: "border-emerald-500/25",
    dot: "bg-emerald-500",
  },
  violet: {
    metricText: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-500/8",
    border: "border-violet-500/25",
    dot: "bg-violet-500",
  },
  blue: {
    metricText: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/8",
    border: "border-blue-500/25",
    dot: "bg-blue-500",
  },
  cyan: {
    metricText: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/8",
    border: "border-cyan-500/25",
    dot: "bg-cyan-500",
  },
  amber: {
    metricText: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 dark:bg-amber-500/8",
    border: "border-amber-500/25",
    dot: "bg-amber-500",
  },
  rose: {
    metricText: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 dark:bg-rose-500/8",
    border: "border-rose-500/25",
    dot: "bg-rose-500",
  },
};

/** Highlights numbers and metrics in experience summaries */
function HighlightedText({ text, colorClass }: { text: string; colorClass: string }) {
  const metricPattern =
    /(<\d+ms|₹[\d,]+[KkLlCc]*\+?|\d+(?:\.\d+)?[KMBkmb]?\+?|\d+(?:\.\d+)?[%x×]?(?:\+)?)/g;
  const parts = text.split(metricPattern);
  const isMetric = (part: string) =>
    /^(<\d+ms|₹[\d,]+[KkLlCc]*\+?|\d+(?:\.\d+)?[KMBkmb]?\+?|\d+(?:\.\d+)?[%x×]\+?)$/.test(part);
  return (
    <span>
      {parts.map((part, i) =>
        isMetric(part) ? (
          <span key={i} className={`font-bold ${colorClass}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

function AboutSegmentedTabs({
  activeTab,
  onTabChange,
  onKeyDown,
}: {
  activeTab: "junaid" | "nouman";
  onTabChange: (id: "junaid" | "nouman") => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}) {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Partial<Record<"junaid" | "nouman", HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const syncIndicator = useCallback(() => {
    const list = listRef.current;
    const btn = btnRefs.current[activeTab];
    if (!list || !btn) return;
    const lr = list.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setIndicator({ left: br.left - lr.left, width: br.width });
  }, [activeTab]);

  useLayoutEffect(() => {
    syncIndicator();
  }, [syncIndicator]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const ro = new ResizeObserver(() => syncIndicator());
    ro.observe(list);
    window.addEventListener("resize", syncIndicator);
    document.fonts?.ready?.then(syncIndicator);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncIndicator);
    };
  }, [syncIndicator]);

  const springTransition = reduceMotion
    ? { duration: 0.15, ease: "easeOut" as const }
    : { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.72 };

  return (
    <div className="flex w-full justify-center">
      <div
        ref={listRef}
        role="tablist"
        aria-label="Choose profile"
        className="relative isolate flex w-full max-w-[min(100%,26rem)] items-stretch sm:max-w-[min(100%,32rem)] rounded-full border border-black/6 bg-linear-to-b from-slate-200/90 to-slate-300/50 p-1 shadow-[inset_0_2px_6px_rgba(15,23,42,0.08),0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:from-white/7 dark:to-white/2 dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.45),0_8px_32px_rgba(0,0,0,0.35)]"
        onKeyDown={onKeyDown}
      >
        {/* Sliding pill — brand gradient thumb */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-1 z-0 rounded-full bg-linear-to-br from-violet-600 via-blue-600 to-cyan-500 shadow-[0_4px_22px_-4px_rgba(59,130,246,0.55),0_2px_10px_-2px_rgba(124,58,237,0.35)] ring-1 ring-white/25 dark:from-violet-500 dark:via-blue-600 dark:to-cyan-400 dark:shadow-[0_6px_28px_-4px_rgba(59,130,246,0.45)]"
          initial={false}
          animate={{
            left: indicator.width > 0 ? indicator.left : 0,
            width: indicator.width,
            opacity: indicator.width > 0 ? 1 : 0,
          }}
          transition={springTransition}
        />
        {ABOUT_TABS.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              ref={(el) => {
                btnRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`about-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="about-tab-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              whileHover={reduceMotion ? undefined : { scale: selected ? 1 : 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 520, damping: 38 }}
              className={[
                "relative z-10 flex min-h-[52px] min-w-0 flex-1 cursor-pointer items-center justify-center rounded-full px-3 py-3 text-center sm:px-6",
                "outline-none transition-colors duration-300 ease-out",
                "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                selected
                  ? "text-white drop-shadow-sm"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100",
              ].join(" ")}
            >
              <span className="text-sm font-semibold tracking-tight sm:text-[0.9375rem]">
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ProfileBlock({
  profile,
  imagePriority,
  forcePhotoLeft,
}: {
  profile: AboutProfile;
  /** When set, overrides default (Junaid-only) image priority */
  imagePriority?: boolean;
  /** In tab mode both profiles use photo left for a consistent grid */
  forcePhotoLeft?: boolean;
}) {
  const { id, heading, imageSrc, imageAlt, statFloat, bio, highlights, skills, experience, achievementCards, resumeUrl, reverseLayout } =
    profile;
  const layoutReverse = forcePhotoLeft ? false : reverseLayout;
  const isSvg = imageSrc.endsWith(".svg");
  const detailsGroup = id === "junaid" ? "group/about-junaid" : "group/about-nouman";
  const openRotate =
    id === "junaid" ? "group-open/about-junaid:rotate-180" : "group-open/about-nouman:rotate-180";

  const photo = (
    <div className="flex justify-center lg:justify-start">
      <div className="about-photo-wrap relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[500px] mx-auto lg:mx-0">
        <div className="about-photo-inner aspect-square w-full rounded-2xl overflow-hidden relative bg-bg-card">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-[center_top]"
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
            priority={imagePriority ?? id === "junaid"}
            unoptimized={isSvg}
          />
        </div>
        <div
          className={`about-stat-card-float absolute -bottom-3 ${layoutReverse ? "-left-3" : "-right-3"} rounded-xl border border-blue-500/25 bg-bg-card/90 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:border-blue-400/20`}
        >
          <p className="text-xs leading-snug text-text-secondary">{statFloat.label}</p>
          <p className={`text-base font-bold leading-tight md:text-lg ${statFloat.valueClass}`}>{statFloat.value}</p>
        </div>
      </div>
    </div>
  );

  const content = (
    <div className="max-w-xl">
      <h2 className="about-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
        {heading}
      </h2>
      {id === "junaid" ? (
        <>
          <p className="about-bio text-base md:text-lg mb-3 text-text-secondary" style={{ lineHeight: 1.8 }}>
            Digital marketing professional with over 5 years of experience in data-driven marketing strategy and campaign
            execution. Expert in Google Ads and Meta Ads with a track record of delivering{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">35% ROI increases</span> and{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">40% ad spend reductions</span> while
            maintaining lead quality.
          </p>
          <p className="about-bio text-base mb-8 text-text-secondary" style={{ lineHeight: 1.8 }}>
            Currently serving as Assistant Manager - Digital at{" "}
            <span className="font-semibold text-primary">Thomas Cook India</span>, where I develop cross-platform
            campaigns, optimize user acquisition through Firebase Analytics integration, and manage performance across
            Google, Meta, and App install campaigns.
          </p>
        </>
      ) : (
        <>
          <p className="about-bio text-base md:text-lg mb-3 text-text-secondary" style={{ lineHeight: 1.8 }}>
            {bio[0]}
          </p>
          <p className="about-bio text-base mb-8 text-text-secondary" style={{ lineHeight: 1.8 }}>
            {bio[1]}
          </p>
        </>
      )}

      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
        {highlights.map((h) => (
          <div
            key={h.label}
            className={`about-stat-card bg-surface rounded-xl text-center border-t-2 ${h.borderColor}`}
            style={{
              padding: "20px 16px",
              minHeight: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className={`font-bold text-sm md:text-base leading-tight ${h.color}`}>{h.value}</p>
            <p className="text-text-tertiary text-xs mt-1 leading-snug">{h.label}</p>
          </div>
        ))}
      </div>

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

      <details className={`${detailsGroup} rounded-2xl border border-white/6 bg-bg-card/50 backdrop-blur-sm overflow-hidden`}>
        <summary className="flex items-center justify-between gap-2 cursor-pointer list-none px-5 py-4 text-accent font-semibold hover:bg-accent/5 transition-colors [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2">
            <ChevronDown className={`w-4 h-4 transition-transform ${openRotate}`} />
            Experience & Achievements
          </span>
        </summary>

        <div className="border-t border-white/6">
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
                  <div key={`${id}-${exp.company}-${exp.period}-${exp.role}`} className="relative flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ${theme.dot} ring-4 ${theme.ring} shrink-0 mt-1.5`} />
                      {i < experience.length - 1 && <div className="w-px flex-1 bg-white/6 mt-1" />}
                    </div>
                    <div className="pb-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-bold text-primary text-sm">{exp.role}</p>
                        {isFirst && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <span className={`inline-flex items-center text-xs font-semibold ${theme.metricColor}`}>{exp.company}</span>
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
                    key={`${id}-ach-${i}`}
                    className={`group relative rounded-2xl p-4 ${c.bg} border ${c.border} hover:border-opacity-40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
                  >
                    <p className={`text-2xl sm:text-3xl font-extrabold ${c.metricText} leading-none mb-1 tracking-tight`}>{card.metric}</p>
                    <p className="text-primary text-xs font-semibold mb-1.5">{card.label}</p>
                    <p className="text-text-tertiary text-[11px] leading-snug">{card.desc}</p>
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

          <div className="px-5 pb-5 pt-1">
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              <FileText className="h-4 w-4 shrink-0" />
              Download resume — {profile.name} (PDF)
              <ArrowUpRight className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </details>
    </div>
  );

  if (layoutReverse) {
    return (
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {content}
        {photo}
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {photo}
      {content}
    </div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"junaid" | "nouman">("junaid");
  const reduceMotion = useReducedMotion();

  const onTabKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const i = ABOUT_TABS.findIndex((t) => t.id === activeTab);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveTab(ABOUT_TABS[(i + 1) % ABOUT_TABS.length].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActiveTab(ABOUT_TABS[(i - 1 + ABOUT_TABS.length) % ABOUT_TABS.length].id);
    }
  }, [activeTab]);

  const activeProfile = ABOUT_TABS.find((t) => t.id === activeTab)!.profile;

  const panelTransition = reduceMotion
    ? { duration: 0.12, ease: "easeOut" as const }
    : { duration: 0.34, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <section id="about" className="about-section py-16 md:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          <AboutSegmentedTabs activeTab={activeTab} onTabChange={setActiveTab} onKeyDown={onTabKeyDown} />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              role="tabpanel"
              id="about-tab-panel"
              aria-labelledby={`about-tab-${activeTab}`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={panelTransition}
            >
              <ProfileBlock profile={activeProfile} imagePriority forcePhotoLeft />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
