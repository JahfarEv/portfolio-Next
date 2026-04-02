import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "MERN Stack Developer",
        1500,
        "Full Stack Developer", 
        1500,
        "SaaS Builder",
        1500,
        "Problem Solver",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-white font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;