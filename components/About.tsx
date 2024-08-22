import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
    <div className="bg-[#121121] pt-[2rem] pb-[2rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-teal-500 mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Trans{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Visions
            </span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at
              pariatur magnam fuga aliquid? Velit, excepturi rerum aliquam
              doloribus facilis laborum eveniet, eaque, numquam praesentium quo
              nam repellat et fuga?
            </p>
          </div>
          <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
            <p>Download cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[450px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[450px] w-[300px] h-[300px] relative" >
          <Image
            src="/photo1.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[110%] z-[10] bg-teal-500 top-[-1rem] right-[-1rem] bottom-[-1rem] left-[-1rem]">

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
