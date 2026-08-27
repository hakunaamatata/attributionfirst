"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { profiles } from "@/data/siteData";

type ProfileKey = keyof typeof profiles;
const profileKeys: ProfileKey[] = ["junaid", "nouman"];

export default function Founder() {
  const [active, setActive] = useState<ProfileKey>("junaid");
  const profile = profiles[active];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-wide">
        <SectionLabel>About</SectionLabel>
        <FadeIn delay={0.05}>
          <h2 className="headline mt-5 max-w-2xl">
            Two specialists,{" "}
            <span className="gradient-text">one growth system.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.7] text-muted">
            Junaid owns acquisition, attribution, and performance marketing.
            Nouman owns the websites, landing pages, and SEO those campaigns
            convert on. Together: traffic → tracking → experience → revenue.
          </p>
        </FadeIn>

        {/* Profile tabs */}
        <FadeIn delay={0.1}>
          <div
            role="tablist"
            aria-label="Select team member"
            className="mt-10 inline-flex rounded-full border border-border bg-charcoal-elevated p-1"
          >
            {profileKeys.map((key) => {
              const p = profiles[key];
              const isActive = active === key;
              return (
                <button
                  key={key}
                  id={`about-tab-${key}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`about-panel-${key}`}
                  onClick={() => setActive(key)}
                  className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? "text-charcoal" : "text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProfileTab"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {p.name.split(" ")[0]}
                    <span className="hidden text-[10px] font-normal text-muted-dim sm:inline">
                      · {p.focus}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`about-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid items-start gap-16 lg:grid-cols-2 lg:gap-24"
          >
            {/* Photo */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
              <div className="absolute inset-0 border border-border bg-charcoal-elevated" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-indigo-500/8" />
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={active === "junaid"}
              />
              <div className="absolute top-5 right-5 rounded-full border border-accent/30 bg-charcoal/90 px-4 py-2 backdrop-blur-sm">
                <p className="font-display text-lg font-bold text-accent">
                  {profile.statFloat.value}
                </p>
                <p className="text-[10px] text-muted-dim">{profile.statFloat.label}</p>
              </div>
              <div className="absolute right-6 bottom-6 left-6 rounded-xl border border-border bg-charcoal/90 p-4 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.15em] text-muted-dim uppercase">
                  Available for projects
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {profile.availability}
                </p>
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {profile.name}
              </h3>
              <p className="mt-2 text-lg text-muted">{profile.title}</p>
              <p className="mt-1 text-sm text-accent">{profile.focus}</p>

              {profile.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-base leading-[1.75] text-muted first:mt-6"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {profile.credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="rounded-full border border-border px-5 py-2.5"
                  >
                    <span className="text-sm font-medium text-white">
                      {cred.value}
                    </span>
                    <span className="ml-2 text-xs text-muted-dim">
                      {cred.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-border pt-8">
                {profile.experience.map((exp) => (
                  <div
                    key={exp.role}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{exp.role}</p>
                      <p className="text-xs text-muted">{exp.company}</p>
                    </div>
                    <p className="shrink-0 text-xs text-muted-dim">{exp.period}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary inline-flex">
                  Work With {profile.name.split(" ")[0]}
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex"
                >
                  Download Resume
                </a>
                {profile.externalUrl && (
                  <a
                    href={profile.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex"
                  >
                    {profile.externalLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
