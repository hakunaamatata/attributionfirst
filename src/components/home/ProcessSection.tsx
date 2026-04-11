import { PhoneCall, Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We discuss your business goals, target audience, and current marketing efforts.",
    color: "text-violet-400",
    iconBg: "bg-violet-500/12 border-violet-500/20",
    numGradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "I create a custom roadmap with platform selection, budget, and KPI targets.",
    color: "text-blue-400",
    iconBg: "bg-blue-500/12 border-blue-500/20",
    numGradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    icon: Rocket,
    title: "Campaign Setup",
    description: "Launch campaigns with proper tracking, creatives, and conversion setup.",
    color: "text-indigo-400",
    iconBg: "bg-indigo-500/12 border-indigo-500/20",
    numGradient: "from-indigo-500 to-violet-500",
    glowColor: "rgba(99,102,241,0.12)",
  },
  {
    icon: Settings,
    title: "Optimisation",
    description: "Continuous A/B testing, bid optimisation, and data-driven refinement.",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/12 border-emerald-500/20",
    numGradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.12)",
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    description: "Scale winning campaigns and expand into new audiences and platforms.",
    color: "text-amber-400",
    iconBg: "bg-amber-500/12 border-amber-500/20",
    numGradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.12)",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            How We Work Together
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            A proven 5-step process from initial consultation to scalable, profitable campaigns.
          </p>
        </div>

        {/* Desktop: Horizontal cards with connecting line */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-px" aria-hidden="true">
            <div className="w-full h-full bg-linear-to-r from-violet-500/30 via-blue-500/30 to-amber-500/30" />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  {/* Number + Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-[104px] h-[104px] rounded-3xl ${step.iconBg} border flex items-center justify-center ${step.color} transition-all duration-300 group-hover:scale-105`}
                      style={{
                        boxShadow: `0 0 0 0 transparent`,
                      }}
                    >
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    {/* Number badge */}
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 bg-linear-to-br ${step.numGradient} text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-lg`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                      style={{ background: step.glowColor }}
                    />
                  </div>

                  <h3 className={`text-sm font-bold text-primary mb-2 ${step.color.replace("text-", "group-hover:text-")} transition-colors`}>
                    <span className="sr-only">Step {i + 1}: </span>{step.title}
                  </h3>
                  <p className="text-text-tertiary text-xs leading-relaxed px-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-5">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`relative w-14 h-14 rounded-2xl ${step.iconBg} border ${step.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-br ${step.numGradient} text-white rounded-md flex items-center justify-center text-[10px] font-bold`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[40px] bg-linear-to-b from-white/15 to-white/5 my-2" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <h3 className={`font-bold text-primary text-sm mb-1.5 ${step.color}`}>
                    <span className="sr-only">Step {i + 1}: </span>{step.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
