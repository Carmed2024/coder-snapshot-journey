
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <div className="animated-background" />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
