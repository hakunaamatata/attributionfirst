"use client";

import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy } from "@/data/siteData";

export default function VolumeProblem() {
  const { volumeProblem } = homepageCopy;

  return (
    <section id="approach" className="section-padding relative overflow-hidden bg-charcoal-light">
      <div className="absolute top-0 right-0 h-px w-1/2 bg-gradient-to-l from-accent/20 to-transparent" />
      <div className="container-wide">
        <SectionLabel>The challenge</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{volumeProblem.headline}</h2>
        </FadeIn>
        <div className="mt-10 max-w-3xl space-y-5">
          {volumeProblem.paragraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={0.12 + i * 0.06}>
              <p className="text-base leading-[1.75] text-muted md:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
