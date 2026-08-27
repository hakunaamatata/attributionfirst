"use client";

import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import { pillars } from "@/data/siteData";

export default function ValuePillars() {
  return (
    <section className="relative bg-charcoal pb-24 md:pb-32">
      <div className="divider-glow mx-auto max-w-3xl" />
      <div className="container-wide px-5 pt-16 md:px-8 md:pt-20 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.num} delay={i * 0.12}>
              <TiltCard className="h-full p-8 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-bold text-white/[0.06]">
                    {pillar.num}
                  </span>
                  <span className="rounded-full border border-accent/20 bg-accent-muted px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-white">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted">
                  {pillar.description}
                </p>
                <div className="mt-8 h-px w-12 bg-gradient-to-r from-accent/60 to-transparent" />
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
