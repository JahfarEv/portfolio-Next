// import React from "react";
// import TextEffect from "./TextEffect";
// import Image from "next/image";
// import {
//   ArrowDownTrayIcon,
//   BriefcaseIcon,
//   UserGroupIcon,
// } from "@heroicons/react/20/solid";

// const Hero = () => {
//   const resumeUrl = "/JAHFAR ALI.pdf";
//   const resumeFileName = "JAHFAR ALI-RESUME.pdf";

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = resumeFileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleViewProjects = () => {
//     const projectsSection = document.getElementById("projects");
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleHireMe = () => {
//     const phoneNumber = "+919539794665"; // Your WhatsApp number
//     const message = encodeURIComponent("Hi Jahfar, I'd like to hire you!");
//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center py-16 md:py-24 flex items-center">
//       <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//         {/* Text Content */}
//         <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
//             <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//               Hi, I'm Jahfar
//             </span>
//           </h1>

//           {/* Role with typing animation */}
//           <div className="space-y-2">
//             <div className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
//               <TextEffect />
//             </div>
//             <p className="text-xl md:text-2xl text-teal-400 font-medium">
//               with 2+ Years Experience | Building scalable web apps & SaaS
//               products
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
//             <button
//               onClick={handleViewProjects}
//               className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center gap-3 hover:scale-105 justify-center"
//             >
//               <BriefcaseIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               <span>View Projects</span>
//             </button>

//             <button
//               onClick={handleHireMe}
//               className="group px-8 py-4 text-lg font-semibold bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-3 hover:scale-105 justify-center"
//             >
//               <UserGroupIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               <span>Hire Me</span>
//             </button>
//           </div>

//           {/* Optional: Keep the Download CV button as a secondary option */}
//           <div className="flex justify-center lg:justify-start pt-2">
//             <button
//               onClick={handleDownload}
//               className="group px-6 py-3 text-md font-medium bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105"
//             >
//               <span>Download CV</span>
//               <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {/* Image with Enhanced Design */}
//         <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//           <div className="relative group">
//             {/* Animated gradient glow */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

//             {/* Image container */}
//             <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105 mt-12 lg:mt-0">
//               <Image
//                 src="/Jahfar3.png"
//                 alt="Jahfar Ali - MERN Stack Developer"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-full"
//                 priority
//               />

//               {/* Overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>

//             {/* Decorative floating elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
//             <div
//               className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse"
//               style={{ animationDelay: "1s" }}
//             ></div>

//             {/* Optional: Add a subtle ring effect */}
//             <div
//               className="absolute inset-0 rounded-full ring-2 ring-teal-400/20 animate-ping"
//               style={{ animationDuration: "3s" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const Hero = () => {
  const resumeUrl = "/JAHFAR ALI.pdf";
  const resumeFileName = "JAHFAR ALI-RESUME.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMe = () => {
    const phoneNumber = "+919539794665"; // Your WhatsApp number
    const message = encodeURIComponent("Hi Jahfar, I'd like to hire you!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-16 md:py-24 flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Hi, I'm Jahfar
            </span>
          </h1>

          {/* Role with typing animation */}
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
              <TextEffect />
            </div>
            <p className="text-xl md:text-2xl text-teal-400 font-medium">
              with 2+ Years Experience | Building scalable web apps & SaaS
              products
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={handleViewProjects}
              className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center gap-3 hover:scale-105 justify-center"
            >
              <BriefcaseIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>View Projects</span>
            </button>

            <button
              onClick={handleHireMe}
              className="group px-8 py-4 text-lg font-semibold bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-3 hover:scale-105 justify-center"
            >
              <UserGroupIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Optional: Keep the Download CV button as a secondary option */}
          <div className="flex justify-center lg:justify-start pt-2">
            <button
              onClick={handleDownload}
              className="group px-6 py-3 text-md font-medium bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <span>Download CV</span>
              <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Image with Enhanced Design */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Animated gradient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105 mt-12 lg:mt-0">
              <Image
                src="/Jahfar3.png"
                alt="Jahfar Ali - MERN Stack Developer"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Optional: Add a subtle ring effect */}
            <div
              className="absolute inset-0 rounded-full ring-2 ring-teal-400/20 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;