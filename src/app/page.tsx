import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import FinalCTA from "@/components/home/FinalCTA";
import FadeInSection from "@/components/FadeInSection";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: siteConfig.linkedin,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <HeroSection />
      <MetricsSection />
      <FadeInSection>
        <FeaturedCaseStudies />
      </FadeInSection>
      <FadeInSection>
        <ServicesSection />
      </FadeInSection>
      <FadeInSection>
        <ProcessSection />
      </FadeInSection>
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection>
        <ContactSection />
      </FadeInSection>
      <FinalCTA />
    </>
  );
}
