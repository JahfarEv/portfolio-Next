import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
     <div className="bg-[#121121] min-h-screen bg-center py-[8rem] flex items-center">
     <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">
     {/* Left Side - Text Content */}
      <div className="order-1 md:order-1">
        <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          ABOUT{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            ME
          </span>
        </h2>
        <div className="mb-[3rem] flex items-center md:space-x-10">
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
          <p className="text-[19px] text-slate-300 w-[80%]">
            I’m a passionate MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. I specialize in React.js for front-end development, Node.js for backend services, and have successfully completed several full-stack projects. My focus is on creating efficient, scalable, and user-friendly solutions that bring ideas to life.
          </p>
        </div>
        <Link href="https://www.linkedin.com/in/jahfarali">
          <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
            <p>Linked In</p>
            <ArrowTopRightOnSquareIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </Link>
      </div>

    {/* Right Side - Image */}
    <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-end w-full ">
    <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full mt-[3rem] md:mt-[0rem]">      <Image
        src="/profileImage.jpg"
        alt="user"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  </div>
</div>
</div>
    </>
  );
};

export default About;
