import React from "react";

const Footer = ({ Object }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 px-20 mobile: tablet: bg-customBlue">
      <div className="flex justify-between gap-12 mobile:flex-col mobile:py-12 tablet:py-12 mobile:items-center tablet:flex-col tablet:items-center">
        {Object.sections.map((item) => (
          <div>
            <span className="text-SubtitleM text-customWhite cursor-pointer">
              {item.title}
            </span>
            <ul className="flex flex-col py-3 text-BodyM text-customWhite2">
              {item.list.map((list) => (
                <li className="py-3 cursor-pointer">{list}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4 mobile:items-center tablet:items-center">
          <span className="text-SubtitleM text-customWhite cursor-pointer">
            Get the App
          </span>
          <div className="flex flex-col gap-4">
            <button>{Object.buttons.AppStore}</button>
            <button>{Object.buttons.GooglePlay}</button>
          </div>
          <div className="flex flex-col gap-4 text-SubtitleM text-customWhite items-center">
            <span>Follow Us</span>
            <ul className="flex items-center gap-2">
              {Object.Icons.map((icon) => (
                <li className="cursor-pointer">{icon}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 py-12 tablet:w-full mobile:flex-col tablet:flex-col tablet:items-center tablet:gap-2 mobile:items-center mobile:gap-2 text-BodyM text-customWhite2">
        <span>Collers @ 2023. All rights reserved.</span>
        <ul className="flex desktop:gap-2 mobile:gap-6 tablet:gap-6">
          {Object.Info.map((info) => (
            <li className="flex gap-1 cursor-pointer">
              {info.icon}
              {info.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
