import { PhoneCall, Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We discuss your business goals, target audience, and current marketing efforts.",
    color: "text-accent",
    iconBg: "bg-accent/15 border-accent/25",
    numBg: "bg-accent",
    glow: "rgba(0,201,167,0.15)",
  },
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "I create a custom roadmap with platform selection, budget, and KPI targets.",
    color: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    numBg: "bg-blue-500",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: Rocket,
    title: "Campaign Setup",
    description: "Launch campaigns with proper tracking, creatives, and conversion setup.",
    color: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    numBg: "bg-violet-500",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Settings,
    title: "Optimisation",
    description: "Continuous A/B testing, bid optimisation, and data-driven refinement.",
    color: "text-orange-400",
    iconBg: "bg-orange-500/15 border-orange-500/25",
    numBg: "bg-orange-500",
    glow: "rgba(249,115,22,0.15)",
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    description: "Scale winning campaigns and expand into new audiences and platforms.",
    color: "text-cyan-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/25",
    numBg: "bg-cyan-500",
    glow: "rgba(6,182,212,0.15)",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-primary scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            How We Work Together
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            A proven 5-step process from initial consultation to scalable, profitable campaigns.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex-1 flex flex-col items-center text-center relative group">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-7 left-1/2 w-full h-px bg-white/8 z-0" />
                )}

                {/* icon circle */}
                <div className="relative z-10 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.iconBg} border ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 0 0 transparent` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* step number */}
                  <span className={`absolute -top-2 -right-2 w-5 h-5 ${step.numBg} text-white rounded-full flex items-center justify-center text-[10px] font-bold`}>
                    {i + 1}
                  </span>
                </div>

                <h3 className={`text-sm font-bold text-white mb-2 ${step.color.replace("text-", "group-hover:text-")} transition-colors`}>
                  {step.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex gap-4 bg-primary-light border border-white/8 rounded-2xl p-5"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className={`relative w-12 h-12 rounded-xl ${step.iconBg} border ${step.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                    <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 ${step.numBg} text-white rounded-full flex items-center justify-center text-[10px] font-bold`}>
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/8 mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className={`font-bold text-white text-sm mb-1 ${step.color}`}>{step.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
