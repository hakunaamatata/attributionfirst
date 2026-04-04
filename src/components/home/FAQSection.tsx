"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is incrementality measurement?",
    a: "Incrementality measurement is the process of determining the causal impact of your marketing activities by comparing a group exposed to your marketing (test group) against a similar group not exposed (control group). This isolates the true incremental lift from your marketing, separate from organic demand.",
  },
  {
    q: "Why is my ROAS declining in 2026?",
    a: "ROAS is declining for most scaling brands due to three primary factors: (1) iOS privacy changes and cookie deprecation have reduced tracking accuracy by 20–30%, (2) rising customer acquisition costs (CAC) across all platforms, and (3) broken attribution systems that misallocate budget toward channels claiming credit rather than driving true incremental revenue.",
  },
  {
    q: "How do I fix broken marketing attribution?",
    a: "Fix broken marketing attribution by: (1) auditing your current tracking infrastructure, (2) implementing server-side tracking, (3) integrating CRM revenue data with ad platform data, (4) building custom attribution models based on your actual sales cycle, and (5) establishing incrementality testing frameworks.",
  },
  {
    q: "What's the difference between platform ROAS and blended MER?",
    a: "Platform ROAS is reported by individual ad platforms (Meta, Google, etc.) based on their attribution models. Blended MER (Marketing Efficiency Ratio) is your total revenue divided by total marketing spend, regardless of platform attribution. The gap between these two metrics often reveals attribution blind spots.",
  },
  {
    q: "Why is last-click attribution problematic?",
    a: "Last-click attribution assigns 100% of conversion credit to the final touchpoint before purchase, ignoring all previous marketing touchpoints that built awareness and consideration. This over-credits bottom-funnel channels (like branded search) and under-credits top-funnel channels (like social and display) that actually initiate customer journeys.",
  },
  {
    q: "How long does it take to rebuild attribution infrastructure?",
    a: "A complete attribution infrastructure rebuild typically takes 60–90 days, depending on your current tech stack and data complexity. However, you can start seeing improved decision-making within 30 days of implementing server-side tracking and CRM integration.",
  },
];

function FAQItem({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`faq-card group relative rounded-2xl transition-all duration-300 ${
        open
          ? "faq-card-open"
          : "faq-card-closed hover:faq-card-hover"
      }`}
    >
      {/* Number badge */}
      <div
        className={`faq-number absolute -left-4 top-5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
          open
            ? "bg-accent text-white shadow-[0_0_16px_rgba(0,201,167,0.5)]"
            : "bg-white/10 text-white/40 group-hover:bg-accent/20 group-hover:text-accent"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${
            open ? "text-white" : "text-white/80 group-hover:text-white"
          }`}
        >
          {q}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            open
              ? "bg-accent rotate-180 shadow-[0_0_12px_rgba(0,201,167,0.4)]"
              : "bg-white/10 group-hover:bg-accent/20"
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-200 ${
              open ? "text-white" : "text-white/60 group-hover:text-accent"
            }`}
          />
        </span>
      </button>

      <div
        className={`faq-body overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 overflow-hidden scroll-mt-24"
      style={{
        background:
          "linear-gradient(135deg, #0A0F1A 0%, #131B2E 50%, #0A0F1A 100%)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />

      {/* Background glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #00C9A7 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
            style={{
              background: "rgba(0,201,167,0.12)",
              border: "1px solid rgba(0,201,167,0.3)",
              color: "#00C9A7",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"
            />
            Got Questions?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Everything You Need to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C9A7, #2DD4BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Know About Attribution
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Answers to the questions scaling brands ask most before fixing their
            measurement infrastructure.
          </p>
        </div>

        {/* FAQ list */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 items-start">
          {/* Left column */}
          <div className="space-y-3 pl-6">
            {faqs.slice(0, 3).map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-3 pl-6 mt-3 md:mt-0">
            {faqs.slice(3).map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                index={i + 3}
                open={openIndex === i + 3}
                onToggle={() =>
                  setOpenIndex(openIndex === i + 3 ? null : i + 3)
                }
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 md:mt-20 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(99,102,241,0.08) 100%)",
            border: "1px solid rgba(0,201,167,0.2)",
          }}
        >
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Still have questions?
            </p>
            <p className="text-white/50 text-sm">
              Book a free 20-minute strategy call — no pitch, just answers.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #00C9A7 0%, #00B398 100%)",
              color: "#fff",
              boxShadow: "0 0 24px rgba(0,201,167,0.35)",
            }}
          >
            Ask Us Anything
          </a>
        </div>
      </div>
    </section>
  );
}
