import React from "react";

export default function SocialIcon({ icon: Icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-[#8892b0] flex items-center justify-center text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] transition-all duration-300 cursor-pointer"
    >
      <Icon size={20} />
    </a>
  );
}
