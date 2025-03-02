// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Projects = () => {
//   return (
//     <div className="pt-8 pb-4 md:pt-[8rem] md:pb-[1rem]">
//       <h1 className="heading lg:mt-[-10vh]">
//         Pro
//         <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
//           jects
//         </span>
//       </h1>

//       <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] mt-[50px] place-items-center">
//   {/* First Project */}
//   <Link href="https://highhydration-web-beta.vercel.app/" target="_blank">
//     <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full md:w-[75%] h-[300px] md:h-[400px] rounded-2xl">
//       <Image
//         src="/project1.png"
//         alt="portfolio"
//         layout="fill"
//         className="object-cover border-teal-400 border-[3px] rounded-2xl"
//       />
//     </div>
//   </Link>

//   {/* Second Project */}
//   <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full md:w-[75%] h-[300px] md:h-[400px] rounded-2xl">
//     <Image
//       src="/project1.png"
//       alt="portfolio"
//       layout="fill"
//       className="object-cover border-teal-400 border-[3px] rounded-2xl"
//     />
//   </div>

//   {/* Third Project */}
//   <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full md:w-[75%] h-[300px] md:h-[400px] rounded-2xl">
//     <Image
//       src="/project1.png"
//       alt="portfolio"
//       layout="fill"
//       className="object-cover border-teal-400 border-[3px] rounded-2xl"
//     />
//   </div>

//   {/* Fourth Project */}
//   <Link href="https://fasionfinesse-beta.vercel.app/">
//     <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full md:w-[75%] h-[300px] md:h-[400px] rounded-2xl">
//       <Image
//         src="/cart.png"
//         alt="portfolio"
//         layout="fill"
//         className="object-cover border-teal-400 border-[3px] rounded-2xl"
//       />
//     </div>
//   </Link>
// </div>
//     </div>
//   );
// };

// export default Projects;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-8 pb-4 md:pt-[8rem] md:pb-[1rem] ">
      {/* Heading */}
      <h1 className="heading text-center lg:mt-[-10vh]">
        Pro
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          jects
        </span>
      </h1>

      {/* Projects Grid */}
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[3rem] mt-[50px] place-items-center">
        {/* First Project */}



        <Link href="https://thevyzo.com" target="blanck">
        
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl">
            <Image
              src="/vyzoscr.png"
              alt="portfolio"
              layout="fill"
              className="object-cover border-teal-400 border-[3px] rounded-2xl"
            />
          </div>
        </Link>
            {/* Second Project */}
        <Link href="https://highhydration-web-beta.vercel.app/" target="_blank">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl">
            <Image
              src="/project1.png"
              alt="portfolio"
              layout="fill"
              className="object-cover border-teal-400 border-[3px] rounded-2xl"
            />
          </div>
        </Link>

      
        {/* Third Project */}
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl">
          <Image
            src="/whatsapp-chatbot.png"
            alt="portfolio"
            layout="fill"
            className=" border-teal-400 border-[3px] rounded-2xl"
          />
        </div>

        {/* Fourth Project */}
        <Link href="https://hub.thevyzo.com/" target="_blank">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl bg-yellow-50">
            <Image
              src="/hub-vyzo1.jpg"
              alt="portfolio"
              layout="fill"
              className=" border-teal-400 border-[3px] rounded-2xl"
            />
          </div>
        </Link>

        {/* Fifth Project */}
        <Link href="https://hub.thevyzo.com/" target="_blank">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl bg-yellow-50">
            <Image
              src="/hub-vyzo1.jpg"
              alt="portfolio"
              layout="fill"
              className=" border-teal-400 border-[3px] rounded-2xl"
            />
          </div>
        </Link>

        {/* Fourth Project */}
        <Link href="https://hub.thevyzo.com/" target="_blank">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[42vh] md:w-[60vh] lg:w-[50vh] h-[300px] md:h-[350px] rounded-2xl bg-yellow-50">
            <Image
              src="/hub-vyzo1.jpg"
              alt="portfolio"
              layout="fill"
              className=" border-teal-400 border-[3px] rounded-2xl"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
