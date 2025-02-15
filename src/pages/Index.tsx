
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="animated-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="firefly" />
        ))}
      </div>
      <div className="relative min-h-screen">
        <main className="relative z-10">
          <Navigation />
          <Hero />
          <Skills />
          <Projects />
          <Reviews />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
