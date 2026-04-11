export default function BrandLogo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      {/* Glow behind */}
      <div
        className="absolute inset-[-6px] rounded-2xl blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-75"
        style={{ background: "radial-gradient(ellipse at 40% 40%, #f59e0b 0%, #7c3aed 50%, transparent 75%)" }}
      />

      {/* Icon container */}
      <div
        className="relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #23205a 0%, #130f35 55%, #0a0720 100%)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 -1px 0 rgba(0,0,0,0.6) inset, 0 8px 32px rgba(124,58,237,0.55), 0 2px 8px rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Glass sheen */}
        <div
          className="absolute top-0 left-0 w-[65%] h-[45%] rounded-tl-2xl opacity-[0.12]"
          style={{ background: "linear-gradient(135deg, white 0%, transparent 100%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-1/2 opacity-20"
          style={{ background: "radial-gradient(ellipse at 80% 100%, #7c3aed 0%, transparent 70%)" }}
        />

        {/* Chart SVG */}
        <svg viewBox="0 0 26 26" className="w-[55%] h-[55%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="af-base" x1="2" y1="20" x2="20" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#5b21b6" />
            </linearGradient>
          </defs>
          {/* Base bar */}
          <rect x="1.5" y="19.5" width="17" height="2.8" rx="1.2" fill="url(#af-base)" />
          <rect x="1.5" y="19.5" width="17" height="1" rx="1" fill="rgba(255,255,255,0.15)" />
          {/* Chart bars */}
          <rect x="1.8" y="15" width="2.6" height="4.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
          <rect x="1.8" y="15" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.45" />
          <rect x="5.0" y="11.5" width="2.6" height="8" rx="0.6" fill="#60a5fa" fillOpacity="0.9" />
          <rect x="5.0" y="11.5" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.3" />
          <rect x="8.2" y="13" width="2.6" height="6.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
          <rect x="8.2" y="13" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.45" />
          <rect x="11.4" y="9" width="2.6" height="10.5" rx="0.6" fill="#60a5fa" fillOpacity="0.9" />
          <rect x="11.4" y="9" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.3" />
          <rect x="14.6" y="11" width="2.6" height="8.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
          <rect x="14.6" y="11" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.45" />
          <rect x="17.8" y="6" width="2.6" height="13.5" rx="0.6" fill="#3b82f6" />
          <rect x="17.8" y="6" width="2.6" height="0.9" rx="0.6" fill="white" fillOpacity="0.4" />
          {/* Trend line + arrow */}
          <path d="M2.8 15.8 6.2 12.2 9.3 14 13 9.5 19.5 2.5" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" />
          <path d="M2.8 15.8 6.2 12.2 9.3 14 13 9.5 19.5 2.5" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.8 2.2 19.5 2.5 19.8 6.2" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="19.6" cy="2.6" r="1.5" fill="#fbbf24" fillOpacity="0.35" />
          <circle cx="19.6" cy="2.6" r="0.7" fill="#fef08a" />
        </svg>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute -bottom-2 left-1 right-1 h-3 rounded-full blur-lg opacity-35"
        style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
      />
    </div>
  );
}
