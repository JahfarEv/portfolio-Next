import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-8 pb-4 md:pt-[8rem] md:pb-[1rem]">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 lg:mt-[-10vh] text-white">
        PRO
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          JECTS
        </span>
      </h1>

      {/* Projects Grid */}
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-[3rem] mt-8">
        {/* Project Items */}
        {[
          {
            href: "https://vyzo.netlify.app",
            image: "/vyzoscr.png",
            title: "Vyzo Static Website",
            description: "Developed Vyzo's responsive static platform..."
          },
          {
            href: "https://highhydration-web-beta.vercel.app",
            image: "/project1.png",
            title: "Hydration Web App",
            description: "Modern web application built with Next.js..."
          },
          {
            href: "#",
            image: "/whatsapp-chatbot.png",
            title: "WhatsApp Chatbot",
            description: "AI-powered chatbot integration..."
          },
          {
            href: "https://hubvyzo.netlify.app",
            image: "/hub-vyzo1.jpg",
            title: "Vyzo Hub Platform",
            description: "Community collaboration platform..."
          }
        ].map((project, index) => (
          <Link
            key={index}
            href={project.href}
            target="_blank"
            className="group block perspective-[1000px] w-full h-[300px] sm:h-[350px] mx-auto"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden border-teal-400 border-2 sm:border-[3px] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-white p-4 sm:p-6 flex flex-col items-center justify-center border-teal-400 border-2 sm:border-[3px] rounded-xl sm:rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-center overflow-y-auto">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;