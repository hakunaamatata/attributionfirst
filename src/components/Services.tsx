"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { services } from "@/data/siteData";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-padding bg-charcoal-light">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Services</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="headline mt-5">
                Everything to turn spend into growth.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-5 text-sm leading-[1.7] text-muted">
                Performance marketing, attribution, SEO and conversion —
                engineered for brands in India and the UAE.
              </p>
            </FadeIn>
          </div>

          <div className="divide-y divide-border">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.04}>
                <button
                  type="button"
                  className="group w-full py-6 text-left"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-display mt-1 text-sm transition-colors ${
                        active === i ? "text-accent" : "text-muted-dim"
                      }`}
                    >
                      {service.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-display text-lg font-semibold transition-colors md:text-xl ${
                            active === i ? "text-white" : "text-white/80"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <span
                          className={`shrink-0 transition-all ${
                            active === i
                              ? "text-accent opacity-100"
                              : "text-muted opacity-0"
                          }`}
                        >
                          →
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-[1.7] text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-4 h-px origin-left bg-accent/60 transition-transform duration-300"
                    style={{
                      transform: active === i ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
