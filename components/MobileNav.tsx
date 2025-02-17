
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeNav(); 
    }
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-4 ">
        <div onClick={() => handleScroll('hero')} className="nav-link-mobile">HOME</div>
        <div onClick={() => handleScroll('about')} className="nav-link-mobile">ABOUT</div>
        <div onClick={() => handleScroll('services')} className="nav-link-mobile">SERVICES</div>
        <div onClick={() => handleScroll('skills')} className="nav-link-mobile">SKILLS</div>
        <div onClick={() => handleScroll('projects')} className="nav-link-mobile">PROJECTS</div>
        <div onClick={() => handleScroll('footer')} className="nav-link-mobile">CONTACT</div>
      </div>
      <div onClick={closeNav} 
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

