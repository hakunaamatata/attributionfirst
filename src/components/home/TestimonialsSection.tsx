import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const cardStyles = [
  { accent: "border-t-accent/50", avatarBg: "bg-accent/12 border-accent/25 text-accent" },
  { accent: "border-t-accent/45", avatarBg: "bg-accent/12 border-accent/25 text-accent" },
  { accent: "border-t-accent/40", avatarBg: "bg-accent/12 border-accent/25 text-accent" },
  { accent: "border-t-accent/35", avatarBg: "bg-accent/12 border-accent/25 text-accent" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-bg scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <Star className="w-3 h-3 fill-accent" aria-hidden="true" /> Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it — hear from businesses I&apos;ve helped grow.
          </p>
        </div>

        {/* Masonry-style grid: 2 tall + 2 short alternating */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <figure
                key={i}
                className={`group relative bg-bg-card border border-border ${style.accent} border-t-2 rounded-2xl p-6 md:p-7 hover:border-border hover:shadow-lg hover:shadow-black/20 light:hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Quote icon */}
                <div className="mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-accent/60" aria-hidden="true" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-xl ${style.avatarBg} border flex items-center justify-center text-sm font-bold shrink-0`} aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm leading-tight">{t.name}</p>
                    <p className="text-text-tertiary text-xs mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
