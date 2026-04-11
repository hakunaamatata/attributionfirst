import { IndianRupee, Users, TrendingUp, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  {
    icon: IndianRupee,
    value: 7,
    prefix: "₹",
    suffix: "Cr+",
    label: "Ad Spend Managed",
    sublabel: "Across Google, Meta & Bing",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
    iconColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Qualified Leads",
    sublabel: "Generated across B2B & B2C",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
    iconColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "x",
    label: "Average ROAS",
    sublabel: "Return on ad spend delivered",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    iconColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Google & Meta certified",
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.15)",
    iconColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="relative py-16 md:py-24 bg-bg scroll-mt-24" aria-label="Key metrics">
      {/* Subtle section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="group relative rounded-2xl border border-white/[0.06] bg-bg-card overflow-hidden transition-all duration-300"
              >
                {/* Gradient top accent line */}
                <div className={`h-[2px] w-full bg-linear-to-r ${m.gradient}`} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${m.glowColor} 0%, transparent 70%)` }}
                />

                <div className="p-6 md:p-7 relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${m.accentBg} border ${m.accentBorder} ${m.iconColor} rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-extrabold mb-1.5 ${m.iconColor}`}>
                    <AnimatedCounter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <p className="text-primary font-semibold text-sm mb-1">{m.label}</p>
                  <p className="text-text-tertiary text-xs">{m.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
