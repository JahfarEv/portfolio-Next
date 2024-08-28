import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-8 pb-4 md:pt-[8rem] md:pb-[1rem]">
      <h1 className="heading lg:mt-[-10vh]">
        Pro
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          jects
        </span>
      </h1>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] mt-[50px]">
        <Link href="https://highhydration-web-beta.vercel.app/">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-2xl sm:h-[70vh]">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-fill border-teal-400 border-[3px] rounded-2xl"
          />
        </div>
        </Link>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-2xl sm:h-[70vh]">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-fill border-teal-400 border-[3px] rounded-2xl"
          />
        </div>

        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-2xl sm:h-[70vh]">
          <Image
            src="/project1.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-fill border-teal-400 border-[3px] rounded-2xl"
          />
        </div>
<Link href="https://fasionfinesse-beta.vercel.app/">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-2xl sm:h-[70vh]">
          <Image
            src="/cart.png"
            alt="portfolio"
            layout="fill"
            className="relative z-[11] w-[100%] h-[100%] object-fill border-teal-400 border-[3px] rounded-2xl"
          />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
