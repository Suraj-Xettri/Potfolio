import React from "react";
import SocialIcon from "../ui/SocialIcon";
import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-[#e6f1ff]">
            Get In Touch
          </h2>
          <p className="text-[#8892b0]">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>
        <div className="max-w-md mx-auto bg-[#112240] rounded-lg p-8 shadow-lg">
          <form>
            <div className="mb-6 relative">
              <input
                type="text"
                id="name"
                className="w-full bg-[#0a192f] border-none text-[#e6f1ff] p-4 rounded focus:ring-2 focus:ring-[#64ffda] focus:outline-none transition-all duration-300"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-[#8892b0] left-4 top-4 transition-all duration-300 pointer-events-none"
              >
                Name
              </label>
            </div>
            <div className="mb-6 relative">
              <input
                type="email"
                id="email"
                className="w-full bg-[#0a192f] border-none text-[#e6f1ff] p-4 rounded focus:ring-2 focus:ring-[#64ffda] focus:outline-none transition-all duration-300"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-[#8892b0] left-4 top-4 transition-all duration-300 pointer-events-none"
              >
                Email
              </label>
            </div>
            <div className="mb-6 relative">
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#0a192f] border-none text-[#e6f1ff] p-4 rounded focus:ring-2 focus:ring-[#64ffda] focus:outline-none transition-all duration-300"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-[#8892b0] left-4 top-4 transition-all duration-300 pointer-events-none"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-transparent border-2 border-[#64ffda] text-[#64ffda] py-3 rounded font-montserrat font-medium hover:bg-[#64ffda]/10 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            {socials.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} url={social.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
