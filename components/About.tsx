// import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const About = () => {
//   return (
//     <>
//      <div className="bg-[#121121] min-h-screen bg-center py-[8rem] flex items-center">
//      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">
//      {/* Left Side - Text Content */}
//       <div className="order-1 md:order-1">
//         <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
//           ABOUT{" "}
//           <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//             ME
//           </span>
//         </h2>
//         <div className="mb-[3rem] flex items-center md:space-x-10">
//           <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
//           <p className="text-[19px] text-slate-300 w-[80%]">
//             I’m a passionate MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. I specialize in React.js for front-end development, Node.js for backend services, and have successfully completed several full-stack projects. My focus is on creating efficient, scalable, and user-friendly solutions that bring ideas to life.
//           </p>
//         </div>
//         <Link href="https://www.linkedin.com/in/jahfarali" target="black">
//           <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
//             <p>Linked In</p>
//             <ArrowTopRightOnSquareIcon className="w-[1.6rem] h-[1.7rem] text-black" />
//           </button>
//         </Link>
//       </div>

//     {/* Right Side - Image */}
//      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//           <div className="relative group">
//             {/* Animated gradient glow */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            
//             {/* Image container */}
//             <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
//               <Image
//                 src="/about.png"
//                 alt="Jahfar Ali - MERN Stack Developer"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-full"
//                 priority
//               />
              
//               {/* Overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
//             <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
//           </div>
//         </div>
// </div>
// </div>
//     </>
//   );
// };

// export default About;


import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
<div className="bg-[#121121] py-8 bg-center  md:py-[3rem] lg:py-[4rem] flex items-center">
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">

          {/* Left Side - Text Content */}
          <div className="order-1 md:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
              ABOUT{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                ME
              </span>
            </h2>

            <div className="mb-[3rem] flex flex-col md:flex-row items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
              <p className="text-[19px] text-slate-300 w-full md:w-[80%] text-center lg:text-left">
                I’m a passionate MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. I specialize in React.js for front-end development, Node.js for backend services, and have successfully completed several full-stack projects. My focus is on creating efficient, scalable, and user-friendly solutions that bring ideas to life.
              </p>
            </div>

            <Link href="https://www.linkedin.com/in/jahfarali" target="black">
              <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
                <p>Linked In</p>
                <ArrowTopRightOnSquareIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </Link>
          </div>

          {/* Right Side - Image (HIDDEN on mobile) */}
          <div className="order-2 lg:order-2 hidden lg:flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/about.png"
                  alt="Jahfar Ali - MERN Stack Developer"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
