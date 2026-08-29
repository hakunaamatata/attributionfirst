"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy } from "@/data/siteData";

const ease = [0.16, 1, 0.3, 1] as const;
const AUTO_ADVANCE_MS = 5500;
const MANUAL_PAUSE_MS = 10000;

const stepMeta = [
  {
    id: "find",
    tag: "Discover demand",
    outcome: "High-intent keywords & competitor gaps identified",
  },
  {
    id: "reach",
    tag: "Capture attention",
    outcome: "Right audience reached at the moment of search",
  },
  {
    id: "convert",
    tag: "Turn interest into action",
    outcome: "Landing pages aligned to search intent",
  },
  {
    id: "measure",
    tag: "Prove commercial impact",
    outcome: "Pipeline and revenue — not vanity metrics",
  },
];

function StepIcon({ id }: { id: string }) {
  const props = {
    className: "h-5 w-5 text-accent",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "find":
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.5 13.5 17 17" />
        </svg>
      );
    case "reach":
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <circle cx="10" cy="10" r="2.2" />
          <circle cx="10" cy="10" r="6.5" />
          <path d="M10 3.5v1.2M10 15.3v1.2M3.5 10h1.2M15.3 10h1.2" />
        </svg>
      );
    case "convert":
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <rect x="4" y="3.5" width="12" height="13" rx="1.5" />
          <path d="M7 8h6M7 11h4" />
        </svg>
      );
    case "measure":
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <path d="M4 15V9M8 15V6.5M12 15V11M16 15V4.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Process() {
  const { process } = homepageCopy;
  const steps = process.steps;
  const sectionRef = useRef<HTMLElement>(null);
  const stepTrackRef = useRef<HTMLDivElement>(null);
  const stepButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const manualPauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const isInView = useInView(sectionRef, { amount: 0.3, margin: "-80px" });
  const isPaused = isHovered || manualPaused;

  const goTo = useCallback(
    (index: number, manual = false) => {
      setActive(Math.max(0, Math.min(steps.length - 1, index)));

      if (manual) {
        setManualPaused(true);
        if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
        manualPauseTimeout.current = setTimeout(() => setManualPaused(false), MANUAL_PAUSE_MS);
      }
    },
    [steps.length]
  );

  useEffect(() => {
    return () => {
      if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [isInView, isPaused, active, steps.length]);

  useEffect(() => {
    const button = stepButtonRefs.current[active];
    const track = stepTrackRef.current;
    if (!button || !track) return;

    const trackRect = track.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const offset =
      buttonRect.left -
      trackRect.left -
      trackRect.width / 2 +
      buttonRect.width / 2;

    isProgrammaticScroll.current = true;
    track.scrollTo({
      left: track.scrollLeft + offset,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 350);
  }, [active]);

  useEffect(() => {
    const track = stepTrackRef.current;
    if (!track) return;

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        stepButtonRefs.current.forEach((button, index) => {
          if (!button) return;
          const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
          const distance = Math.abs(trackCenter - buttonCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActive((prev) => {
          if (prev === closestIndex) return prev;
          setManualPaused(true);
          if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
          manualPauseTimeout.current = setTimeout(() => setManualPaused(false), MANUAL_PAUSE_MS);
          return closestIndex;
        });
      }, 80);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const track = stepTrackRef.current;
    if (!track) return;

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (!delta) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (maxScrollLeft <= 0) return;

      const scrollingForward = delta > 0;
      const atStart = track.scrollLeft <= 0;
      const atEnd = track.scrollLeft >= maxScrollLeft - 1;

      if ((scrollingForward && atEnd) || (!scrollingForward && atStart)) {
        return;
      }

      event.preventDefault();
      setManualPaused(true);
      if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
      manualPauseTimeout.current = setTimeout(() => setManualPaused(false), MANUAL_PAUSE_MS);
      track.scrollLeft += delta;
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding relative overflow-hidden border-t border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node)) {
          setIsHovered(false);
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-70" />

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>How It Works</SectionLabel>
            <FadeIn delay={0.08}>
              <h2 className="headline mt-5 max-w-lg">{process.headline}</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.14}>
            <p className="max-w-md text-sm leading-[1.75] text-muted lg:ml-auto">
              Four connected stages — from the search that starts the journey to the revenue
              outcome that proves it worked.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 md:mt-16">
          <div className="relative -mx-5 lg:mx-0 lg:hidden">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r from-charcoal to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-charcoal to-transparent" />

            <div
              ref={stepTrackRef}
              className="process-step-track flex gap-3 overflow-x-auto pb-2"
              role="tablist"
              aria-label="Process steps"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {steps.map((step, i) => {
                const meta = stepMeta[i];
                const isActive = active === i;
                const isComplete = i < active;

                return (
                  <button
                    key={step.number}
                    ref={(node) => {
                      stepButtonRefs.current[i] = node;
                    }}
                    type="button"
                    role="tab"
                    onClick={() => goTo(i, true)}
                    aria-selected={isActive}
                    aria-current={isActive ? "step" : undefined}
                    className={`process-step-btn relative shrink-0 snap-center overflow-hidden rounded-xl border px-4 py-3 text-left transition-all duration-500 ${
                      isActive
                        ? "border-border-active bg-charcoal-elevated/90 shadow-[0_0_24px_var(--accent-glow-soft)]"
                        : isComplete
                          ? "border-border-hover bg-charcoal-light/80"
                          : "border-border bg-charcoal-light/50"
                    }`}
                  >
                    {isActive && isInView && !isPaused && (
                      <motion.span
                        key={`step-progress-${active}`}
                        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isActive ? "border-border-active bg-charcoal-light" : "border-border"
                        }`}
                      >
                        <StepIcon id={meta.id} />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`text-[10px] tracking-[0.14em] uppercase transition-colors ${
                            isActive ? "text-accent" : "text-muted-dim"
                          }`}
                        >
                          {step.number}
                        </span>
                        <p
                          className={`font-display text-sm font-semibold whitespace-nowrap transition-colors ${
                            isActive ? "text-white" : "text-white/75"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-6 right-0 left-0 h-px bg-border" />
            <motion.div
              className="absolute top-6 left-0 h-px origin-left bg-accent"
              animate={{
                width: `${(active / Math.max(1, steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.55, ease }}
            />

            <div className="relative grid grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const meta = stepMeta[i];
                const isActive = active === i;
                const isComplete = i < active;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => goTo(i, true)}
                    aria-current={isActive ? "step" : undefined}
                    className="group flex flex-col items-start text-left"
                  >
                    <div
                      className={`relative z-[1] mb-4 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-border-active bg-charcoal-elevated shadow-[0_0_24px_var(--accent-glow-soft)]"
                          : isComplete
                            ? "border-border-hover bg-charcoal-elevated"
                            : "border-border bg-charcoal-light group-hover:border-border-hover"
                      }`}
                    >
                      <StepIcon id={meta.id} />
                      {isActive && (
                        <span className="absolute -inset-1 rounded-full border border-border-active opacity-60" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] tracking-[0.16em] uppercase transition-colors ${
                        isActive ? "text-accent" : "text-muted-dim"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`mt-1 font-display text-lg font-semibold transition-colors ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
              className="process-detail-panel relative overflow-hidden rounded-2xl border border-border bg-charcoal-elevated/80 p-6 md:p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 process-detail-glow" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-border bg-charcoal-light px-3 py-1 text-[10px] tracking-[0.14em] text-accent uppercase">
                      Step {steps[active].number}
                    </span>
                    <span className="text-xs text-muted-dim">{stepMeta[active].tag}</span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                    {steps[active].title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-[1.75] text-muted">
                    {steps[active].description}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-charcoal-light/80 p-5 lg:min-w-[240px]">
                  <p className="text-[10px] tracking-[0.14em] text-muted-dim uppercase">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                    {stepMeta[active].outcome}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent attribution-live-dot" />
                    <span className="text-[11px] text-accent">Active in your funnel</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={() => goTo(active - 1, true)}
                  disabled={active === 0}
                  className="how-we-think-nav-btn !h-10 !w-10 text-sm"
                  aria-label="Previous step"
                >
                  ←
                </button>

                <div className="flex flex-1 items-center justify-center gap-2">
                  {steps.map((step, i) => (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => goTo(i, true)}
                      aria-label={`Go to step ${step.number}: ${step.title}`}
                      className="relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
                      style={{ width: i === active ? "2rem" : "0.5rem" }}
                    >
                      <span
                        className={`absolute inset-0 rounded-full ${
                          i === active ? "bg-border" : "bg-border hover:bg-border-hover"
                        }`}
                      />
                      {i === active && !isPaused && isInView && (
                        <motion.span
                          key={`progress-${active}`}
                          className="absolute inset-y-0 left-0 rounded-full bg-accent"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        />
                      )}
                      {i === active && (isPaused || !isInView) && (
                        <span className="absolute inset-0 rounded-full bg-accent" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goTo(active + 1, true)}
                  disabled={active === steps.length - 1}
                  className="how-we-think-nav-btn !h-10 !w-10 text-sm"
                  aria-label="Next step"
                >
                  →
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 max-w-3xl text-sm leading-[1.75] text-muted md:mt-12">
            {process.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
