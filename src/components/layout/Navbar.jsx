import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const isScrolled = useScrollPosition();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0a192f]/80 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-montserrat font-bold text-[#64ffda]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <span className="text-[#00a8ff]">&lt;</span>
          Dev<span className="text-[#00a8ff]">Portfolio</span>
          <span className="text-[#00a8ff]">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-montserrat text-sm uppercase tracking-wider ${
                activeLink === item.id
                  ? "text-[#64ffda]"
                  : "text-[#e6f1ff] hover:text-[#64ffda]"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeLink === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64ffda] rounded-full"></span>
              )}
            </button>
          ))}
          <Link
            to="/projects"
            className="relative font-montserrat text-sm uppercase tracking-wider text-[#e6f1ff] hover:text-[#64ffda]"
          >
            All Projects
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#e6f1ff] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-6 relative transform transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          >
            <span
              className={`block w-full h-0.5 bg-[#64ffda] rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-[#64ffda] rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-90 -translate-y-0.5" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-[#64ffda] rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-[#0a192f]/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`py-2 font-montserrat text-sm uppercase tracking-wider ${
                activeLink === item.id ? "text-[#64ffda]" : "text-[#e6f1ff]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/projects"
            className={`py-2 font-montserrat text-sm uppercase tracking-wider ${
              activeLink === "projects" ? "text-[#64ffda]" : "text-[#e6f1ff]"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            All Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
