import React from "react";
import WatchDemo from "../assets/WatchDemo.js";
import Section1Shoe from "../img/Section1Shoe.png";

const Section1 = ({ Object }) => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-20 h-[583px] mobile:h-[802.2px] mobile:flex-col mobile:items-center tablet:h-[802.2px] tablet:flex-col tablet:items-center">
      <div className="w-[65%] px-5 flex flex-col gap-8 py-8">
        <h1 className="text-Heading1 text-customBlue">{Object.title}</h1>
        <p className="text-BodyL text-customBlue">{Object.content}</p>
        <ul className="flex gap-4">
          <li className="border-2 border-customRed rounded-lg p-4 text-xl text-customRed cursor-pointer">
            Sign up now
          </li>
          <li className="py-4 px-2 flex">
            <WatchDemo />
            <span className="px-2 pb-2 text-base cursor-pointer">
              Watch Demo
            </span>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="h-[372px] w-[367px] mobile:h-[276.32px] mobile:w-[272.61px] tablet:h-[350.32px] tablet:w-[345.61px]"
          src={Section1Shoe}
          alt=""
        />
      </div>
    </div>
  );
};

export default Section1;
