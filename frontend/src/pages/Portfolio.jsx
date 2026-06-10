import { useEffect } from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Metrics from "@/components/portfolio/Metrics";
import Expertise from "@/components/portfolio/Expertise";
import TechStack from "@/components/portfolio/TechStack";
import Timeline from "@/components/portfolio/Timeline";
import Certifications from "@/components/portfolio/Certifications";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Lakhdar DAMAR — Chef de Projet IT Infrastructure";
  }, []);

  return (
    <main data-testid="portfolio-page" className="grain bg-[#FFFFFF] text-[#0B0D10] min-h-screen relative">
      <Nav />
      <Hero />
      <About />
      <Metrics />
      <Expertise />
      <TechStack />
      <Timeline />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
