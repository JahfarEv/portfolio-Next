import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import React, { useState } from "react";
import Particle from "@/components/Particle";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particle />
      <div className="absolute top-0 left-0 right-0 z-10">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills/>
          <Projects/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
