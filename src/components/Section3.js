import React from "react";
import buttonImg from "../img/Section3Vector1.png";

const Section3 = ({ Object }) => {
  return (
    <div className="flex flex-col gap-20 max-w-screen-xl mx-auto p-20 bg-customBlue text-white tablet:gap-8 mobile:gap-8">
      <div className="flex justify-between mobile:flex-col mobile:items-center mobile:gap-8 tablet:flex-col tablet:items-center tablet:gap-8">
        <h2 className="text-Heading2">{Object.title}</h2>
        <button className="border-2 rounded-lg py-5 px-6 text-ButtonXL">
          Sign up now
        </button>
      </div>
      <div className="flex justify-center shadow-2xl gap-12 mobile:flex-col mobile:items-center tablet:flex-col tablet:items-center">
        {Object.boxes.map((item) => (
          <div className="bg-customBlue">
            <img
              className="rounded object-cover w-full"
              src={item.img}
              alt=""
            />
            <div className="flex flex-col gap-2 pt-8 px-8">
              <span className="text-Heading6">{item.title}</span>
              <p className="text-BodyL">{item.content}</p>
            </div>
            <div className="p-8">
              <button className="w-full rounded-lg mx-auto border-2 flex gap-4 p-4 items-center justify-center">
                <img src={buttonImg} alt="" />
                <span className="text-ButtonL">{item.buttonText}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
