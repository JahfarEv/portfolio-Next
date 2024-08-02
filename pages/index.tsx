// import Hero from "@/components/Hero";
// import MobileNav from "@/components/MobileNav";
// import Nav from "@/components/Nav";
// import React, { useState } from "react";

// const HomePage = () => {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);
//   return (
//     <div className="overflow-x-hidden">
//       <div>
//         {/*Navbar section */}
//         <MobileNav nav={nav} closeNav={closeNav} />
//         <Nav openNav={openNav} />
//         {/*Hero section */}
//         <Hero/>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import React, { useState } from "react";
import Particle from "@/components/Particle"; // Make sure the import path is correct

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particle /> {/* Add the Particle component for the background effect */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Navbar section */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;

