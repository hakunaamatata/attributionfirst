# PRD: Attribution First — Performance Marketing Portfolio
**Version:** 2.0 (Final) | **Last Updated:** April 4, 2026 | **Status:** Live

---

## 1. Overview

A high-converting personal portfolio and inbound lead-generation site for Junaid Ahmed Kazi, a Performance Marketing Expert with 4.5+ years of experience. Branded as **Attribution First**, the site positions Junaid as an authority in Google Ads, Meta Ads, and marketing attribution infrastructure, converting visitors into leads via Call and WhatsApp CTAs.

**Live URL:** https://www.attributionfirst.co.in
**GitHub:** https://github.com/hakunaamatata/attributionfirst

---

## 2. Goals

- Establish credibility and authority in performance marketing and attribution
- Convert visitors into qualified leads (primary: phone call, secondary: WhatsApp)
- Showcase measurable case study results to reduce sales friction
- Rank for target SEO keywords (Google Ads expert Mumbai, performance marketing consultant, attribution infrastructure)
- Serve as a landing destination for paid traffic campaigns

---

## 3. Target Audience

| Segment | Pain Point |
|---|---|
| SMB owners | Wasting ad spend with no attribution clarity |
| Marketing managers | ROAS declining, need expert audit |
| Startup founders | Need ROI-driven lead generation at scale |
| E-commerce brands | Attribution broken after iOS 14+ |
| B2B companies | High-ticket lead generation via paid channels |

---

## 4. Persona

| Field | Detail |
|---|---|
| Name | Junaid Ahmed Kazi |
| Brand | Attribution First |
| Title | Performance Marketing Expert |
| Phone | +91-9545087538 |
| Email | junaidkazi66@gmail.com |
| LinkedIn | linkedin.com/in/junaid-kazi-b205b0222 |
| Location | Nerul, Mumbai — 400706 |
| Experience | 4.5+ years |
| Current Role | Assistant Manager – Digital, Thomas Cook India |
| Past Roles | PPC Lead (Crimson Interactive), SEM Analyst (ReachLocal India), Freelance |
| Expertise | Google Ads, Meta Ads, Bing Ads, GA4, GTM, Server-Side Tracking, CRO, Firebase, Webflow |
| Key Results | ₹7Cr+ ad spend managed, 2000+ leads generated, 5x ROAS achieved, 35% ROI increase, 40% cost reduction |
| Certifications | Google Ads Search, GA4, Microsoft Ads, Meta Social Media Marketing, Advanced Google Ads |

---

## 5. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS 3.x |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (next/font/google) |
| Email | Resend (server-side API route) |
| Analytics | Google Tag Manager (GTM-542SQV8N) |
| Deployment | Vercel |
| Domain | attributionfirst.co.in |

---

## 6. Site Architecture

```
/                        Homepage — 9 sections (Hero, Metrics, Case Studies,
│                        Services, Process, About, Testimonials, FAQ, Contact)
├── /services            Services listing with detailed descriptions
├── /case-studies        Case studies grid
│   └── /[slug]         Individual case study detail page
├── /about              Full about page — timeline, certs, skills
├── /blog               Blog index
│   └── /[slug]         Individual blog post
├── /contact            Contact form + direct contact info
├── /lp/google-ads      Standalone conversion landing page (noindex, no navbar)
├── /privacy            Privacy policy (DPDPA 2023 compliance)
└── /api
    ├── /contact        Resend email handler with rate limiting
    └── /ads-stats      Live Google Ads stats for hero dashboard
```

---

## 7. Page Specifications

### 7.1 Homepage (`/`)

| Section | Component | Key Content |
|---|---|---|
| Hero | `HeroSection.tsx` | Headline, tagline, 2 CTAs, live Google Ads dashboard widget |
| Metrics | `MetricsSection.tsx` | 4 animated counters: ₹7Cr+ spend, 2000+ leads, 5x ROAS, 4.5 yrs |
| Case Studies | `FeaturedCaseStudies.tsx` | 3 featured cards with metrics (spend, leads, ROAS) |
| Services | `ServicesSection.tsx` | 6 service cards with icons |
| Process | `ProcessSection.tsx` | 5-step timeline: Discovery → Audit → Strategy → Launch → Scale |
| About | `AboutSection.tsx` | Profile photo, bio, skill tags |
| Testimonials | `TestimonialsSection.tsx` | 3 testimonial cards |
| FAQ | `FAQSection.tsx` | Common questions (schema-ready) |
| Contact | `ContactSection.tsx` | Inline contact form + direct links |

### 7.2 Services (`/services`)

6 services with detailed descriptions, feature lists, and CTAs:
1. Performance Marketing & Attribution
2. Google Ads Management
3. Meta Ads Campaigns
4. Lead Generation Funnels
5. Landing Page Optimization
6. Local Search & Google Ads (GMB)

### 7.3 Case Studies (`/case-studies` + `/case-studies/[slug]`)

- **Index:** Grid of cards — title, industry, ad spend, leads, ROAS
- **Detail:** Hero banner → Metrics bar → Challenge → Strategy → Results → Key Takeaways → CTA
- **Data source:** `src/data/caseStudies.ts`

### 7.4 Blog (`/blog` + `/blog/[slug]`)

- Static blog powered by `src/data/blog.ts`
- Index page with post cards
- Individual post pages

### 7.5 About (`/about`)

Profile, bio, career timeline, certifications grid, skill tags, education.

### 7.6 Contact (`/contact`)

Two-column layout: Resend-powered contact form (left) + direct contact info (right).

### 7.7 Landing Page (`/lp/google-ads`)

Standalone conversion page — aggressive headline, social proof bar, problem/solution, mini case studies, lead capture form. Custom layout (no navbar links). `noindex` meta tag set.

---

## 8. Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| Primary | #0F172A | Dark backgrounds, headings |
| Primary Light | #1E293B | Card backgrounds on dark sections |
| Accent | #22C55E | CTA buttons, highlights, badges |
| Accent Hover | #16A34A | Button hover state |
| Surface | #F8FAFC | Alternating section backgrounds |
| Text Primary | #0F172A | Headings on light backgrounds |
| Text Secondary | #64748B | Body text, captions |
| Text Inverse | #FFFFFF | Text on dark backgrounds |
| WhatsApp | #25D366 | WhatsApp-specific buttons |

### Typography

- **Font:** Inter
- **H1:** 4xl–6xl, bold
- **H2:** 3xl–4xl, bold
- **H3:** xl–2xl, semibold
- **Body:** base–lg, normal/medium
- **Small:** sm, medium

### Spacing

- Section padding: `py-16` to `py-24`
- Container: `max-w-7xl mx-auto px-4` to `px-8`
- Card padding: `p-6` to `p-8`

---

## 9. CTA Behavior

| Action | Trigger | Destination |
|---|---|---|
| Book Strategy Call | Button click | `tel:+919545087538` |
| Chat on WhatsApp | Button click | `wa.me/919545087538` (new tab) |
| Floating Call FAB | Fixed bottom-right | `tel:+919545087538` |
| Floating WhatsApp FAB | Fixed bottom-right (above Call) | `wa.me/919545087538` |
| Contact Form Submit | Form submit | POST `/api/contact` → Resend → junaidkazi66@gmail.com |

---

## 10. API Routes

### `POST /api/contact`
- Validates fields server-side
- Rate-limited (5 requests/IP/hour)
- Sends email via Resend SDK
- Returns JSON `{ success: true }` or error

### `GET /api/ads-stats`
- Fetches live Google Ads performance data
- Powers the hero dashboard widget
- Cached to avoid API quota burn

---

## 11. Analytics & Tracking

| Tool | ID | Purpose |
|---|---|---|
| Google Tag Manager | GTM-542SQV8N | Container for all tracking tags |
| Google Analytics 4 | Via GTM | Page views, CTA clicks, form submissions |
| Google Ads Conversion | Via GTM | Call click, WhatsApp click, form submit conversions |

GTM script is injected in `<head>` and noscript iframe immediately after `<body>` in `src/app/layout.tsx`.

---

## 12. SEO Configuration

| Element | Implementation |
|---|---|
| Title template | `%s | Attribution First` |
| metadataBase | `https://www.attributionfirst.co.in` |
| OG image | `/images/profileImage.jpeg` (1200×630) |
| Canonical | Per-page `alternates.canonical` |
| Sitemap | `src/app/sitemap.ts` (auto-generated) |
| Robots | `src/app/robots.ts` — allow all, disallow `/lp/` |
| llms.txt | `/public/llms.txt` — AI crawler readability |
| Structured data | `ProfessionalService` + `Person` on `/`, `WebSite` + `SearchAction` in layout |

---

## 13. Public Assets

```
/public
├── /images
│   └── profileImage.jpeg          Profile photo (also OG image)
├── /case-studies                  Case study PDF downloads
├── /resume                        Downloadable resume
├── llms.txt                       AI crawler declaration
└── google8cdfa68aa1ae2043.html    Google Search Console verification
```

---

## 14. Known Issues / Backlog

### High Priority
- [ ] Add per-page `openGraph.url` override in each page's metadata export
- [ ] Add `BreadcrumbList` schema to `/services`, `/about`, `/contact`, `/case-studies`
- [ ] Add `Article` schema to `/case-studies/[slug]`
- [ ] Add `ProfilePage` + `Person` schema to `/about`
- [ ] Add `aggregateRating` + `Review` schema to homepage (4 testimonials)
- [ ] Fix footer nav tap targets — add `py-3` to footer `<a>` links (currently 19px, need 44px)
- [ ] Fix scroll animation opacity-0 fallback for OG crawlers and `prefers-reduced-motion`
- [ ] Add security headers to `next.config.ts` (CSP, X-Frame-Options, HSTS, Referrer-Policy)

### Medium Priority
- [ ] Fix sitemap `lastmod` — replace `new Date()` with static dates
- [ ] Remove `priority` prop from below-fold images (`AboutSection.tsx:32`, `about/page.tsx:99`)
- [ ] Add AVIF format: `images: { formats: ['image/avif', 'image/webp'] }` in `next.config.ts`
- [ ] Expand prose passages to 134–167 words per section for AI citation eligibility
- [ ] Add geo coordinates to schema (Nerul: 19.03293, 73.01702)
- [ ] Fix `addressLocality` in schema: "Mumbai" → "Nerul", add `postalCode: "400706"`
- [ ] Group floating FABs into speed-dial or offset on mobile to prevent overlap
- [ ] Add explicit `GPTBot`, `ClaudeBot`, `PerplexityBot` allow rules to `robots.ts`
- [ ] Create custom `not-found.tsx` with explicit `noindex`

### Low Priority / Backlog
- [ ] Claim and optimise Google Business Profile (category: Marketing Consultant)
- [ ] Create Clutch.co profile for B2B credibility
- [ ] Add campaign screenshots or Looker Studio visuals to case studies
- [ ] Add YouTube channel (highest AI citation signal: ~0.737 correlation)
- [ ] Start blog — 3–4 articles on Firebase tracking, PMax for travel, B2B CPA reduction
- [ ] Add cert verification links / badge images to `/about`
- [ ] Implement IndexNow for instant Bing indexing
- [ ] Consider custom domain email: junaid@attributionfirst.co.in

---

## 15. Performance Targets

| Metric | Target | Current Status |
|---|---|---|
| Lighthouse Performance | > 90 | 96/100 (dev) |
| LCP | ≤ 2.5s | 1.4s |
| INP | ≤ 200ms | ~30ms TBT |
| CLS | ≤ 0.1 | 0 |
| TTFB | ≤ 200ms | 270ms (needs CDN) |
| SEO Health Score | > 80 | 62/100 (pre-fixes) |
