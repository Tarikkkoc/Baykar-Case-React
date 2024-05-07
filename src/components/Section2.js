import React from "react";

const Section2 = ({ Object }) => {
  return (
    <div className="flex mt-5 gap-20 justify-between max-w-screen-xl mx-auto p-20 mobile:flex-col tablet:flex-col">
      {Object.map((item) => (
        <div className="flex flex-col gap-4 text-customBlue mobile:items-center mobile:text-center tablet:items-center tablet:text-center">
          <div className="absolute">
            {item.icon}
            {item.rectangle}
          </div>
          <span className="text-SubtitleXL pt-20">{item.title}</span>
          <p className="text-BodyL">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Section2;
