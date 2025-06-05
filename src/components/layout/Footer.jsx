import React from "react";
import { socials } from "../../data/socials";
import SocialIcon from "../ui/SocialIcon";

export default function Footer({ scrollToSection }) {
  return (
    <footer className="py-8 bg-[#0a192f] relative">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-montserrat font-bold text-[#64ffda]">
                <span className="text-[#00a8ff]">&lt;</span>
                <span className="text-[#64ffda]">/</span>
                <span className="text-[#00a8ff]">&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#8892b0] mb-4">Built with the MERN Stack</p>
        <div className="flex justify-center space-x-4 mb-4">
          <span className="text-[#64ffda]">MongoDB</span>
          <span className="text-[#8892b0]">•</span>
          <span className="text-[#64ffda]">Express</span>
          <span className="text-[#8892b0]">•</span>
          <span className="text-[#64ffda]">React</span>
          <span className="text-[#8892b0]">•</span>
          <span className="text-[#64ffda]">Node.js</span>
        </div>
        <p className="text-[#8892b0]">
          © {new Date().getFullYear()} Suraj Thapa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
