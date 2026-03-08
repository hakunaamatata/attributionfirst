import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Award, Briefcase, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Junaid Ahmed Kazi — a performance marketing expert with 5+ years of experience in Google Ads, Meta Ads, and data-driven campaign management.",
};

const experience = [
  {
    role: "Assistant Manager - Digital",
    company: "Thomas Cook India",
    period: "Oct 2024 - Present",
    location: "Lower Parel, Mumbai",
    highlights: [
      "Developed and implemented digital strategies across multiple platforms",
      "Engineered cross-platform App Campaigns for iOS and Android with Firebase Analytics integration",
      "Boosted local branch calls by 25% via targeted Google My Business campaigns",
      "Expert in Post-Click Optimization, bridging Google Ads and Webflow landing pages",
      "Achieved 2x revenue uplift through Looker Studio data analysis and keyword optimization",
    ],
  },
  {
    role: "PPC Lead",
    company: "Crimson Interactive",
    period: "Jan 2024 - Oct 2024",
    location: "Goregaon, Mumbai",
    highlights: [
      "Developed comprehensive PPC strategies aligned with business goals",
      "Designed and executed A/B tests for ad creatives, targeting, and landing pages",
      "Set up comprehensive conversion tracking for purchases and form submissions",
      "Optimized Google, Bing, and Yahoo Ad campaigns",
      "Achieved 35% ROI increase through strategic keyword targeting",
    ],
  },
  {
    role: "SEM Analyst",
    company: "ReachLocal India Pvt. Ltd",
    period: "Dec 2021 - Aug 2023",
    location: "Goregaon, Mumbai",
    highlights: [
      "Optimized Google Ads campaigns including sitelinks, callouts, and snippets",
      "Managed keyword-level and device-level bids with daily budget adjustments",
      "Built high-converting landing pages using Webflow",
      "Generated performance reports and presented findings to stakeholders",
      "Achieved maximum ROI through data analysis in paid search campaigns",
    ],
  },
  {
    role: "Freelance Digital Marketing",
    company: "Self-employed",
    period: "Mar 2020 - Apr 2021",
    location: "Mumbai",
    highlights: [
      "Content writing and blog creation for multiple companies",
      "Designed social media posts, website graphics, and marketing materials",
      "Mastered Canva and Vistacreate for visual content creation",
      "Wrote marketing and promotional materials for diverse products and services",
    ],
  },
];

const certifications = [
  "Google Ads Search Certification",
  "Google Analytics 4 Certification (Udemy)",
  "Microsoft Ads Certified Professional",
  "Advanced Google Ads (LinkedIn)",
  "Meta Social Media Marketing Professional (Coursera)",
  "Advanced Tracking & Measurement Program (Measure Marketer)",
  "Digital Marketing Course (Freelancer Academy)",
];

const skills = [
  "Google Ads", "Meta Ads", "Bing Ads", "Yahoo Ads", "GA4", "GTM",
  "PPC", "SEM", "SEMrush", "Salesforce CRM", "Oracle CRM",
  "Post-Click Optimization", "Conversion Rate Optimization", "A/B Testing",
  "Google My Business Ads", "Firebase", "App Install Campaigns",
  "Paid Ads Strategy", "Paid Ads Funnel", "Canva",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl relative bg-primary-light">
                <Image
                  src="/images/profileImage.jpeg"
                  alt="Junaid Ahmed Kazi - Performance Marketing Expert"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Junaid Ahmed Kazi
              </h1>
              <p className="text-accent text-lg font-medium mb-4">
                Performance Marketing Expert
              </p>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                Digital marketing professional with over 5 years of
                experience in data-driven marketing strategy and campaign
                execution. Expert in Google Ads and Meta Ads with key
                achievements including a 35% increase in Google Search campaigns
                ROI and a 40% reduction in ad spend while maintaining lead
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Experience
            </h2>
          </div>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-accent/20 shrink-0 z-10" />
                  {i < experience.length - 1 && (
                    <div className="w-0.5 bg-border flex-1" />
                  )}
                </div>

                <div className="flex-1 -mt-1">
                  <div className="bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-text-secondary text-sm mt-1 md:mt-0 md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-text-secondary text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Certifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white rounded-xl border border-border p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-primary text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-surface text-text-primary text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Education
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-bold text-primary mb-1">
                Bachelor of Engineering
              </h3>
              <p className="text-accent text-sm font-medium">
                Savitribai Phule Pune University
              </p>
              <p className="text-text-secondary text-sm mt-1">
                2014 - 2018 | Pune, India
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-bold text-primary mb-1">
                Diploma in Engineering
              </h3>
              <p className="text-accent text-sm font-medium">MSBTE</p>
              <p className="text-text-secondary text-sm mt-1">
                2011 - 2014 | Pune, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Ready to take your digital marketing to the next level? Let&apos;s
            talk strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Book Strategy Call
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
