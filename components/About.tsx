



// import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const About = () => {
//   return (
//     <>
//       <div className="bg-[#121121] py-8 bg-center md:py-[3rem] lg:py-[4rem] flex items-center">
//         <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">

//           {/* Left Side - Text Content */}
//           <div className="order-1 md:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
//             <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
//               ABOUT{" "}
//               <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//                 ME
//               </span>
//             </h2>

//             <div className="mb-[3rem] flex flex-col md:flex-row items-center md:space-x-10">
//               <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
//               <div className="space-y-4 text-[17px] text-slate-300 w-full md:w-[80%] text-center lg:text-left">
//                 <p>
//                   I'm a MERN Stack Developer with 3+ years of hands-on experience building real-world web applications, including SaaS platforms, admin dashboards, and scalable business solutions.
//                 </p>
                
//                 <p>
//                   I specialize in developing full-stack applications using React.js, Node.js, Express, and MongoDB — with a strong focus on performance, clean architecture, and user experience. I have practical experience working with authentication systems, REST APIs, cloud storage (AWS S3), and modern UI frameworks.
//                 </p>
                
//                 <p>
//                   I've worked on both company projects and freelance solutions, helping businesses turn ideas into fast, reliable, and user-friendly products.
//                 </p>
                
//                 <p>
//                   Currently, I'm looking for opportunities to contribute to a growth-driven team where I can build impactful applications and continuously improve my skills.
//                 </p>
                
//                 <p className="text-teal-400 font-semibold">
//                   Open to relocation | Available for immediate joining
//                 </p>
//               </div>
//             </div>

//             <Link href="https://www.linkedin.com/in/jahfarali" target="_blank">
//               <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
//                 <p>Linked In</p>
//                 <ArrowTopRightOnSquareIcon className="w-[1.6rem] h-[1.7rem] text-black" />
//               </button>
//             </Link>
//           </div>

//           {/* Right Side - Image (HIDDEN on mobile) */}
//           <div className="order-2 lg:order-2 hidden lg:flex justify-center lg:justify-end">
//             <div className="relative group">
//               {/* Animated gradient glow */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

//               {/* Image container */}
//               <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
//                 <Image
//                   src="/about.png"
//                   alt="Jahfar Ali - MERN Stack Developer"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                   priority
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
//               <div
//                 className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"
//                 style={{ animationDelay: "1s" }}
//               ></div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default About; 

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { BriefcaseIcon, CodeBracketIcon, RocketLaunchIcon, UserGroupIcon, AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] py-16 md:py-24">
      <div className="w-[90%] md:w-[80%] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ABOUT{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              ME
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Passionate MERN Stack Developer dedicated to building exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* SECTION 1: Professional Background */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Background</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p>
                I'm a <span className="text-teal-400 font-semibold">MERN Stack Developer</span> with 2+ years of hands-on experience building 
                real-world web applications, including SaaS platforms, admin dashboards, and scalable business solutions 
                that serve thousands of users.
              </p>
              
              <p>
                My journey in web development started with a passion for creating digital solutions that solve real problems. 
                I've successfully delivered <span className="text-teal-400 font-semibold">15+ production-ready projects</span> for clients across 
                e-commerce, healthcare, education, and fintech sectors.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <CodeBracketIcon className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <RocketLaunchIcon className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">Fast Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">Remote Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Technical Expertise & Skills */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Expertise</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p>
                I specialize in developing <span className="text-teal-400 font-semibold">full-stack applications</span> using the MERN ecosystem 
                (MongoDB, Express.js, React.js, Node.js) with a strong focus on performance, clean architecture, 
                and exceptional user experience.
              </p>
              
              <p>
                Beyond the core stack, I have practical experience implementing <span className="text-teal-400 font-semibold">authentication systems</span> 
                (JWT, OAuth), <span className="text-teal-400 font-semibold">RESTful APIs</span>, cloud storage (AWS S3, Cloudinary), real-time features 
                (Socket.io), and modern state management (Redux, Zustand, Context API).
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Redux", "Git", "Docker"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Experience & Work Philosophy */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-5 text-center border border-teal-500/20">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">2+</div>
            <p className="text-slate-300 text-sm">Years of Experience</p>
            <p className="text-slate-500 text-xs mt-1">Building since 2023</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-5 text-center border border-teal-500/20">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">15+</div>
            <p className="text-slate-300 text-sm">Projects Delivered</p>
            <p className="text-slate-500 text-xs mt-1">SaaS, E-com, Dashboards</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-5 text-center border border-teal-500/20">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">100%</div>
            <p className="text-slate-300 text-sm">Client Satisfaction</p>
            <p className="text-slate-500 text-xs mt-1">Quality & Timely Delivery</p>
          </div>
        </div>

        {/* Work Philosophy & Availability */}
        <div className="mt-10 bg-teal-500/10 rounded-xl p-6 border-l-4 border-teal-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <RocketLaunchIcon className="w-5 h-5 text-teal-400" />
                My Work Philosophy
              </h4>
              <p className="text-slate-300 text-sm">
                I believe in writing clean, maintainable code and delivering value-driven solutions. 
                Every project I work on gets my full attention to detail, from architecture decisions 
                to the smallest UI interactions.
              </p>
            </div>
            
            <div className="flex flex-col items-start lg:items-end">
              <h4 className="text-white font-semibold mb-2">🎯 Current Status</h4>
              <p className="text-slate-300 text-sm">
                Open to full-time MERN Stack / Full Stack Developer roles
              </p>
              <div className="flex gap-3 mt-2">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">📍 Open to relocation</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">⚡ Available immediately</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="https://www.linkedin.com/in/jahfarali" target="_blank">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group">
              <span>Let's Connect on LinkedIn</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;