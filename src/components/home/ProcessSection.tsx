import { PhoneCall, Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We discuss your business goals, target audience, and current marketing efforts.",
  },
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "I create a custom roadmap with platform selection, budget, and KPI targets.",
  },
  {
    icon: Rocket,
    title: "Campaign Setup",
    description: "Launch campaigns with proper tracking, creatives, and conversion setup.",
  },
  {
    icon: Settings,
    title: "Optimization",
    description: "Continuous A/B testing, bid optimization, and data-driven refinement.",
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    description: "Scale winning campaigns and expand into new audiences and platforms.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            How We Work Together
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A proven 5-step process that takes you from initial consultation to
            scalable, profitable campaigns.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative text-center">
                    <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-accent text-accent rounded-full mb-4 shadow-sm">
                      <Icon className="w-8 h-8" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 bg-border flex-1 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
