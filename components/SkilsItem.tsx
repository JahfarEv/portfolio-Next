import React from "react";

interface Props {
  service: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
  skill7: string;

}

const SkilsItem = ({ service, skill1, skill2, skill3, skill4, skill5, skill6, skill7 }: Props) => {
  const skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7];

  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <div className="text-center">
        <span className="inline-block px-4 text-teal-400 font-bold text-[18px] border-[2px] border-teal-400 rounded-3xl w-full">
          {service}
       
        {/* <h1 className="mt-[2rem] font-semibold capitalize text-[20px] sm:text-[25px] md:text-[30px] text-white">
          Skills
        </h1> */}
     

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full md:mt-5 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-auto  mb-5">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <div className="flex flex-col items-center">
              <p className="font-mono text-lg font-bold text-white">{skill}</p>
              <p className="text-gray-300">Experienced</p>
            </div>
          </div>
        ))}
      </div>
      </span>
       </div>
    </div>
  );
};

export default SkilsItem;
