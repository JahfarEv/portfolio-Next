import React from "react";

const ContactForm = () => {
  return (
    <div className="pt-8 pb-4 md:pt-[8rem] md:pb-[1rem] flex flex-col items-center w-full">

      <h1 className="heading lg:mt-[-10vh]">
        Contact
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          -me{" "}
        </span> 
      </h1>{" "}
    <form className="w-full flex justify-center sm:w-full">
      <div className="border border-none rounded-3xl p-5 bg-gray-800 mt-5 lg:w-2/3  max-md:w-[90%] ">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-sm text-black placeholder-white bg-teal-400 border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 text-sm text-black placeholder-white bg-teal-400 border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full px-3 py-2 text-sm text-black placeholder-white bg-teal-400 border-0 rounded shadow"
          />
        </div>
        <button className="px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
