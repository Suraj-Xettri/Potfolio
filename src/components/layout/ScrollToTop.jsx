import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => scrollToSection("home")}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#112240] text-[#64ffda] flex items-center justify-center shadow-lg hover:bg-[#64ffda]/20 transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
    >
      <FaArrowUp size={20} />
    </button>
  );
}
