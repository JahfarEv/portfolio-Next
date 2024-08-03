import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education &{" "}
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Skill
        </span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem title="React developer" year="2014 - 2018" />
          <SkilsItem title="Mern stack developer" year="2016 - 2020"/>
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItem title="Next Js developer" year="2014 - 2018"/>
          <SkilsItem title="Node Js developer" year="2014 - 2018"/>
          <SkilsLanguage  skill1="React Js"
            skill2="Next Js"
            skill3="Typescript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
