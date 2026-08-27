"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: "◎",
    title: "Looking beyond the click",
    description:
      "Most attribution stops at the conversion. We follow the journey further — from first touch to closed revenue.",
  },
  {
    icon: "⬡",
    title: "Connecting the signals",
    description:
      "Marketing activity, website behaviour, CRM data and revenue outcomes become one connected intelligence system.",
  },
  {
    icon: "◉",
    title: "Understanding what drives revenue",
    description:
      "Identify which channels, campaigns and actions actually create commercial growth — not just activity.",
  },
  {
    icon: "↗",
    title: "Measuring what matters",
    description:
      "Report on pipeline contribution and closed business. Scale what converts. Cut what doesn't.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="section-padding relative border-t border-white/[0.06]">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn>
            <p className="section-label">Our Approach</p>
            <h2 className="headline mt-6 max-w-lg">
              See the full picture. Attribution that goes beyond the click.
            </h2>
          </FadeIn>

          <div className="grid gap-10 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={0.08 + i * 0.06}>
                <div className="group">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-charcoal-elevated text-sm text-muted transition-colors group-hover:border-accent/25 group-hover:text-accent">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted-dim">
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
