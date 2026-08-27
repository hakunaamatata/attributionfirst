import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ValuePillars from "@/components/ValuePillars";
import ProblemSection from "@/components/ProblemSection";
import PhilosophySection from "@/components/PhilosophySection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Metrics from "@/components/Metrics";
import Comparison from "@/components/Comparison";
import Founder from "@/components/Founder";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ValuePillars />
        <ProblemSection />
        <PhilosophySection />
        <Services />
        <Process />
        <CaseStudies />
        <Metrics />
        <Comparison />
        <Founder />
        <Insights />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
