"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy, siteConfig } from "@/data/siteData";

const ease = [0.16, 1, 0.3, 1] as const;

function ReviewStepIcon({ index }: { index: number }) {
  const props = {
    className: "h-4 w-4 text-accent",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <circle cx="10" cy="10" r="6.5" />
          <path d="M10 6.5v3.5l2.2 1.3" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <path d="M4 5.5h12M4 10h8M4 14.5h10" />
          <circle cx="15.5" cy="14.5" r="2" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 20 20" {...props}>
          <path d="M4 15V9M8 15V6.5M12 15V11M16 15V4.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CTA() {
  const { cta } = homepageCopy;

  return (
    <section id="contact" className="section-padding relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-70" />
      <div className="pointer-events-none absolute inset-0 cta-grid opacity-35" />

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div>
            <SectionLabel>{cta.label}</SectionLabel>

            <FadeIn delay={0.06}>
              <h2 className="headline mt-5 max-w-2xl">{cta.headline}</h2>
              <p className="mt-5 max-w-xl text-sm leading-[1.8] text-muted md:text-base">
                {cta.subheading}
              </p>
            </FadeIn>

            <div className="mt-10 space-y-3">
              {cta.reviewSteps.map((step, i) => (
                <FadeIn key={step.title} delay={0.1 + i * 0.06}>
                  <motion.div
                    className="cta-review-step group flex gap-4 rounded-xl border border-border bg-charcoal-light/50 p-4 transition-colors duration-500 hover:border-border-hover hover:bg-charcoal-elevated/60 md:p-5"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-charcoal-elevated transition-colors duration-500 group-hover:border-border-hover">
                      <ReviewStepIcon index={i} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-base font-semibold text-white md:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-[1.7] text-muted">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.18}>
            <div className="cta-panel relative overflow-hidden rounded-2xl border border-border bg-charcoal-elevated/80 lg:sticky lg:top-28">
              <div className="cta-panel-glow pointer-events-none absolute inset-0" />

              <div className="relative border-b border-border p-6 md:p-8">
                <p className="text-[10px] font-medium tracking-[0.2em] text-accent uppercase">
                  Commercial review
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.75rem]">
                  {siteConfig.primaryCta}
                </p>
                <p className="mt-3 text-sm leading-[1.75] text-muted">
                  We&apos;ll review your market, assess what you&apos;re doing today, and give you
                  an honest view on whether there&apos;s opportunity worth pursuing.
                </p>
              </div>

              <ul className="relative space-y-3 border-b border-border p-6 md:p-8">
                {cta.assurances.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border-active bg-accent-muted text-[10px] text-accent"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative space-y-5 p-6 md:p-8">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={siteConfig.contactUrl}
                    className="btn-primary flex-1 justify-center"
                  >
                    {siteConfig.primaryCta}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="btn-secondary flex-1 justify-center"
                  >
                    Email us
                  </a>
                </div>

                <div className="cta-contact-strip flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-charcoal-light/60 px-4 py-3 text-xs text-muted-dim">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                  <span className="hidden text-border sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <a
                    href={siteConfig.phoneTel}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="hidden text-border sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
