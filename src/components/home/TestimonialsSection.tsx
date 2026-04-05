import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <Star className="w-3 h-3 fill-accent" /> Client Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Recommendations
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it — hear from businesses I&apos;ve helped grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-primary border border-white/8 rounded-2xl p-6 hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(0,201,167,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* accent top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* quote watermark */}
              <Quote className="absolute bottom-4 right-4 w-16 h-16 text-white/3" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm leading-tight">{t.name}</p>
                    <p className="text-white/35 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
