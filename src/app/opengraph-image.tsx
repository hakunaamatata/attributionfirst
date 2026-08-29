import { ImageResponse } from "next/og";

export const alt = "Attribution First — B2B Paid Search & Revenue Attribution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(145deg, #0a0a0a 0%, #111111 45%, #0f1a0a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 700,
              color: "#c8f542",
            }}
          >
            AF
          </div>
          <div style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "0.14em" }}>
            ATTRIBUTION FIRST
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Turn search demand into measurable revenue.
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.4, color: "rgba(255,255,255,0.72)" }}>
            B2B paid search, attribution & conversion infrastructure for UK and international
            businesses.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "20px", color: "#c8f542" }}>
          <span>Strategy</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
          <span>Paid Search</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
          <span>Technology & SEO</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
