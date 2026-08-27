"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import TiltCard from "./TiltCard";
import { homepageCopy, teamMembers } from "@/data/siteData";

export default function Team() {
  const { team } = homepageCopy;

  return (
    <section id="team" className="section-padding relative">
      <div className="container-wide">
        <SectionLabel>Team</SectionLabel>
        <FadeIn delay={0.05}>
          <h2 className="headline mt-5 max-w-3xl">{team.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted">
            {team.subheading}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 max-w-xl text-sm text-muted-dim">{team.intro}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.name} delay={0.12 + i * 0.08}>
              <TiltCard className="flex h-full flex-col p-8">
                <div className="flex items-center gap-4">
                  {member.image ? (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-charcoal-elevated font-display text-sm font-bold text-accent">
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-accent">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-sm leading-[1.7] text-muted">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <p className="mt-12 max-w-2xl text-base font-medium text-white/90">
            {team.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
