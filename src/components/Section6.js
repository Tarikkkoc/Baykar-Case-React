import React, { useState } from "react";
import Section6Arrow from "./../assets/Section6Arrow";

const Section6 = ({ Object }) => {
  const [arrowState, setArrowState] = useState(null);
  return (
    <div className="text-customBlue bg-[url('../img/bg-waves.png')] bg-cover flex flex-col items-center max-w-screen-xl mx-auto gap-20 p-20 mobile:px-4">
      <div className="flex flex-col mobile:items-center">
        <h2 className="text-Heading2">{Object.title}</h2>
        <p className="text-BodyL">{Object.content}</p>
      </div>
      <div className="overflow-x-scroll w-full no-scrollbar flex flex-col desktop:flex-row  justify-between items-center desktop:items-start">
        <ul className="gap-4 flex desktop:flex-col text-ButtonL flex-nowrap">
          {Object.sidebar.map((list, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setArrowState(index);
              }}
              onMouseLeave={() => setArrowState(null)}
              className="flex pl-4 py-4 pr-2 cursor-pointer rounded-lg hover:shadow w-48"
            >
              <span>{list.icon}</span>
              <span className="text-nowrap">{list.title}</span>
              <div className={index === arrowState ? "mr-2" : "hidden"}>
                <Section6Arrow />
              </div>
            </li>
          ))}
        </ul>
        <div>
          <img
            className="w-[994px] mobile:w-[361px] tablet:w-[361px] object-cover"
            src={Object.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
