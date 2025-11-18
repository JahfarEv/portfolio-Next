import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skills = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-[4rem] md:pt-[8rem] pb-[2rem] bg-[#09101a]">
  <div className="w-[80%] mx-auto  lg:mt-[-10vh]">
    <h1 className="heading">
      Education &{" "}
      <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
        Skill
      </span>
    </h1>
    <div className=" lg:mt-[-10vh] pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-[2rem] lg:grid-cols-2 gap-x-8">
  <div className="flex flex-col items-center">
    <SkilsItem service="FRONT END" skill1="Javascript"
      skill2="React js"
      skill3="Next js"
      skill4="Redux"
      skill5="Tailwind"
      skill6="Figma"
      skill7="Typescript"
      skill8="Electron js"
/>
    <SkilsLanguage
      skill1="Javascript"
      skill2="React js"
      skill3="Next js"
      level1="w-[91%]"
      level2="w-[88%]"
      level3="w-[80%]"
    />
  </div>
  <div className="flex flex-col items-center">
    <SkilsItem service="BACK END" 
    skill1="Node js"
    skill2="Express js"
    skill8="Nest js"
    skill3="Mongo db"
    skill4="AWS"
    skill5="Socket IO"
    skill6="Swagger"
    skill7="Postman"/>
    <SkilsLanguage
      skill1="Node js"
      skill2="Express js"
      skill3="Mongodb"
      level1="w-[81%]"
      level2="w-[78%]"
      level3="w-[73%]"
    />
  </div>
</div>

  </div>
</div>

  );
};

export default Skills;
