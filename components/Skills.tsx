import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skills = () => {
  return (
    <div className="flex items-center justify-center  pt-[4rem] md:pt-[8rem] pb-[2rem] bg-[#09101a]">
      <div className="  lg:mt-[-10vh]">
        <h1 className="heading">
          Education &{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Skill
          </span>
        </h1>
        <div className=" lg:mt-[-10vh] pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-[2rem] lg:grid-cols-2 gap-x-8">
          <div className="flex flex-col items-center">
            <SkilsItem
              service="FRONT END"
              skill1="Javascript"
              skill2="Typescript"
              skill3="React js"
              skill4="Next js"
              skill5="Redux"
              skill6="Tailwind"
              skill7="Figma"
              skill8="Electron js"
              skill9="Ant Design"
              skill10="Material UI (MUI)"
              skill11="Bootstrap"
            />
            <SkilsLanguage
              skill1="Javascript"
              skill2="React js"
              skill3="Next js"
              skill4="Electron js"
              level1="w-[91%]"
              level2="w-[88%]"
              level3="w-[80%]"
              level4="w-[75%]"
            />
          </div>
          <div className="flex flex-col items-center">
            <SkilsItem
              service="BACK END"
              skill1="Node js"
              skill2="Express js"
              skill3="Nest js"
              skill4="Mongo db"
              skill5="AWS"
              skill6="Socket IO"
              skill7="Swagger"
              skill8="Postman"
              skill9="JWT"
              skill10="Docker"
              skill11="Jest"
            />
            <SkilsLanguage
              skill1="Node js"
              skill2="Express js"
              skill3="Mongodb"
              skill4="Nest js"
              level1="w-[81%]"
              level2="w-[78%]"
              level3="w-[73%]"
              level4="w-[70%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
