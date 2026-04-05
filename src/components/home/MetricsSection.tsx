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
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    iconBg: "bg-accent/15 border-accent/25",
    glow: "rgba(0,201,167,0.15)",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Qualified Leads",
    sublabel: "Generated across B2B & B2C",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "x",
    label: "Average ROAS",
    sublabel: "Return on ad spend delivered",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Google & Meta certified",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15 border-orange-500/25",
    glow: "rgba(249,115,22,0.15)",
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-16 md:py-20 bg-primary-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="relative group rounded-2xl border border-white/8 bg-primary overflow-hidden hover:-translate-y-1 hover:border-white/15 transition-all duration-300"
              >
                {/* radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top right, ${m.glow} 0%, transparent 65%)` }}
                />
                {/* top gradient strip */}
                <div className={`h-0.5 w-full bg-linear-to-r ${m.color}`} />

                <div className="p-6 md:p-7 relative z-10">
                  <div className={`inline-flex items-center justify-center w-11 h-11 ${m.iconBg} border ${m.iconColor} rounded-xl mb-5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${m.iconColor}`}>
                    <AnimatedCounter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{m.label}</p>
                  <p className="text-white/35 text-xs">{m.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
