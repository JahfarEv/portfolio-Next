// import React from "react";
// import TextEffect from "./TextEffect";
// import Image from "next/image";
// import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";

// const Hero = () => {
//   const resumeUrl = "/JAHFAR ALI-RESUME.pdf";
//   const resumeFileName = "JAHFAR-RESUME-NEW.pdf";

//   const handleDownload = () => {
//     // Create a temporary anchor element for download
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = resumeFileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center py-[8rem] flex items-center">
//       <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">
//         {/* Text Content */}
//         <div className="order-2 lg:order-1 text-center lg:text-left">
//           <h1 className="text-[28px] sm:text-[35px] md:text-[45px] lg:text-[50px] text-white font-bold mb-4">
//             HI, I&apos;M
//             <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent block mt-2">
//               JAHFAR ALI!
//             </span>
//           </h1>

//           <TextEffect />
//           <p className="mt-4 md:mt-[1.5rem] text-[16px] sm:text-[18px] md:text-[20px] text-[#ffffff92] px-2 sm:px-0">
//             Hi! I am Jahfar Ali, a dedicated MERN Stack Developer with a knack
//             for crafting seamless and responsive web applications. Explore my
//             work, dive into my projects, and see how I turn ideas into
//             functional digital experiences. Let's build something amazing
//             together!
//           </p>

//           <div className="mt-6 md:mt-[2rem] flex justify-center lg:justify-start gap-4 flex-col sm:flex-row">
//             <button
//               className="px-4 py-2 md:px-[2rem] md:py-[1rem] hover:bg-teal-500 transition-all duration-200 text-[14px] md:text-[18px] font-bold uppercase bg-white text-black flex items-center gap-2 mx-auto lg:mx-0"
//               onClick={handleDownload}
//             >
//               <p>Download CV</p>
//               <ArrowDownTrayIcon className="w-4 h-4 md:w-[1.6rem] md:h-[1.7rem] text-black" />
//             </button>
//             {/* </Link> */}
//           </div>
//         </div>

//         {/* Image */}
//         <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-end w-full">
//           <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full">
//             <Image
//               src="/Jahfar3.png"
//               alt="user"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-full"
//               priority
//             />
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
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  const resumeUrl = "/JAHFAR ALI-RESUME.pdf";
  const resumeFileName = "JAHFAR-RESUME-NEW.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-16 md:py-24 flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            HI, I&apos;M
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent block mt-2">
              JAHFAR ALI!
            </span>
          </h1>

          <TextEffect />

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Hi! I am Jahfar Ali, a dedicated MERN Stack Developer with a knack for crafting seamless and responsive web applications. Explore my work, dive into my projects, and see how I turn ideas into functional digital experiences. Let&apos;s build something amazing together!
          </p>

          <div className="flex justify-center lg:justify-start pt-4">
            <button 
              onClick={handleDownload}
              className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <span>Download CV</span>
              <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
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
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Optional: Add a subtle ring effect */}
            <div className="absolute inset-0 rounded-full ring-2 ring-teal-400/20 animate-ping" style={{animationDuration: '3s'}}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;