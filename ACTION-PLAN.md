# SEO Action Plan — junaidkazi.com
**Generated:** April 1, 2026 | **Overall Score: 62/100**

---

## CRITICAL — Fix immediately (est. 2–3 hours total)

- [ ] **Add canonical tags to all pages** — add `alternates: { canonical: '<url>' }` to metadata in `layout.tsx` (default) and each page file
- [ ] **Fix og:url per page** — replace hardcoded `openGraph: { url: siteConfig.siteUrl }` in `layout.tsx` with per-page absolute URLs
- [ ] **Add OG image** — add `openGraph: { images: [{ url: '/images/profileImage.jpeg', width: 1200, height: 630 }] }` to `layout.tsx`; also add `twitter: { images: ['/images/profileImage.jpeg'] }`
- [ ] **Add security headers** — add `headers()` to `next.config.ts` with CSP, X-Frame-Options, X-Content-Type-Options, HSTS, Referrer-Policy; add `poweredByHeader: false`
- [ ] **Resolve navbar brand mismatch** — add descriptor under "ATTRIBUTION FIRST" wordmark or align branding site-wide (`src/components/Navbar.tsx`)
- [ ] **Add privacy policy page** — create `src/app/privacy/page.tsx`, link from footer

---

## HIGH — Within 1 week (est. 6–8 hours total)

- [ ] **Enhance ProfessionalService schema** — add `aggregateRating`, `review` (4 testimonials), `image`, `sameAs`, `areaServed`, `priceRange`, `postalCode: "400706"`, fix `addressLocality` to "Nerul" (`src/app/page.tsx`)
- [ ] **Add WebSite + SearchAction schema** to `layout.tsx`
- [ ] **Add BreadcrumbList schema** to all inner pages (`/services`, `/about`, `/contact`, `/case-studies`, `/case-studies/[slug]`)
- [ ] **Add Article schema** to each case study detail page (`src/app/case-studies/[slug]/page.tsx`)
- [ ] **Add ProfilePage + Person schema** to `/about`
- [ ] **Add Service + ItemList schema** to `/services`
- [ ] **Create `/public/llms.txt`** — declare site purpose, services, and case study URLs for AI crawlers
- [ ] **Fix contact form** — replace `mailto:` with Formspree/Resend/EmailJS (`src/components/ContactForm.tsx`)
- [ ] **Fix footer nav tap targets** — add `py-3` padding to all footer `<a>` nav links
- [ ] **Fix scroll animation opacity-0 fallback** — ensure `prefers-reduced-motion` or JS-off state defaults to `opacity: 1`
- [ ] **Differentiate `/case-studies` index** — remove duplicate H2/intro; add 300–400 words of original content
- [ ] **Remove `priority` from below-fold images** — `src/components/home/AboutSection.tsx:32` and `src/app/about/page.tsx:99`
- [ ] **Fix schema addressLocality** — change "Mumbai" → "Nerul", add `postalCode: "400706"`, fix telephone to E.164 format

---

## MEDIUM — Within 1 month (est. 10–15 hours total)

- [ ] **Add FAQ section to `/services`** with question-based H2s and 140–160 word answers
- [ ] **Add geographic modifier to hero** — add "Based in Mumbai, India" to hero subtext (`src/components/home/HeroSection.tsx`)
- [ ] **Expand prose passages** to 134–167 words per section (bio, service descriptions, case study challenge blocks)
- [ ] **Add `areaServed` to ProfessionalService schema** — `["Mumbai", "Navi Mumbai", "India", "UAE", "USA"]`
- [ ] **Fix sitemap `lastmod`** — replace `new Date()` with static dates (`src/app/sitemap.ts`)
- [ ] **Add AVIF image format** — add `images: { formats: ['image/avif', 'image/webp'] }` to `next.config.ts`
- [ ] **Add `sameAs` at business level** in schema (LinkedIn URL)
- [ ] **Add `geo` coordinates** to ProfessionalService schema (Nerul, Navi Mumbai: 19.03293, 73.01702)
- [ ] **Group floating FABs** into speed-dial or offset to bottom-left on mobile
- [ ] **Add "before" baseline** to Thomas Cook revenue case study (`src/data/caseStudies.ts`)
- [ ] **Remove duplicate achievement entry** in `src/data/about.ts`
- [ ] **Add response time** to contact page ("Typically respond within 24 hours")
- [ ] **Update `robots.ts`** — add explicit `GPTBot`, `ClaudeBot`, `PerplexityBot` allow rules
- [ ] **Create custom `not-found.tsx`** with explicit `noindex`
- [ ] **Add explicit per-page OG metadata** to case study pages (unique title/description per slug)
- [ ] **Deploy behind CDN** to bring TTFB under 100ms (Vercel Edge / Cloudflare)

---

## LOW — Backlog

- [ ] Create Clutch.co profile and request one verified client review
- [ ] Claim and optimise Google Business Profile (category: "Marketing Consultant")
- [ ] Add cert verification links / badge images to `/about` certifications
- [ ] Consider custom domain email (`junaid@junaidkazi.com`)
- [ ] Add `browserslist` to drop legacy JS polyfills
- [ ] Implement IndexNow for instant Bing indexing
- [ ] Add `ItemList` schema to `/case-studies` index page
- [ ] Add campaign screenshots or Looker Studio visuals (redacted) to case studies
- [ ] Start blog/insights section (3–4 articles on Firebase tracking, PMax for travel, B2B CPA reduction)
- [ ] Add YouTube channel / video content (highest AI citation correlation signal: ~0.737)
- [ ] Add Reddit presence in r/PPC, r/googleads, r/IndiaMarketing
- [ ] Consider geo-modified title tag: "Junaid Ahmed Kazi | Google Ads & PPC Consultant, Mumbai"
- [ ] Add "Industries I Work With" section (Travel, B2B Tech, Local Business)
- [ ] Verify case study PDF files exist at `/public/case-studies/*.pdf`
