import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[4rem] pb-[4rem] bg-[#02050a]">
   <div className="grid border-b-[1px] pb-[6rem] border-gray-400 md:grid-cols-3 gap-[3rem] mx-auto w-[80%] items-center justify-center">
    <div className="flex items-center space-x-6">
      <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
        <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
      </div>
      <div>
        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
        <p className="text-[14px] w-[90%] text-white opacity-60">Calicut, Kerala, India</p>
      </div>
    </div>
    <div className="flex items-center space-x-6">
      <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
        <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
      </div>
      <div>
        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone</h1>
        <p className="text-[14px] w-[90%] text-white opacity-60">
          +919539794665 <br />
        </p>
      </div>  
    </div>
    <div className="flex items-center space-x-6">
      <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
        <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
      </div>
      <div>
        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
        <p className="text-[14px] w-[90%] text-white opacity-60">
          evjahfarali@gmail.com
        </p>
      </div>
    </div>
  </div>
  
    <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-center">
      <div className="text-[16px] text-white opacity-20 text-center md:text-left">
        Jahfar Ali 2024 | All Rights Reserved
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-10">
        <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
        <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
        <p className="text-[16px] text-white opacity-20">Sitemap</p>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
