import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-cover bg-center">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, IAM
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              JAHFAR ALI!
            </span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
  Hi! I am Jahfar Ali, a dedicated MERN Stack Developer with a knack for crafting seamless and responsive web applications. Explore my work, dive into my projects, and see how I turn ideas into functional digital experiences. Let&#39;s build something amazing together!
</p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
           <Link href="https://drive.google.com/file/d/15x8WHLoxMKJrpN7td5bl1xReAHnhm04n/view?usp=sharing">
            <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
              <p>Download cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="relative w-[450px] h-[450px] rounded-full hidden lg:flex items-center justify-center mt-[15vh]"
        >
          <Image
            src="/photo1.jpg"
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
