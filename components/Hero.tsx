// import React from "react";
// import TextEffect from "./TextEffect";
// import Image from "next/image";
// import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="h-[100vh] bg-cover bg-center">
//       <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[26rem] h-full items-center">
//         <div>
//           <h1 className="text-[35px] md:text-[50px] text-white font-bold">
//             HI, IAM
//             <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//               JAHFAR ALI!
//             </span>
//           </h1>

//           <TextEffect />
//           <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
//   Hi! I am Jahfar Ali, a dedicated MERN Stack Developer with a knack for crafting seamless and responsive web applications. Explore my work, dive into my projects, and see how I turn ideas into functional digital experiences. Let&#39;s build something amazing together!
// </p>

//           <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
//            <Link href="https://drive.google.com/file/d/15x8WHLoxMKJrpN7td5bl1xReAHnhm04n/view?usp=sharing">
//             <button className="px-[2rem] hover:bg-teal-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2">
//               <p>Download cv</p>
//               <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
//             </button>
//             </Link>
//           </div>
//         </div>
//         <div
//           // data-aos="zoom-in"
//           className="relative w-[550px] h-[550px] rounded-full hidden lg:flex items-center justify-center mt-[15vh]"
//         >
//           <Image
//             src="/proimages.jpg"
//             alt="user"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = () => {
   const resumeUrl = "/JAHFAR ALI-RESUME.pdf";
  const resumeFileName = "JAHFAR-RESUME-NEW.pdf";

  const handleDownload = () => {
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <div className="min-h-screen bg-cover bg-center py-[8rem] flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full items-center relative">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-[28px] sm:text-[35px] md:text-[45px] lg:text-[50px] text-white font-bold mb-4">
  HI, I&apos;M
  <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent block mt-2">
    JAHFAR ALI!
  </span>
</h1>



          <TextEffect />
          <p className="mt-4 md:mt-[1.5rem] text-[16px] sm:text-[18px] md:text-[20px] text-[#ffffff92] px-2 sm:px-0">
            Hi! I am Jahfar Ali, a dedicated MERN Stack Developer with a knack for crafting seamless and responsive web applications. Explore my work, dive into my projects, and see how I turn ideas into functional digital experiences. Let's build something amazing together!
          </p>

          <div className="mt-6 md:mt-[2rem] flex justify-center lg:justify-start gap-4 flex-col sm:flex-row">
            {/* <Link href="https://drive.google.com/file/d/1jPn9lYnXgIoFmkV0VzwbHxaPXDehEnXD/view?usp=sharing" target="blanck"> */}
              <button className="px-4 py-2 md:px-[2rem] md:py-[1rem] hover:bg-teal-500 transition-all duration-200 text-[14px] md:text-[18px] font-bold uppercase bg-white text-black flex items-center gap-2 mx-auto lg:mx-0" onClick={handleDownload}>
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-4 h-4 md:w-[1.6rem] md:h-[1.7rem] text-black" />
              </button>
            {/* </Link> */}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-end w-full">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full">
            <Image
              src="/jahfar3.png"
              alt="user"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
