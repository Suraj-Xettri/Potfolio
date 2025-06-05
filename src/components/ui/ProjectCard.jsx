import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#112240] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(0,168,255,0.3)]">
      <div className="relative overflow-hidden h-48 group">
        <div className="absolute inset-0 bg-[#0a192f]/40 group-hover:bg-[#0a192f]/10 transition-all duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-2 text-[#e6f1ff]">
          {project.title}
        </h3>
        <p className="text-[#8892b0] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-xs font-medium bg-[#64ffda]/10 text-[#64ffda] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            <i className="fab fa-github"></i> Code
          </button>
          <button className="flex items-center gap-2 text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
