import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-8 pb-4 md:pt-[8rem] md:pb-[1rem]">
      <h1 className="heading">
        Pro
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          jects
        </span>
      </h1>

      <div className="w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-[50px]">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain rounded-2xl"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
        </div>

        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px] rounded-">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
        </div>
        
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px] rounded-">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
          </div>

        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px] rounded-">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
          </div>

        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px] rounded-">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
          </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px] rounded-">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[110%] h-[100%] z-[10] bg-teal-500  right-[-1rem] left-[-1rem] rounded-md "></div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
