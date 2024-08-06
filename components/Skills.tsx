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
          <SkilsItem title="React developer" year="FRONT END"/>
          {/* <SkilsItem title="Mern stack developer" year="2016 - 2020"/> */}
          <SkilsLanguage
            skill1="Javascript"
            skill2="React js"
            skill3="Next js"
            skill4="Redux toolkit"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[80%]"

          />
        </div>
        <div>
          <SkilsItem title="Next Js developer" year="BACK END"/>
          {/* <SkilsItem title="Node Js developer" year="2014 - 2018"/> */}
          <SkilsLanguage  skill1="Tailwind css"
            skill2="Node js"
            skill3="Express js"
            skill4="Mongodb"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[73%]"
            level4="w-[70%]"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
