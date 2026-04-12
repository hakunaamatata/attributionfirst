import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // GTM + GA + Preview / Tag Assistant: https://developers.google.com/tag-manager/web/csp
              [
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                "https://www.googletagmanager.com",
                "https://googletagmanager.com",
                "https://tagmanager.google.com",
                "https://tagassistant.google.com",
                "https://www.google-analytics.com",
              ].join(" "),
              [
                "style-src 'self' 'unsafe-inline'",
                "https://fonts.googleapis.com",
                "https://googletagmanager.com",
                "https://www.googletagmanager.com",
                "https://tagmanager.google.com",
                "https://tagassistant.google.com",
              ].join(" "),
              [
                "font-src 'self' data:",
                "https://fonts.gstatic.com",
                "https://www.gstatic.com",
              ].join(" "),
              "img-src 'self' data: blob: https:",
              [
                "connect-src 'self'",
                "https://www.google-analytics.com",
                "https://analytics.google.com",
                "https://www.googletagmanager.com",
                "https://googletagmanager.com",
                "https://tagmanager.google.com",
                "https://tagassistant.google.com",
                "https://googleads.googleapis.com",
                "https://oauth2.googleapis.com",
                "https://www.google.com",
                "https://stats.g.doubleclick.net",
                "https://region1.google-analytics.com",
              ].join(" "),
              [
                "frame-src",
                "https://www.googletagmanager.com",
                "https://googletagmanager.com",
                "https://tagmanager.google.com",
                "https://tagassistant.google.com",
              ].join(" "),
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
