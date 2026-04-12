import { Clock, IndianRupee, TrendingUp, Users } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/** Performance row: finance → scale → returns */
const metricStyles = [
  {
    gradient: "from-blue-600 to-indigo-600",
    glow: "rgba(37, 99, 235, 0.14)",
    iconRing: "bg-blue-500/10 border-blue-500/25 text-blue-600 dark:text-blue-400",
    value: "text-blue-600 dark:text-blue-400",
  },
  {
    gradient: "from-cyan-600 to-sky-500",
    glow: "rgba(8, 145, 178, 0.13)",
    iconRing: "bg-cyan-500/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400",
    value: "text-cyan-600 dark:text-cyan-400",
  },
  {
    gradient: "from-emerald-600 to-teal-500",
    glow: "rgba(5, 150, 105, 0.13)",
    iconRing: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400",
    value: "text-emerald-600 dark:text-emerald-400",
  },
  {
    gradient: "from-amber-600 to-orange-500",
    glow: "rgba(217, 119, 6, 0.12)",
    iconRing: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
    value: "text-amber-600 dark:text-amber-400",
  },
] as const;

const metrics = [
  {
    icon: IndianRupee,
    value: 7,
    prefix: "₹",
    suffix: "Cr+",
    label: "Ad Spend Managed",
    sublabel: "Across Google, Meta & Bing",
  },
  {
    icon: Users,
    value: 10,
    prefix: "",
    suffix: "K+",
    label: "Qualified Leads",
    sublabel: "Generated across B2B & B2C",
  },
  {
    icon: TrendingUp,
    value: 3,
    prefix: "",
    suffix: "x",
    label: "Average ROAS",
    sublabel: "Return on ad spend delivered",
  },
  {
    icon: Clock,
    value: 5,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
    sublabel: "Google & Meta certified",
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="relative scroll-mt-24 bg-bg py-16 md:py-24" aria-label="Key metrics">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[800px] -translate-x-1/2 rounded-full bg-accent/4 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
            Performance snapshot
          </h2>
          <p className="mt-3 text-sm text-text-secondary md:text-base">
            Real numbers from live campaigns and long-term client work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const s = metricStyles[i % metricStyles.length];
            return (
              <div
                key={m.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300"
              >
                <div className={`h-[2px] w-full bg-linear-to-r ${s.gradient}`} />

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.glow} 0%, transparent 70%)` }}
                />

                <div className="relative z-10 p-6 md:p-7">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${s.iconRing}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className={`mb-1.5 text-3xl font-extrabold md:text-4xl ${s.value}`}>
                    <AnimatedCounter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <p className="mb-1 text-sm font-semibold text-primary">{m.label}</p>
                  <p className="text-xs text-text-tertiary">{m.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
