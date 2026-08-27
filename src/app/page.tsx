import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VolumeProblem from "@/components/VolumeProblem";
import IntentSection from "@/components/IntentSection";
import Process from "@/components/Process";
import CaseStudySpotlight from "@/components/CaseStudySpotlight";
import FitCriteria from "@/components/FitCriteria";
import SimpleQuestions from "@/components/SimpleQuestions";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VolumeProblem />
        <IntentSection />
        <Process />
        <CaseStudySpotlight />
        <FitCriteria />
        <SimpleQuestions />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
