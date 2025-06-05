import React, { useState, useEffect } from "react";

export default function Hero({ scrollToSection }) {
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('first.jpg')]"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
      </div>
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-[#64ffda] font-montserrat mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-4 text-[#e6f1ff]">
            Suraj Thapa
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-[#d5d7dd]">
            {typedText}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              |
            </span>
          </h2>
          <p className="text-[#c7cbd5] text-lg md:text-xl max-w-xl mb-8">
            I build exceptional digital experiences with the MERN stack.
            Specializing in creating robust, scalable web applications that
            deliver outstanding user experiences.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] font-montserrat rounded hover:bg-[#64ffda]/10 transition-all duration-300 cursor-pointer"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
