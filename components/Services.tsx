import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem]">
      <p className="heading lg:mt-[-10vh]">
        My{" "}
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Services
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[6rem] mt-[4rem] text-white">
        <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
          <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Frontend
          </h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">
            I build responsive, visually appealing interfaces with React.js and
            Tailwind CSS, ensuring seamless user experiences.{" "}
          </p>
        </div>
        <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Backend
          </h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">
            I develop secure, efficient backends with Node.js and MongoDB,
            ensuring reliable and robust server-side performance.
          </p>
        </div>
        <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
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
    </div>
  );
};

export default Services;
