
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import React from 'react';

const Index = () => {
  return (
    <>
      <div className="animated-background" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="firefly" />
        ))}
      </div>
      <div className="relative min-h-screen">
        <Navigation />
        <main id="main-content" className="relative z-10">
          <Hero />
          <Projects />
          <Articles />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
