import { siteConfig } from "@/data/siteData";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#attribution" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="container-wide px-5 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-charcoal-elevated text-[10px] font-bold text-accent">
                AF
              </span>
              <span className="text-[13px] font-semibold tracking-[0.12em] text-white">
                ATTRIBUTION FIRST
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block text-sm text-accent transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <p className="mt-2 text-sm text-muted-dim">{siteConfig.phone}</p>
            <p className="mt-1 text-sm text-muted-dim">{siteConfig.location}</p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium tracking-[0.2em] text-muted-dim uppercase">
              Navigation
            </p>
            <ul className="mt-5 columns-2 gap-x-8 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium tracking-[0.2em] text-muted-dim uppercase">
              Connect
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
              >
                LinkedIn
                <span className="text-muted-dim">↗</span>
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
              >
                WhatsApp
                <span className="text-muted-dim">↗</span>
              </a>
              <a
                href={siteConfig.noumanPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
              >
                Noumaan&apos;s Portfolio
                <span className="text-muted-dim">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="divider-glow mt-14" />
        <p className="mt-8 text-xs text-muted-dim">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
