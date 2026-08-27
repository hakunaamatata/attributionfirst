import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import Scrollytelling from "@/components/Scrollytelling";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Metrics from "@/components/Metrics";
import Comparison from "@/components/Comparison";
import Founder from "@/components/Founder";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurApproach />
        <Scrollytelling />
        <Services />
        <Process />
        <CaseStudies />
        <Metrics />
        <Comparison />
        <Founder />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
