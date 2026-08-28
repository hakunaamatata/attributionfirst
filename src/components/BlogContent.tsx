import Link from "next/link";
import type { BlogContent } from "@/data/blog";

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-accent"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M5 10.5 8.5 14 15 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogContentRenderer({ block }: { block: BlogContent }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="rounded-r-xl border-l-4 border-accent bg-accent-muted py-4 pl-5 pr-4 text-base leading-relaxed text-muted md:text-lg">
          {block.text}
        </p>
      );

    case "toc":
      return (
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-border bg-charcoal-light/60 p-6"
        >
          <p className="mb-4 text-[10px] font-medium tracking-[0.2em] text-muted-dim uppercase">
            Table of Contents
          </p>
          <ol className="space-y-2">
            {block.items.map((item, i) => (
              <li key={item.anchor} className="flex items-start gap-2.5">
                <span className="w-5 shrink-0 pt-px text-sm font-semibold text-accent">
                  {i + 1}.
                </span>
                <a
                  href={`#${item.anchor}`}
                  className="text-sm leading-snug text-muted transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      );

    case "h2":
      return (
        <h2
          id={block.id}
          className="mt-12 scroll-mt-28 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={block.id}
          className="mt-8 scroll-mt-28 font-display text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl"
        >
          {block.text}
        </h3>
      );

    case "paragraph":
      return <p className="leading-[1.8] text-muted">{block.text}</p>;

    case "callout": {
      const styles = {
        warning: "border-amber-400/40 bg-amber-400/10 text-muted",
        info: "border-border-active bg-accent-muted text-muted",
        success: "border-emerald-400/40 bg-emerald-400/10 text-muted",
      };
      return (
        <div className={`rounded-r-xl border-l-4 px-5 py-4 text-sm leading-relaxed ${styles[block.variant]}`}>
          {block.text}
        </div>
      );
    }

    case "comparison_table":
      return (
        <figure className="-mx-4 overflow-x-auto sm:mx-0">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="whitespace-nowrap bg-charcoal-light px-4 py-3 text-left font-semibold text-white first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-charcoal-elevated/50" : "bg-charcoal-light/40"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-border px-4 py-3 text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs italic text-muted-dim">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "bullet_list":
      return (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <CheckIcon />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "numbered_list":
      return (
        <ol className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-active bg-accent-muted text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "stat_highlight":
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {block.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-charcoal-light/60 p-5 text-center"
            >
              <p className="font-display text-2xl font-semibold text-accent md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-muted-dim">{s.label}</p>
            </div>
          ))}
        </div>
      );

    case "faq":
      return (
        <div className="space-y-3">
          {block.items.map((item, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-xl border border-border bg-charcoal-light/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-charcoal-elevated/60 md:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-accent transition-transform duration-200 group-open:rotate-90">
                  →
                </span>
              </summary>
              <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      );

    case "phase_list":
      return (
        <div className="space-y-5">
          {block.phases.map((phase) => (
            <div
              key={phase.number}
              className="rounded-2xl border border-border bg-charcoal-light/50 p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-active bg-accent-muted font-display text-lg font-semibold text-accent">
                  {phase.number}
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                    Phase {phase.number}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-white">{phase.title}</h3>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-white">Goal:</span> {phase.goal}
              </p>
              <ul className="mb-4 space-y-2">
                {phase.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <CheckIcon />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-border-active bg-accent-muted px-4 py-3 text-sm text-muted">
                <span className="font-semibold text-white">Deliverable:</span> {phase.deliverable}
              </div>
            </div>
          ))}
        </div>
      );

    case "cta":
      return (
        <div className="rounded-2xl border border-border bg-charcoal-elevated/80 p-8 text-center md:p-10">
          <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{block.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {block.subtext}
          </p>
          <Link href={block.href} className="btn-primary mt-6 inline-flex">
            {block.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      );

    default:
      return null;
  }
}
