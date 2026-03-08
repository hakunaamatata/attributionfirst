# PRD: Junaid Ahmed Kazi - Performance Marketing Portfolio Website

## 1. Overview

A modern, high-converting personal portfolio website for Junaid Ahmed Kazi, a Performance Marketing Expert with 4.5+ years of experience. The site positions Junaid as an authority in Google Ads and Meta Ads management and converts visitors into leads via Call and WhatsApp CTAs.

## 2. Goals

- Establish credibility and authority in performance marketing
- Convert visitors into leads (primary: phone call, secondary: WhatsApp chat)
- Showcase measurable results through case studies
- Rank for relevant SEO keywords (google ads expert mumbai, performance marketing consultant)
- Provide a professional landing page for paid traffic campaigns

## 3. Target Audience

- Small-to-medium business owners looking for PPC/paid ads help
- Marketing managers evaluating freelance or agency support
- Startup founders seeking ROI-driven lead generation
- Companies looking for Google Ads / Meta Ads campaign management

## 4. Persona

| Field | Detail |
|-------|--------|
| Name | Junaid Ahmed Kazi |
| Title | Performance Marketing Expert |
| Phone | +91-9545087538 |
| Email | junaidkazi66@gmail.com |
| LinkedIn | linkedin.com/in/junaid-kazi-b205b0222 |
| Location | Nerul, Mumbai - 400706 |
| Experience | 4.5+ years |
| Current Role | Assistant Manager - Digital, Thomas Cook India |
| Past Roles | PPC Lead (Crimson Interactive), SEM Analyst (ReachLocal India), Freelance |
| Expertise | Google Ads, Meta Ads, Bing Ads, GA4, GTM, PPC, CRO, Webflow, Firebase |
| Key Results | 35% ROI increase, 40% cost reduction, 2x revenue uplift, 40% traffic growth |
| Certifications | Google Ads Search, GA4, Microsoft Ads, Meta Social Media Marketing, Advanced Google Ads |

## 5. Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (via next/font/google)
- **Deployment**: Vercel (recommended)

## 6. Sitemap

```
/                       Homepage (8 sections)
/services               Services listing with details
/case-studies           Case studies grid
/case-studies/[slug]    Individual case study detail
/about                  Full about page with timeline
/contact                Contact form + info
/lp/google-ads          Conversion-focused landing page (no nav)
```

## 7. Page Specifications

### 7.1 Homepage

| Section | Content |
|---------|---------|
| Hero | Headline, subtext, 2 CTA buttons, analytics dashboard illustration |
| Trust Metrics | 4 animated counters (₹7Cr+ spend, 2000+ leads, 5x ROAS, 3 projects) |
| Case Studies | 3 featured project cards with metrics |
| Services | 5 service cards with icons |
| Process | 5-step timeline (Discovery → Scaling) |
| About | Profile photo, bio, skill tags |
| Testimonials | 3 testimonial cards |
| Final CTA | "Let's Grow Your Business" with Call + WhatsApp buttons |

### 7.2 Services Page

5 services with detailed descriptions, features, and CTAs:
1. Performance Marketing
2. Google Ads Management
3. Meta Ads Campaigns
4. Lead Generation Funnels
5. Landing Page Optimization

### 7.3 Case Studies Page

Grid of case study cards. Each card shows: title, industry, ad spend, leads, ROAS.

### 7.4 Case Study Detail Page

Sections: Hero banner, Metrics bar, Challenge, Strategy, Results, Key Takeaways, CTA.

### 7.5 About Page

Profile, bio, experience timeline, certifications grid, skills tags, education.

### 7.6 Contact Page

Two-column: contact form (left) + direct contact info (right).

### 7.7 Landing Page (/lp/google-ads)

Standalone conversion page: aggressive headline, social proof bar, problem/solution, mini case studies, lead capture form. No navbar links. Noindex for SEO.

## 8. Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #0F172A | Dark backgrounds, headings |
| Primary Light | #1E293B | Card backgrounds on dark |
| Accent | #22C55E | CTA buttons, highlights |
| Accent Hover | #16A34A | Button hover |
| Surface | #F8FAFC | Alternating section bg |
| Text Primary | #0F172A | Headings on light |
| Text Secondary | #64748B | Body text |
| Text Inverse | #FFFFFF | Text on dark |
| WhatsApp | #25D366 | WhatsApp buttons |

### Typography

- Font: Inter
- H1: 4xl-6xl, bold
- H2: 3xl-4xl, bold
- H3: xl-2xl, semibold
- Body: base-lg, normal
- Small: sm, medium

### Spacing

- Section padding: py-16 to py-24
- Container: max-w-7xl mx-auto px-4-8
- Card padding: p-6 to p-8

## 9. CTA Behavior

| Action | Desktop | Mobile |
|--------|---------|--------|
| Book Strategy Call | Opens tel: link | Opens native dialer |
| Chat on WhatsApp | Opens wa.me link in new tab | Opens WhatsApp app |
| Floating WhatsApp | Fixed bottom-right, pulse animation | Same, slightly smaller |
| Floating Call | Fixed bottom-right, above WhatsApp | Same |

## 10. SEO Requirements

- Unique title + description per page
- Open Graph + Twitter Card meta tags
- JSON-LD structured data (Person + ProfessionalService)
- Auto-generated sitemap.xml
- robots.txt (allow all except /lp/)
- Semantic HTML with proper heading hierarchy
- Image alt attributes
- Canonical URLs

## 11. Success Metrics

- Page load time < 2 seconds
- Lighthouse score > 90 (Performance, SEO, Accessibility)
- CTA click-through rate tracking ready
- Mobile-first responsive design verified on 375px, 768px, 1024px, 1440px
