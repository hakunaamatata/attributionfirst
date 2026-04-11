import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import FadeInSection from "@/components/FadeInSection";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: "Attribution First",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.siteUrl}/images/profileImage.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400706",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person-junaid`,
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: `${siteConfig.siteUrl}/about`,
    },
    areaServed: { "@type": "Country", name: "India" },
    sameAs: [siteConfig.linkedin],
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
        <FAQSection />
      </FadeInSection>
      <FadeInSection>
        <ContactSection />
      </FadeInSection>
      <FinalCTA />
    </>
  );
}
