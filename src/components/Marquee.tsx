const items = [
  "B2B Customer Acquisition",
  "Search Intent",
  "Google Ads",
  "Paid Search",
  "Landing Pages",
  "Pipeline & Revenue",
  "Server Factory",
  "Enterprise Technology",
  "Attribution First",
  "Michael Simkin",
  "Junaid Kazi",
  "Noumaan Khatib",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-charcoal-light/80 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal-light to-transparent" />
      <div className="animate-marquee flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 text-xs font-medium tracking-[0.15em] text-muted uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
