import { Target, BarChart3, Megaphone, Filter, Layout, MapPin, TrendingUp } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  BarChart3,
  Megaphone,
  Filter,
  Layout,
  MapPin,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            Services That Drive Growth
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            End-to-end performance marketing solutions designed to generate
            leads, reduce costs, and maximize your return on ad spend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Target;
            const details = service.features.slice(0, 3);
            return (
              <div
                key={service.slug}
                className="group bg-surface rounded-2xl border border-border p-6 md:p-8 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 hover:border-accent/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-500/10 text-accent rounded-xl mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 text-text-secondary text-sm">
                  {details.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.tags && service.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag.label}
                        title={tag.tooltip}
                        className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10 text-primary text-[11px] font-semibold tracking-wide hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
                {service.metric && (
                  <div className="mt-4 flex items-start gap-2 bg-accent/8 border border-accent/20 rounded-xl px-3 py-2.5">
                    <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-accent text-xs font-medium leading-snug">{service.metric}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
