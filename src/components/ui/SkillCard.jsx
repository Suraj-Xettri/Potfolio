import React from "react";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="bg-[#112240] rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(0,168,255,0.3)] group">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0a192f] mb-4 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] transition-all duration-300">
          <Icon className="text-4xl text-[#64ffda] group-hover:text-[#00a8ff] transition-all duration-300" />
        </div>
        <h3 className="text-xl font-montserrat font-bold mb-2">{skill.name}</h3>
        <p className="text-[#8892b0] text-center mb-4">{skill.description}</p>
        <div className="w-full bg-[#0a192f] h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#64ffda] to-[#00a8ff] h-full rounded-full"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <p className="mt-2 text-[#64ffda]">{skill.level}%</p>
      </div>
    </div>
  );
}
