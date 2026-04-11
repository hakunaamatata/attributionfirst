import Link from "next/link";
import { ArrowLeft, Home, Briefcase, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-8xl font-extrabold text-accent/20 mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-accent/30 text-primary font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <Briefcase className="w-4 h-4" />
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-accent/30 text-primary font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
