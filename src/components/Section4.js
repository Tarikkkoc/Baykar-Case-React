import React from "react";

import DecoVideo from "../img/deco-video.png";

const Section4 = ({ Object }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-20 py-40 flex justify-between gap-20 mobile:flex-col tablet:flex-col">
      <div className="w-full relative desktop:h-[496px]  flex gap-10 justify-between text-customBlue shadow-2xl mobile:flex-col mobile:items-center tablet:flex-col tablet:items-center">
        <div className="flex grow flex-col  p-20 gap-6 mobile:items-center tablet:items-center">
          <h2 className="text-Heading2">{Object.title}</h2>
          <ul>
            {Object.line.map((list) => (
              <li className="flex gap-2 items-center text-BodyXL">
                <span className="mobile:mb-7">{Object.vector}</span>
                <span className="">{list}</span>
              </li>
            ))}
          </ul>
          <button className="border-2 border-customRed rounded-lg p-4 max-w-[179px] text-ButtonL text-customRed">
            Sign up now
          </button>
        </div>
        <div className="relative">
          <img
            className="-mt-10 -mr-10 h-[625px] min-w-[713px] tablet:h-[425px] tablet:min-w-[513px] mobile:h-[325px] mobile:min-w-[313px] cursor-pointer"
            src={DecoVideo}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
