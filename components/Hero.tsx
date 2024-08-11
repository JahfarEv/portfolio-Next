import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] mt-[10vh] bg-cover bg-center">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&#39;M{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              JAHFAR ALI!
            </span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ratione enim, distinctio quisquam libero et atque natus adipisci
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
              <p>Download cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="relative w-[450px] h-[450px] rounded-full hidden lg:flex items-center justify-center mt-[15vh]"
        >
          <Image
            src="/profile2.png"
            alt="user"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
