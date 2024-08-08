import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          jects
        </span>
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
        <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>

      <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>

      <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>

      <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>

      <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>

      <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <Image src='/fasion.png' alt="portfolio" layout="fill" className="object-contain"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
