"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    id: "beyond-click",
    title: "Look beyond the click",
    description:
      "We follow the full customer journey — not just conversions, to understand true impact.",
  },
  {
    id: "signals",
    title: "Connect the signals",
    description:
      "Marketing activity, website behavior, CRM data and revenue — unified.",
  },
  {
    id: "revenue",
    title: "Find what drives revenue",
    description:
      "Identify the channels, campaigns and touchpoints that create qualified pipeline and sales.",
  },
  {
    id: "decisions",
    title: "Make confident decisions",
    description:
      "Clear insights you can act on to scale what works and stop what doesn't.",
  },
];

function ApproachIcon({ id }: { id: string }) {
  const stroke = "currentColor";
  const common = {
    className: "h-5 w-5 text-accent",
    fill: "none",
    stroke,
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "beyond-click":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <circle cx="10" cy="10" r="6.5" />
          <circle cx="10" cy="10" r="2.2" />
          <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2" />
        </svg>
      );
    case "signals":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <circle cx="5" cy="5" r="2" />
          <circle cx="15" cy="5" r="2" />
          <circle cx="10" cy="15" r="2" />
          <path d="M6.6 6.4 8.8 13.2M13.4 6.4 11.2 13.2M7 5h6" />
        </svg>
      );
    case "revenue":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <path d="M4 15V9.5M8 15V6.5M12 15V10.5M16 15V5" />
        </svg>
      );
    case "decisions":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <path d="M4 14 9 9l2.5 2.5L16 6" />
          <path d="M11.5 6H16v4.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function OurApproach() {
  return (
    <section id="approach" className="relative border-t border-white/[0.06] bg-charcoal py-20 md:py-24 lg:py-28">
      <div className="container-wide px-5 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-14 xl:gap-20">
          <FadeIn>
            <p className="section-label">Our Approach</p>
            <h2 className="mt-6 max-w-md font-display text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-white">
              Attribution that shows you what&apos;s working, and what&apos;s wasting budget.
            </h2>
          </FadeIn>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.id} delay={0.06 + i * 0.07}>
                <div className="group h-full">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-charcoal-elevated/80 transition-colors duration-300 group-hover:border-accent/30">
                    <ApproachIcon id={pillar.id} />
                  </div>
                  <h3 className="text-[15px] font-semibold leading-snug text-white md:text-base">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.65] text-muted-dim">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
