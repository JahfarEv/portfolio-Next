import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import Particle from "@/components/Particle";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from "@/components/Contact";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particle />
      <div className="absolute top-0 left-0 right-0 z-10">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
