import Image from "next/image";

const skills = [
  "Google Ads", "Meta Ads", "Bing Ads", "GA4", "GTM",
  "PPC", "SEM", "CRO", "A/B Testing", "Webflow",
  "Firebase", "Salesforce CRM",
];

const highlights = [
  { label: "Experience", value: "5+ Years" },
  { label: "Current Role", value: "Thomas Cook India" },
  { label: "Expertise", value: "Google & Meta Ads" },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section py-16 md:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="about-photo-wrap relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[500px] mx-auto lg:mx-0">
              <div className="about-photo-inner aspect-square w-full rounded-2xl overflow-hidden relative bg-primary-light">
                <Image
                  src="/images/profileImage.jpeg"
                  alt="Junaid Ahmed Kazi - Performance Marketing Expert"
                  fill
                  className="object-cover object-[center_top]"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
                  priority
                />
              </div>
              <div className="about-stat-card-float absolute -bottom-3 -right-3 bg-white/90 rounded-xl p-3 backdrop-blur-[8px] border border-[rgba(0,201,167,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <p className="text-xs text-text-secondary leading-snug">Ad Spend Managed</p>
                <p className="text-base md:text-lg font-bold text-accent leading-tight">₹7Cr+</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="about-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
              Hi, I&apos;m Junaid Ahmed Kazi
            </h2>
            <p className="about-bio text-base md:text-lg mb-3" style={{ color: "#374151", lineHeight: 1.8 }}>
              Digital marketing professional with over 5 years of experience
              in data-driven marketing strategy and campaign execution. Expert
              in Google Ads and Meta Ads with a track record of delivering 35%
              ROI increases and 40% ad spend reductions while maintaining lead
              quality.
            </p>
            <p className="about-bio text-base mb-8" style={{ color: "#374151", lineHeight: 1.8 }}>
              Currently serving as Assistant Manager - Digital at Thomas Cook
              India, where I develop cross-platform campaigns, optimize user
              acquisition through Firebase Analytics integration, and manage
              performance across Google, Meta, and App install campaigns.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className={`about-stat-card bg-surface rounded-xl text-center ${h.label === "Current Role" ? "about-stat-card-featured" : ""}`} style={{ padding: "20px 24px", minHeight: "80px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <p className="text-primary font-bold text-sm md:text-base leading-tight">{h.value}</p>
                  <p className="text-text-secondary text-xs mt-1 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>

            <div className="about-skill-tags flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`about-skill-tag about-skill-tag-${(i % 5) + 1} text-xs font-medium px-3 py-1.5 rounded-full border leading-snug`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
