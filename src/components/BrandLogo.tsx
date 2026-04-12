"use client";

import { useId } from "react";

/** Brand mark: purple glass tile, sky-blue bars, purple base, orange trend + arrow (reference lockup). */
export default function BrandLogo({ size = 44, className = "" }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  const sky = "#7dd3fc";
  const skyDeep = "#38bdf8";
  const purpleBase = "#7c3aed";
  const purpleDark = "#5b21b6";
  const orange = "#fb923c";
  const orangeDeep = "#f97316";

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <div
        className="brand-logo-glow absolute inset-[-8px] rounded-2xl blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at 38% 38%, rgba(167, 139, 250, 0.55) 0%, rgba(109, 40, 217, 0.45) 45%, transparent 72%)",
        }}
      />

      <div
        className="brand-logo-shell relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl transition-[background,box-shadow,border-color] duration-300"
        style={{
          background: "linear-gradient(148deg, rgba(91, 33, 182, 0.92) 0%, rgba(55, 48, 163, 0.95) 42%, #1e1b4b 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.14) inset, 0 -1px 0 rgba(0,0,0,0.45) inset, 0 10px 36px rgba(91, 33, 182, 0.5), 0 2px 10px rgba(0,0,0,0.55)",
          border: "1px solid rgba(196, 181, 253, 0.22)",
        }}
      >
        <div
          className="absolute left-0 top-0 h-[48%] w-[62%] rounded-tl-2xl opacity-[0.2]"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[55%] w-full opacity-25"
          style={{
            background: "radial-gradient(ellipse at 85% 100%, rgba(124, 58, 237, 0.9) 0%, transparent 68%)",
          }}
        />

        <svg
          viewBox="0 0 26 26"
          className="relative z-10 h-[62%] w-[62%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${id}-base`} x1="2" y1="20.5" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor={purpleBase} />
              <stop offset="1" stopColor={purpleDark} />
            </linearGradient>
          </defs>

          {/* Base rail */}
          <rect x="1.5" y="19.6" width="17.2" height="2.6" rx="1.2" fill={`url(#${id}-base)`} />
          <rect x="1.5" y="19.6" width="17.2" height="0.85" rx="0.8" fill="rgba(255,255,255,0.12)" />

          {/* Four sky-blue bars, increasing height */}
          <rect x="2.2" y="14.2" width="2.8" height="5.4" rx="0.65" fill={sky} />
          <rect x="2.2" y="14.2" width="2.8" height="0.85" rx="0.65" fill="rgba(255,255,255,0.35)" />
          <rect x="6.1" y="11.8" width="2.8" height="7.8" rx="0.65" fill={skyDeep} />
          <rect x="6.1" y="11.8" width="2.8" height="0.85" rx="0.65" fill="rgba(255,255,255,0.28)" />
          <rect x="10" y="9.4" width="2.8" height="10.2" rx="0.65" fill={sky} />
          <rect x="10" y="9.4" width="2.8" height="0.85" rx="0.65" fill="rgba(255,255,255,0.32)" />
          <rect x="13.9" y="6.2" width="2.8" height="13.4" rx="0.65" fill={skyDeep} />
          <rect x="13.9" y="6.2" width="2.8" height="0.85" rx="0.65" fill="rgba(255,255,255,0.3)" />

          {/* Orange trend + arrow (reference) */}
          <path
            d="M2.8 16.2 6.4 13.1 10.4 11.8 14.2 8.6 19.2 3.2"
            stroke={orange}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          />
          <path
            d="M2.8 16.2 6.4 13.1 10.4 11.8 14.2 8.6 19.2 3.2"
            stroke={orangeDeep}
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2 3.0 19.4 3.2 19.6 6.4"
            stroke={orangeDeep}
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19.35" cy="3.25" r="1.45" fill={orange} opacity="0.85" />
          <circle cx="19.35" cy="3.25" r="0.65" fill="#ffedd5" />
        </svg>
      </div>

      <div
        className="absolute -bottom-2 left-1 right-1 h-3 rounded-full blur-lg opacity-40"
        style={{
          background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.85), transparent 70%)",
        }}
      />
    </div>
  );
}
