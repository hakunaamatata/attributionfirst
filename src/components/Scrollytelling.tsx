"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const chapters = [
  {
    id: "beyond-click",
    step: "01",
    title: "Looking beyond the click",
    body: "Most attribution stops at the conversion. We follow the journey further — connecting every touchpoint to commercial outcomes.",
    nodes: ["Click", "Lead", "Opportunity", "Revenue"],
  },
  {
    id: "signals",
    step: "02",
    title: "Connecting the signals",
    body: "Marketing activity, website behaviour, CRM data and revenue outcomes become one connected system — not four disconnected reports.",
    nodes: ["Google Ads", "Website", "CRM", "Revenue"],
  },
  {
    id: "revenue",
    step: "03",
    title: "Understanding what drives revenue",
    body: "Identify which channels, campaigns and actions actually create commercial growth. Invest where it counts.",
    nodes: ["Channel", "Campaign", "Pipeline", "Growth"],
  },
];

function FlowViz({ nodes, isActive }: { nodes: string[]; isActive: boolean }) {
  return (
    <div className="attribution-window relative mt-8 overflow-hidden rounded-xl border border-border">
      <div className="attribution-surface-glow absolute inset-0" />
      <div className="relative z-[1] flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-[9px] tracking-[0.18em] text-muted-dim uppercase">
          Attribution model
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent attribution-live-dot" />
          <span className="text-[9px] font-medium text-accent">Live</span>
        </div>
      </div>

      <div className="relative z-[1] overflow-x-auto px-3 py-6 md:overflow-visible md:px-6 md:py-8">
        <div className="flex min-w-max items-center justify-center gap-1 md:min-w-0 md:w-full md:gap-2">
        {nodes.map((node, i) => {
          const isLast = i === nodes.length - 1;

          return (
            <div key={node} className="flex shrink-0 items-center">
              <div
                className={`relative rounded-lg border px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-500 md:px-4 md:text-sm ${
                  isLast
                    ? isActive
                      ? "attribution-revenue-node border-accent/60 bg-charcoal-elevated text-accent"
                      : "border-border bg-charcoal-elevated/80 text-accent/70"
                    : isActive
                      ? "attribution-node-surface border text-white"
                      : "border-border bg-charcoal-light/80 text-white/70"
                }`}
              >
                {isLast && isActive && (
                  <span className="attribution-revenue-halo" aria-hidden />
                )}
                <span className="relative">{node}</span>
              </div>
              {i < nodes.length - 1 && (
                <div
                  className={`mx-1 h-px w-6 transition-all duration-500 md:mx-1.5 md:w-10 ${
                    isActive
                      ? "bg-gradient-to-r from-accent/50 to-accent/15"
                      : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

function getCenteredScrollLeft(track: HTMLElement, card: HTMLElement) {
  const cardCenter = card.offsetLeft + card.offsetWidth / 2;
  const target = cardCenter - track.clientWidth / 2;
  const maxScroll = track.scrollWidth - track.clientWidth;
  return Math.max(0, Math.min(target, maxScroll));
}

function ThinkCard({
  chapter,
  index,
  isActive,
}: {
  chapter: (typeof chapters)[number];
  index: number;
  isActive: boolean;
}) {
  return (
    <article
      data-index={index}
      className="how-we-think-card relative w-[min(88vw,680px)] shrink-0 snap-center md:w-[min(72vw,720px)]"
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl border p-6 transition-[transform,opacity,border-color,background-color,box-shadow] duration-500 ease-out md:p-8 ${
          isActive
            ? "how-we-think-card-active border-border-hover bg-charcoal-elevated/90 shadow-[0_24px_64px_rgba(0,0,0,0.45)]"
            : "scale-[0.97] border-border bg-charcoal-light/60 opacity-55"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--lime) 8%, transparent) 0%, transparent 55%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <span
            className={`font-display text-4xl font-semibold tracking-tight transition-colors duration-500 md:text-5xl ${
              isActive ? "text-accent/30" : "text-white/[0.06]"
            }`}
          >
            {chapter.step}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1 text-[10px] tracking-[0.14em] text-muted-dim uppercase">
            {chapter.nodes.length} touchpoints
          </span>
        </div>

        <h3 className="relative mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.75rem]">
          {chapter.title}
        </h3>
        <p className="relative mt-4 max-w-lg text-[15px] leading-[1.75] text-muted md:text-base">
          {chapter.body}
        </p>

        <FlowViz nodes={chapter.nodes} isActive={isActive} />
      </div>
    </article>
  );
}

export default function Scrollytelling() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = Math.max(1, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);
    progress.set(scrollLeft / maxScroll);

    const center = scrollLeft + clientWidth / 2;
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    const cards = track.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    }

    if (closest !== activeIndexRef.current) {
      activeIndexRef.current = closest;
      setActiveIndex(closest);
    }
  }, [progress]);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;

    activeIndexRef.current = index;
    setActiveIndex(index);

    track.scrollTo({
      left: getCenteredScrollLeft(track, card),
      behavior,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateScrollState();
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      updateScrollState();
      scrollToIndex(activeIndexRef.current, "auto");
    };
    window.addEventListener("resize", onResize);

    requestAnimationFrame(() => {
      updateScrollState();
      scrollToIndex(0, "auto");
    });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateScrollState, scrollToIndex]);

  return (
    <section
      id="approach-scroll"
      className="relative overflow-hidden border-t border-border py-20 md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-80" />

      <div className="container-wide relative px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-label">How we think</p>
            <h2 className="headline mt-5 max-w-lg">
              Attribution that follows the full journey — not just the click.
            </h2>
          </div>

          <div className="flex items-center gap-3 md:mb-1">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={!canScrollLeft}
              aria-label="Previous insight"
              className="how-we-think-nav-btn"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(chapters.length - 1, activeIndex + 1))}
              disabled={!canScrollRight}
              aria-label="Next insight"
              className="how-we-think-nav-btn"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-14">
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r from-charcoal to-transparent md:w-20" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l from-charcoal to-transparent md:w-20" />

          <div
            ref={trackRef}
            className="how-we-think-track flex gap-5 overflow-x-auto pb-2 md:gap-6"
          >
            {chapters.map((chapter, i) => (
              <ThinkCard
                key={chapter.id}
                chapter={chapter}
                index={i}
                isActive={activeIndex === i}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${chapter.title}`}
                aria-current={activeIndex === i ? "true" : undefined}
                className="group flex flex-col items-start gap-2"
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeIndex === i
                      ? "w-10 bg-accent"
                      : "w-6 bg-border group-hover:w-8 group-hover:bg-border-hover"
                  }`}
                />
                <span
                  className={`text-[10px] tracking-[0.12em] uppercase transition-colors ${
                    activeIndex === i ? "text-accent" : "text-muted-dim"
                  }`}
                >
                  {chapter.step}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px min-w-16 flex-1 overflow-hidden rounded-full bg-border sm:max-w-32">
              <motion.div className="h-full bg-accent" style={{ width: progressWidth }} />
            </div>
            <p className="text-sm text-muted transition-opacity duration-300">
              <span className="font-medium text-white">{chapters[activeIndex].title}</span>
              <span className="mx-2 text-muted-dim">·</span>
              <span className="text-muted-dim">
                {activeIndex + 1} / {chapters.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
