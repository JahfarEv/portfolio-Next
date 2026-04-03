// import {
//   CodeBracketSquareIcon,
//   CommandLineIcon,
//   RocketLaunchIcon,
// } from "@heroicons/react/20/solid";
// import React from "react";

// const Services = () => {
//   return (
//     <div className="bg-[#121212] pt-[4rem] md:pt-[8rem]">
      
//       <p className="heading lg:mt-[-10vh]">
//         My{" "}
//         <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//           Services
//         </span>
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] mx-auto items-center gap-[6rem] mt-[4rem] text-white">
//         <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
//           <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//           <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
//             Frontend
//           </h1>
//           <p className="text-[15px] text-[#d3d2d2] font-normal">
//             I build responsive, visually appealing interfaces with React.js and
//             Tailwind CSS, ensuring seamless user experiences.{" "}
//           </p>
//         </div>
//         <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
//           <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//           <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
//             Backend
//           </h1>
//           <p className="text-[15px] text-[#d3d2d2] font-normal">
//             I develop secure, efficient backends with Node.js and MongoDB,
//             ensuring reliable and robust server-side performance.
//           </p>
//         </div>
//         <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
//           <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//           <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
//             Fullstack
//           </h1>
//           <p className="text-[15px] text-[#d3d2d2] font-normal">
//             I specialize in both frontend and backend, delivering complete,
//             high-quality web applications from start to finish.
//           </p>
//         </div>
//       </div>
//         <div className="text-center mt-12 md:mt-16">
//           <div className="inline-flex items-center gap-2 text-slate-400">
//             <span className="w-8 h-px bg-gradient-to-r from-transparent to-teal-400"></span>
//             <span className="text-sm">Ready to bring your ideas to life?</span>
//             <span className="w-8 h-px bg-gradient-to-l from-transparent to-teal-400"></span>
//           </div>
//           <button
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
//           >
//             Let's Work Together
//           </button>
//         </div>
//     </div>
//   );
// };

// export default Services;



import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:py-[8rem]">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Centered Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 mb-4">
            <SparklesIcon className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
              What I Offer
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MY{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          
          {/* Optional: Add an underline for better visual appeal */}
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6rem] mt-[4rem] text-white">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-xl">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              I build responsive, visually appealing interfaces with React.js and
              Tailwind CSS, ensuring seamless user experiences.
            </p>
          </div>
          
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-xl">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              I develop secure, efficient backends with Node.js and MongoDB,
              ensuring reliable and robust server-side performance.
            </p>
          </div>
          
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] rounded-xl">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              I specialize in both frontend and backend, delivering complete,
              high-quality web applications from start to finish.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-teal-400"></span>
            <span className="text-sm">Ready to bring your ideas to life?</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-teal-400"></span>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;