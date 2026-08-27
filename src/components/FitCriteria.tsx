"use client";

import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import TiltCard from "./TiltCard";
import { homepageCopy } from "@/data/siteData";

export default function FitCriteria() {
  const { fit } = homepageCopy;

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <SectionLabel>Fit</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{fit.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-base text-muted">{fit.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fit.criteria.map((item, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <TiltCard className="h-full p-6">
                <span className="font-display text-3xl font-bold text-white/[0.06]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-[1.7] text-muted">{item}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <p className="mt-10 max-w-3xl text-base leading-[1.75] text-muted">
            {fit.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
