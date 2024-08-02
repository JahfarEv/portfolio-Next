import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">JAHFAR!</span>
          </h1>
          <TextEffect />
        </div>
        <div className="relative w-[500px] h-[500px] bg-[#55e6a5] rounded-full hidden lg:flex items-center justify-center">
          <Image
            src="/user.jpeg"
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
