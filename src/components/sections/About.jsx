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
            <p className="text-[#8892b0] mb-2">
              Hello! I'm Suraj, a passionate full-stack developer specializing
              in the MERN stack. My journey in web development began 2 years ago
              when I decided to join bachelor’s in BIT and explore the world of
              coding. Since then, I've been dedicated to honing my skills and
              creating impactful web applications.
            </p>
            <p className="text-[#8892b0] mb-2">
              Over the past two years, I’ve worked independently on a wide range
              of personal and freelance projects, focusing on building
              responsive, user-friendly web applications. This hands-on
              experience has allowed me to continuously improve my development
              skills and stay current with industry best practices.
            </p>
            <p className="text-[#8892b0] mb-6">
              I’m currently focused on deepening my expertise in the MERN stack
              and exploring advanced topics such as performance optimization,
              scalable architecture, and deployment workflows.
            </p>

            <p className="text-[#64ffda] font-medium">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                "JavaScript (ES6+)",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "React Native",
                "Socket.IO",
                "MySQL",
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
                src="my.jpg"
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
