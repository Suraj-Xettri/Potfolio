import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-12 text-center relative inline-block">
          <span className="text-[#e6f1ff]">Featured Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64ffda]/50"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] font-montserrat rounded hover:bg-[#64ffda]/10 transition-all duration-300 cursor-pointer">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
