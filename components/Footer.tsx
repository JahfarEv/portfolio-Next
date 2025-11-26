// import {
//   DevicePhoneMobileIcon,
//   EnvelopeIcon,
//   MapIcon,
// } from "@heroicons/react/20/solid";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="pt-[4rem] pb-[4rem] bg-[#02050a]">
//    <div className="grid border-b-[1px] pb-[6rem] border-gray-400 md:grid-cols-3 gap-[3rem] mx-auto w-[80%] items-center justify-center">
//     <div className="flex items-center space-x-6">
//       <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
//         <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
//       </div>
//       <div>
//         <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
//         <p className="text-[14px] w-[90%] text-white opacity-60">Calicut, Kerala, India</p>
//       </div>
//     </div>
//     <div className="flex items-center space-x-6">
//       <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
//         <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
//       </div>
//       <div>
//         <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone</h1>
//         <p className="text-[14px] w-[90%] text-white opacity-60">
//           +919539794665 <br />
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center space-x-6">
//       <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400">
//         <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
//       </div>
//       <div>
//         <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
//         <p className="text-[14px] w-[90%] text-white opacity-60">
//           evjahfarali@gmail.com
//         </p>
//       </div>
//     </div>
//   </div>

//     <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-center">
//       <div className="text-[16px] text-white opacity-20 text-center md:text-left">
//         Jahfar Ali 2024 | All Rights Reserved
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-10">
//         <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
//         <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
//         <p className="text-[16px] text-white opacity-20">Sitemap</p>
//       </div>
//     </div>
//   </div>

//   );
// };

// export default Footer;

import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jahfarali",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:bg-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/JahfarEv",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:bg-gray-700",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/devwithjahfar",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "hover:bg-blue-800",
    },
  ];

  return (
    <div className="pt-[4rem] pb-[4rem] bg-[#02050a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      <div className="relative z-10">
        {/* Contact Info Section */}
        <div className="grid border-b-[1px] pb-[6rem] border-gray-400 md:grid-cols-3 gap-[3rem] mx-auto w-[80%] items-center justify-center">
          {/* Address */}
          <div className="flex items-center space-x-6 group">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400 group-hover:bg-cyan-400 transition-all duration-300 group-hover:scale-110">
              <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Address
              </h1>
              <p className="text-[14px] w-[90%] text-white opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                Calicut, Kerala, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-6 group">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400 group-hover:bg-cyan-400 transition-all duration-300 group-hover:scale-110">
              <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Phone
              </h1>
              <p className="text-[14px] w-[90%] text-white opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                +919539794665
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-6 group">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-teal-400 group-hover:bg-cyan-400 transition-all duration-300 group-hover:scale-110">
              <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Email
              </h1>
              <p className="text-[14px] w-[90%] text-white opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                evjahfarali@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-[80%] mx-auto mt-[3rem] mb-[3rem]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Follow me on social media for updates and collaborations
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-gray-800 rounded-2xl transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
              >
                <div className="text-white group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.name}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-center">
          {/* Copyright */}
          <div className="text-[16px] text-white opacity-60 text-center md:text-left">
            © {new Date().getFullYear()} Jahfar Ali | All Rights Reserved
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-10">
            <a
              href="#"
              className="text-[16px] text-white opacity-60 hover:opacity-100 hover:text-cyan-300 transition-all duration-300"
            >
              Terms & Condition
            </a>
            <a
              href="#"
              className="text-[16px] text-white opacity-60 hover:opacity-100 hover:text-cyan-300 transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[16px] text-white opacity-60 hover:opacity-100 hover:text-cyan-300 transition-all duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>

        {/* Made with love */}
      </div>
    </div>
  );
};

export default Footer;
