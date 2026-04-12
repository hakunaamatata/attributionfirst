import { PhoneCall, Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";

/** Per-step accents — readable in light & dark; badges + icons + hover glow. */
const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We discuss your business goals, target audience, and current marketing efforts.",
    color: "text-blue-600 dark:text-blue-400",
    iconBg:
      "bg-blue-500/10 border-blue-500/25 shadow-sm shadow-blue-500/10 dark:bg-blue-500/15 dark:border-blue-400/30 dark:shadow-blue-900/20",
    numGradient: "from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500",
    glowColor: "rgba(37, 99, 235, 0.2)",
    titleHover: "group-hover:text-blue-700 dark:group-hover:text-blue-300",
  },
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "I create a custom roadmap with platform selection, budget, and KPI targets.",
    color: "text-violet-600 dark:text-violet-400",
    iconBg:
      "bg-violet-500/10 border-violet-500/25 shadow-sm shadow-violet-500/10 dark:bg-violet-500/15 dark:border-violet-400/30 dark:shadow-violet-900/20",
    numGradient: "from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500",
    glowColor: "rgba(124, 58, 237, 0.18)",
    titleHover: "group-hover:text-violet-700 dark:group-hover:text-violet-300",
  },
  {
    icon: Rocket,
    title: "Campaign Setup",
    description: "Launch campaigns with proper tracking, creatives, and conversion setup.",
    color: "text-cyan-600 dark:text-cyan-400",
    iconBg:
      "bg-cyan-500/10 border-cyan-500/25 shadow-sm shadow-cyan-500/10 dark:bg-cyan-500/15 dark:border-cyan-400/30 dark:shadow-cyan-900/20",
    numGradient: "from-cyan-600 to-sky-600 dark:from-cyan-500 dark:to-sky-500",
    glowColor: "rgba(8, 145, 178, 0.18)",
    titleHover: "group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
  },
  {
    icon: Settings,
    title: "Optimisation",
    description: "Continuous A/B testing, bid optimisation, and data-driven refinement.",
    color: "text-emerald-600 dark:text-emerald-400",
    iconBg:
      "bg-emerald-500/10 border-emerald-500/25 shadow-sm shadow-emerald-500/10 dark:bg-emerald-500/15 dark:border-emerald-400/30 dark:shadow-emerald-900/20",
    numGradient: "from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-600",
    glowColor: "rgba(5, 150, 105, 0.18)",
    titleHover: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    description: "Scale winning campaigns and expand into new audiences and platforms.",
    color: "text-amber-600 dark:text-amber-400",
    iconBg:
      "bg-amber-500/10 border-amber-500/25 shadow-sm shadow-amber-500/10 dark:bg-amber-500/15 dark:border-amber-400/30 dark:shadow-amber-900/20",
    numGradient: "from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500",
    glowColor: "rgba(217, 119, 6, 0.18)",
    titleHover: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
  },
] as const;

export default function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-20">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
            How We Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary md:text-lg">
            A proven 5-step process from initial consultation to scalable, profitable campaigns.
          </p>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute left-[10%] right-[10%] top-[52px] h-px" aria-hidden="true">
            <div className="h-full w-full bg-linear-to-r from-blue-500/35 via-violet-500/25 to-amber-500/35 opacity-90 dark:from-blue-400/30 dark:via-violet-400/22 dark:to-amber-400/30" />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="group flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div
                      className={`flex h-[104px] w-[104px] items-center justify-center rounded-3xl border transition-all duration-300 group-hover:scale-105 ${step.iconBg} ${step.color}`}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span
                      className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br ${step.numGradient} text-xs font-bold text-white shadow-lg`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div
                      className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: step.glowColor }}
                    />
                  </div>

                  <h3
                    className={`mb-2 text-sm font-bold text-primary transition-colors ${step.titleHover}`}
                  >
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="px-1 text-xs leading-relaxed text-text-tertiary">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-0 md:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-5">
                <div className="flex shrink-0 flex-col items-center">
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform active:scale-[0.98] ${step.iconBg} ${step.color}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span
                      className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-linear-to-br ${step.numGradient} text-[10px] font-bold text-white`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="my-2 min-h-[40px] w-px flex-1 bg-linear-to-b from-blue-500/35 via-violet-400/25 to-amber-500/35 opacity-60 dark:from-blue-400/30 dark:via-violet-400/25 dark:to-amber-400/30"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <h3 className={`mb-1.5 text-sm font-bold text-primary ${step.color}`}>
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-tertiary">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
