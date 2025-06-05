import React from "react";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-12 text-center relative inline-block">
          <span className="text-[#e6f1ff]">My Tech Stack</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64ffda]/50"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
