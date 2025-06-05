import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 relative inline-block">
              <span className="text-[#e6f1ff]">About Me</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64ffda]/50"></span>
            </h2>
            <p className="text-[#8892b0] mb-4">
              Hello! I'm John, a passionate full-stack developer specializing in
              the MERN stack. My journey in web development began 5 years ago
              when I decided to try customizing a WordPress theme — turns out
              hacking together a custom CSS file taught me a lot about how the
              web works.
            </p>
            <p className="text-[#8892b0] mb-4">
              Fast-forward to today, and I've had the privilege of working at a
              digital agency, a start-up, and a large corporation. My main focus
              these days is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>
            <p className="text-[#8892b0] mb-6">
              I also recently launched a course that covers everything you need
              to build a web app with the MERN stack from scratch.
            </p>
            <p className="text-[#64ffda] font-medium">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                "JavaScript (ES6+)",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
                "Redux",
                "GraphQL",
              ].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span className="text-[#8892b0]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-5 translate-y-5"></div>
              <div className="absolute inset-0 bg-[#0a192f]/30 hover:bg-transparent transition-all duration-300 cursor-pointer z-10"></div>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20software%20developer%20with%20modern%20tech%20aesthetic%2C%20dark%20navy%20blue%20background%20with%20subtle%20tech%20elements%2C%20professional%20headshot%20style%2C%20neutral%20expression%2C%20modern%20professional%20attire%2C%20high%20quality%20studio%20lighting%2C%20ultra-detailed%208k%20resolution&width=400&height=400&seq=3&orientation=squarish"
                alt="John Doe"
                className="w-full h-full object-cover rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
