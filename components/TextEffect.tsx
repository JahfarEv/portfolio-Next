import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <div className="min-h-[120px] md:min-h-[150px]">
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
        className="text-[2rem] md:text-[3rem] text-white font-bold uppercase block"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;