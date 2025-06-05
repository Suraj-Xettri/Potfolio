import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff] font-poppins relative">
      {/* Background circuit pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-[url('back.jpg')]"
          style={{ backgroundSize: "cover" }}
        />
      </div>

      <Navbar activeLink={activeLink} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop scrollToSection={scrollToSection} />
    </div>
  );
}
