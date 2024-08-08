import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          JAHFAR
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">ALI</span>
        </h1>
        <div className="nav-link" onClick={() => handleScroll('hero')}>HOME</div>
        <div className="nav-link" onClick={() => handleScroll('services')}>SERVICES</div>
        <div className="nav-link" onClick={() => handleScroll('about')}>ABOUT</div>
        <div className="nav-link" onClick={() => handleScroll('projects')}>PROJECTS</div>
        <div className="nav-link" onClick={() => handleScroll('skills')}>SKILLS</div>
        <div className="nav-link" onClick={() => handleScroll('footer')}>CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[20rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
