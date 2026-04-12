/**
 * Shared “Available for new projects” pill — neon lime tokens in globals.css (.badge-availability).
 */
export default function AvailabilityBadge({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "sm";
}) {
  return (
    <div
      className={`badge-availability ${size === "sm" ? "badge-availability-sm" : ""} ${className}`.trim()}
    >
      <span className="badge-availability-dot" aria-hidden="true" />
      Available for new projects
    </div>
  );
}
