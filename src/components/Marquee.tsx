"use client";

import { marqueeServices } from "@/data/siteData";

function MarqueeRow({
  items,
  direction = "left",
  className = "",
}: {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`marquee-row overflow-hidden ${className}`}>
      <div
        className={`marquee-track flex w-max items-center gap-8 md:gap-10 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((service, i) => (
          <span key={`${service}-${i}`} className="marquee-item flex shrink-0 items-center gap-8 md:gap-10">
            <span className="text-[15px] font-medium tracking-[-0.01em] text-white/85 md:text-base">
              {service}
            </span>
            <span className="marquee-separator" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const midpoint = Math.ceil(marqueeServices.length / 2);
  const rowOne = marqueeServices.slice(0, midpoint);
  const rowTwo = marqueeServices.slice(midpoint);

  return (
    <section
      className="relative border-y border-white/[0.06] bg-charcoal-light/60"
      aria-label="Services we offer"
    >
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--lime)_3%,transparent)_0%,transparent_40%,color-mix(in_srgb,var(--bg-primary)_15%,transparent)_100%)]" />

      <div className="container-wide relative flex flex-col gap-0 md:flex-row md:items-stretch">
        <div className="flex shrink-0 items-center border-b border-white/[0.06] px-5 py-5 md:w-[200px] md:border-r md:border-b-0 md:px-8 md:py-7 lg:w-[220px]">
          <div>
            <p className="section-label">Services</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-dim">
              End-to-end revenue attribution
            </p>
          </div>
        </div>

        <div className="marquee-panel relative flex min-w-0 flex-1 flex-col justify-center gap-3 py-5 md:gap-3.5 md:py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-charcoal-light to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-charcoal-light to-transparent md:w-20" />

          <MarqueeRow items={rowOne} direction="left" />
          <MarqueeRow items={rowTwo} direction="right" className="opacity-55" />
        </div>
      </div>
    </section>
  );
}
