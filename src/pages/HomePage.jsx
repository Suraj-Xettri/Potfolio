import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff] font-poppins relative">
      {/* Background circuit pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-circuit-pattern"
          style={{ backgroundSize: "cover" }}
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
