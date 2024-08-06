import React from "react";

interface Props {
  title: string;
  year: string;
}
const SkilsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-teal-400 py-[0.9rem] font-bold text-[18px] border-[2px] border-teal-400">
        {year}
      </span>
      <h1 className="mt-[2rem] font-semibold capitalize mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaa] font-normal w-[80%] text-[17px] opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur non accusantium ullam aperiam distinctio similique architecto magnam cupiditate facere iure deserunt illum, illo hic quibusdam impedit at rem vel nostrum.</p>
    </div>
  );
};

export default SkilsItem;
