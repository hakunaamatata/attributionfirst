import { IndianRupee, Users, TrendingUp, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  {
    icon: IndianRupee,
    value: 7,
    prefix: "₹",
    suffix: "Cr+",
    label: "Ad Spend Managed",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Leads Generated",
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "x",
    label: "Average ROAS",
  },
  {
    icon: Clock,
    value: 5,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
  },
];

export default function MetricsSection() {
  return (
    <>
      {/* Wave divider – smooth transition from dark hero to white stats */}
      <div className="relative w-full overflow-hidden bg-primary-light">
        <svg
          className="relative w-full h-12 md:h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#F8FAFC"
            d="M0,64 C300,120 600,0 900,64 C1050,96 1150,80 1200,64 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      <section id="metrics" className="pt-0 pb-16 md:pb-20 bg-surface scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="text-center p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-500/10 text-accent rounded-xl mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter
                      end={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <p className="text-text-secondary text-sm font-medium">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
