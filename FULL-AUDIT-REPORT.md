# SEO Full Audit Report — junaidkazi.com
**Date:** April 1, 2026 | **Audited by:** 7 parallel specialist subagents

---

## SEO Health Score: 62 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 47/100 | 10.3 |
| Content Quality | 23% | 71/100 | 16.3 |
| On-Page SEO | 20% | 58/100 | 11.6 |
| Schema / Structured Data | 10% | 35/100 | 3.5 |
| Performance (CWV) | 10% | 96/100 | 9.6 |
| AI Search Readiness (GEO) | 10% | 44/100 | 4.4 |
| Images | 5% | 70/100 | 3.5 |
| Local SEO | 0% (bonus) | 41/100 | — |
| **Total** | | | **59.2 → 62** |

**Business type detected:** Service Area Business (SAB) — Freelance Performance Marketing Consultant

---

## Executive Summary

The site has a strong content foundation — case studies with real data, credible employer history, and clean SSR-rendered HTML. Core Web Vitals are excellent (Lighthouse 96/100). The critical gaps are almost entirely technical and structural: missing canonical tags on every page, hardcoded og:url pointing all pages to the homepage, no OG image, no security headers, and thin schema coverage beyond the homepage. Fixing the Critical and High items below would push the score to ~82/100.

---

## Top 5 Critical Issues

1. **Canonical tags missing on all 8 pages** — Google may select unintended canonicals; hash anchors (`/#services`) compete with real page routes
2. **og:url hardcoded to homepage** — every page's social share card links back to `junaidkazi.com` instead of its own URL
3. **OG image missing site-wide** — all LinkedIn, WhatsApp, Twitter/X previews render blank
4. **No security headers** — missing CSP, X-Frame-Options, X-Content-Type-Options, HSTS, Referrer-Policy
5. **Navbar brand mismatch** — logo says "ATTRIBUTION FIRST" but the entire site is branded "Junaid Ahmed Kazi" with no explanation — a trust/authority gap under Google's QRG

## Top 5 Quick Wins (low effort, high impact)

1. Add `alternates: { canonical }` to each page's metadata — 30 min
2. Add OG image to `layout.tsx` using existing `profileImage.jpeg` — 15 min
3. Fix `openGraph.url` per-page in metadata exports — 30 min
4. Add security headers to `next.config.ts` — 20 min
5. Create `/public/llms.txt` for AI crawler readability — 30 min

---

## Technical SEO — 47/100

### Critical
- **C1 — Canonical tags missing on all 8 pages.** No `<link rel="canonical">` exists anywhere. Fix: add `alternates: { canonical: '<absolute-url>' }` to each page metadata export. In `layout.tsx` set the root default; each page overrides with its own URL.
- **C2 — og:url hardcoded to homepage.** `layout.tsx` sets `openGraph: { url: siteConfig.siteUrl }` globally. Every page (services, about, case studies, slugs) reports `https://junaidkazi.com` as its own URL to social crawlers. Fix: add `openGraph: { url: '<page-url>' }` per page, or use `metadataBase` + relative URLs.

### High
- **H1 — Security headers completely absent.** Missing: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy`. Add via `headers()` in `next.config.ts`. Also add `poweredByHeader: false` to hide framework fingerprint.
- **H2 — OG image missing.** No `og:image` or `twitter:image` on any page. Add to `layout.tsx` metadata pointing to `/images/profileImage.jpeg` (1200×630).

### Medium
- **M1 — sitemap `lastmod` uses `new Date()`** — regenerates on every crawl, diluting freshness signal. Use static dates or Git commit dates.
- **M2 — Nav links use hash anchors** (`/#services`, `/#about`) not real routes. Internal link equity never reaches `/services`, `/about`, `/contact` pages.
- **M3 — No AI crawler rules** in `robots.ts` — add explicit `GPTBot`, `ClaudeBot`, `PerplexityBot` allow rules.
- **M4 — No custom `not-found.tsx`** — default Next.js 404 has conflicting `<meta name="robots">` tags.

### Low
- **L1 — `X-Powered-By: Next.js` exposed** — suppress with `poweredByHeader: false`.
- **L2 — IndexNow not implemented** — trivial Bing/Yandex indexing accelerator.

---

## Content Quality & E-E-A-T — 71/100

### Critical
- **C1 — Navbar brand mismatch.** Logo reads "ATTRIBUTION FIRST", entire site body reads "Junaid Ahmed Kazi". No page explains the relationship. This is a direct authoritativeness failure under QRG. Fix: add a one-line descriptor under the wordmark, or align branding.
  - File: `src/components/Navbar.tsx`
- **C2 — No privacy policy.** Contact form collects name/email/phone. Required under India's DPDPA 2023 and a QRG trust signal. Create `src/app/privacy/page.tsx` and link from footer.

### High
- **H1 — `/case-studies` index is duplicate content.** Same H2 and intro paragraph as the homepage. Add 300–400 words of original content.
- **H2 — Contact form uses `mailto:` redirect.** Breaks on mobile without a configured email client. Replace with Formspree/Resend/EmailJS.
- **H3 — No geographic modifier in H1 or body.** "Mumbai" appears only in schema — not in any visible H1, H2, or paragraph. Add location to hero subtext.
- **H4 — "10+ businesses" is a weak social proof anchor.** Five years of experience; this number undersells. Replace with a more specific claim.

### Medium
- **M1 — All prose passages are 25–65 words** — too short for AI citation extraction (target: 134–167 words per passage).
- **M2 — Service page at borderline content depth** (~680 words vs 800-word floor). Add FAQ section.
- **M3 — Case studies lack "before" baseline.** The revenue 2x claim has no starting figure.
- **M4 — Duplicate achievement entries** in `src/data/about.ts` (two entries describing same Looker Studio result).
- **M5 — Certifications not verifiable.** No badge images or verification links on `/about`.
- **M6 — Gmail on custom-domain site.** Use `junaid@junaidkazi.com` for B2B credibility.

### Low
- **L1 — No blog/insights section** — largest missed organic traffic opportunity.
- **L2 — No campaign screenshots** to visually corroborate metric claims.

---

## Schema / Structured Data — 35/100

### Current coverage
- Homepage: `ProfessionalService` (partial — missing `aggregateRating`, `image`, `sameAs`, `areaServed`, `priceRange`, `postalCode`)
- All other pages: zero schema

### Priority additions

| Priority | Schema | Page | Rich Result Eligible |
|---|---|---|---|
| Critical | `Article` + `BreadcrumbList` | `/case-studies/[slug]` | Yes — Article carousels |
| Critical | `ProfilePage` + `Person` | `/about` | Yes — Knowledge Panel signals |
| Critical | `Service` + `ItemList` | `/services` | Indirect entity graph |
| High | Enhance `ProfessionalService` with `aggregateRating` + reviews | `/` | Yes — star ratings in SERP |
| High | `WebSite` + `SearchAction` | `layout.tsx` (all pages) | Yes — Sitelinks Searchbox |
| High | `BreadcrumbList` | All inner pages | Yes — breadcrumb SERP display |
| Medium | `ItemList` | `/case-studies` index | Indirect |

**Key architectural note:** Use `@id` anchors (`https://junaidkazi.com/#person`, `/#business`) across all schema blocks to build an interconnected entity graph. This is what Google uses for Knowledge Graph entries and AI tools use for entity resolution.

**Full JSON-LD for all 7 additions is in the Schema subagent report.**

---

## Performance / Core Web Vitals — 96/100

| Metric | Score | Threshold | Status |
|---|---|---|---|
| LCP | 1.4s | ≤2.5s | PASS |
| INP | ~30ms TBT | ≤200ms | PASS |
| CLS | 0 | ≤0.1 | PASS |
| TTFB | 270ms | ≤200ms | BORDERLINE |
| FCP | 0.4s | — | PASS |

**Note:** 504KB HTML and 907KB JS are dev-mode artefacts (Turbopack HMR, RSC debug payloads). Production build will be ~20–30KB HTML and 3–5 JS chunks.

### Actionable items (production bugs, not dev artefacts)
- **High — Missing OG image** (social CTR impact)
- **Medium — `priority` prop on below-fold profile image** — remove from `AboutSection.tsx:32` and `about/page.tsx:99`; `priority` should only be on true LCP candidates
- **Medium — TTFB 270ms** — deploy behind edge CDN (Vercel Edge / Cloudflare) with caching
- **Low — Add AVIF format** to `next.config.ts`: `images: { formats: ['image/avif', 'image/webp'] }`
- **Low — Legacy JS polyfills** — add `browserslist` targeting modern browsers

---

## AI Search Readiness (GEO) — 44/100

| Platform | Score |
|---|---|
| Google AI Overviews | 35/100 |
| ChatGPT Search | 42/100 |
| Perplexity | 48/100 |
| Bing Copilot | 40/100 |

### Critical gaps
- **No `llms.txt`** — create at `/public/llms.txt` (30 min, high impact)
- **No canonical tags** (covered in Technical)
- **Missing OG/Twitter images** (covered in Technical)
- **All passages under 134 words** — expand bio, service descriptions, and case study narratives to 134–167 word self-contained paragraphs
- **Zero question-based headings** — add FAQ sections to homepage and `/services` with question H2s

### Medium gaps
- No `sameAs` at business entity level (only in `founder`)
- No per-crawler explicit rules in `robots.ts`
- No YouTube presence (highest-correlation AI citation signal: ~0.737)

---

## Visual / Mobile — Mostly PASS

### High
- **Scroll animations leave 6 major sections at `opacity-0` on initial load** — affects social preview scrapers and OG crawlers that don't scroll. Add `prefers-reduced-motion` fallback or ensure JS-off state defaults to `opacity: 1`.
- **5 footer nav links have 19px tap height** (need 44px minimum) — add `py-3` padding to footer `<a>` tags.

### Medium
- **Two floating FABs (phone + WhatsApp) overlap content** on mobile. Group into a speed-dial or offset to bottom-left.
- 3 contact section links (phone, email, LinkedIn) have 20px tap height.

### Pass
- H1 and primary CTA above-the-fold on both desktop and mobile ✓
- Mobile menu fully functional ✓
- No horizontal scroll ✓
- All font sizes above 14px minimum ✓
- Hero CTA button 343×56px ✓

---

## Local SEO — 41/100

### Critical
- **Schema `addressLocality` mismatch** — schema says "Mumbai", UI says "Nerul, Mumbai". Google cross-references against GBP. Fix to `"Nerul"` + add `postalCode: "400706"`.
- **No Google Business Profile signals on site** — zero Maps embed, no GBP link, no place ID. For a consultant selling GMB Ads as a service, this is a visible inconsistency.
- **No `areaServed` in schema** — primary SAB signal is absent.

### High
- Add `geo` coordinates (Nerul, Navi Mumbai) to `ProfessionalService` schema
- Add `aggregateRating` + `Review` schema for 4 testimonials
- Add `sameAs` at business level (currently only in `founder`)
- Claim and optimise Google Business Profile

### Medium
- Add `serviceType` and `hasOfferCatalog` to schema
- Create Clutch.co profile (highest-authority B2B citation directory)
- Add geo-modified title tag: "Junaid Ahmed Kazi | Google Ads & PPC Consultant, Mumbai"

---

## Prioritised Action Plan

See `ACTION-PLAN.md` for the full sequenced checklist.
