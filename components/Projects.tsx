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
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-[3rem] mt-8">
        {/* Project Items */}
        {[
          {
            href: "https://vyzo.netlify.app",
            image: "/vyzoscr.png",
            title: "Vyzo Static Website",
            description:
              "Developed a responsive static landing page for Vyzo to showcase its services, features, and brand presence using React.js, Tailwind CSS and Framer Motion.",
          },
          {
            href: "https://highhydration-web-beta.vercel.app",
            image: "/project1.png",
            title: "Hydration Web App",
            description:
              " Real-time water distribution management system built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, featuring role-based access and live order tracking.",
          },
          {
            href: "https://nutrivibex-smoothiedeit.netlify.app/",
            image: "/smoothie.png",
            title: "Smoothie Deit Landing Page",
            description:
              " Responsive affiliate marketing landing page for the Smoothie Diet, built using React.js and Tailwind CSS with a focus on clean UI and conversions.",
          },
          {
            href: "https://nutrivibex-mitolyn.netlify.app/",
            image: "/mitolyn.png",
            title: "Mitolyn-Boost Metabolism",
            description:
              "Affiliate marketing landing page for Mitolyn supplement, developed using React.js and Tailwind CSS with a responsive and conversion-optimized design.",
          },
          {
            href: "#",
            image: "/whatsapp-chatbot.png",
            title: "WhatsApp Chatbot",
            description:
              "Automated WhatsApp chatbot for real-time doctor availability and token number inquiries, built using Node.js, Express.js, WhatsApp Web.js, and Axios.",
          },
          {
            href: "https://hubvyzo.netlify.app",
            image: "/hub-vyzo1.jpg",
            title: "Vyzo Hub Platform",
            description:
              "Real-time hospital doctor appointment and activity management platform built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, supporting live updates and role-based access control.",
          },
        ].map((project, index) => (
          // <Link
          //   key={index}
          //   href={project.href}
          //   target="_blank"
          //   className="group block perspective-[1000px] w-full h-[300px] sm:h-[350px] mx-auto"
          // >
          //   <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
          //     {/* Front Side */}
          //     <div className="absolute inset-0 backface-hidden border-teal-400 border-2 sm:border-[3px] rounded-xl sm:rounded-2xl overflow-hidden">
          //       <Image
          //         src={project.image}
          //         alt={project.title}
          //         fill
          //         sizes="(max-width: 768px) 100vw, 50vw"
          //         className="object-cover"
          //       />
          //     </div>

          //     {/* Back Side */}
          //     <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-black p-4 sm:p-6 flex flex-col items-center justify-center border-teal-400 border-2 sm:border-[3px] rounded-xl sm:rounded-2xl">
          //       <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">
          //         {project.title}
          //       </h3>
          //       <p className="text-sm sm:text-base text-center overflow-y-auto">
          //         {project.description}
          //       </p>
          //     </div>
          //   </div>
          // </Link>

          <Link
            key={index}
            href={project.href}
            target="_blank"
            className="group block perspective-[1000px] w-full h-[300px] sm:h-[350px] mx-auto"
          >
            <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] group-hover:scale-105">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                {/* Inner container */}
                <div className="relative bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Animated gradient border for back */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl sm:rounded-2xl opacity-90 animate-pulse"></div>

                {/* Glassmorphism background */}
                <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-center justify-center h-full rounded-xl sm:rounded-2xl border border-white/10">
                  {/* Floating orbs for visual interest */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-bounce"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg animate-pulse"></div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-center overflow-y-auto text-gray-200 leading-relaxed relative z-10">
                    {project.description}
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white mt-4">
                    View Details
                  </button>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-pink-500/5 rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
