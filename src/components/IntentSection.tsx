"use client";

import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy } from "@/data/siteData";

export default function IntentSection() {
  const { intent } = homepageCopy;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 accent-radial-right-soft" />
      <div className="container-wide relative">
        <SectionLabel>Our approach</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{intent.headline}</h2>
        </FadeIn>
        <div className="mt-10 max-w-3xl space-y-5">
          {intent.paragraphs.map((paragraph, i) => (
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
