import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          JAHFAR
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">ALI</span>
        </h1>
        <div className="nav-link"><Link href="/">HOME</Link></div>
        <div className="nav-link"><Link href="/services">SERVICES</Link></div>
        <div className="nav-link"><Link href="/about">ABOUT</Link></div>
        <div className="nav-link"><Link href="/projects">PROJECTS</Link></div>
        <div className="nav-link"><Link href="/blog">BLOG</Link></div>
        <div className="nav-link"><Link href="/contact">CONTACT</Link></div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[20rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
