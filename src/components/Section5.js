import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as ChevronLeft } from "../assets/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right.svg";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronRight
      className={className + " w-14 h-14"}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "80",
        top: "-65",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeft
      className={className + " w-14 h-14"}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "140",
        top: "-65",
      }}
      onClick={onClick}
    />
  );
}

const Section5 = ({ Object }) => {
  return (
    <div className="w-full relative left-0 right-full py-16">
      <div className="mx-auto w-[90%] top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 absolute mobile:px-4 bg-[#FDE68A]  py-16 h-[380px]" />
      <div className="h-[500px] left-0 -top-16 relative z-20 mobile:mb-32 tablet:mb-32">
        <div className="flex justify-between mx-auto px-20 py-4 text-customBlue">
          <h2 className="text-Heading2">{Object.title}</h2>
        </div>

        <Slider
          {...Object.settings}
          useCSS={true}
          nextArrow={<NextArrow />}
          prevArrow={<SamplePrevArrow />}
          className="mt-10 space-x-8 w-full"
        >
          {Object.boxes.map((item) => (
            <div className="flex flex-col p-8 gap-2 rounded-[20px] bg-white">
              <div className="flex text-customGreen py-2 text-Heading6">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <div className="text-BodyXXL h-[190px] mobile:h-[190px] tablet:h-[190px]">
                {item.content}
              </div>
              <div className="flex gap-4">
                <img src={item.img} alt="" />
                <div className="flex flex-col">
                  <span className="text-BodyL cursor-pointer">{item.name}</span>
                  <span className="text-BodyM text-customGreen cursor-pointer">
                    {item.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section5;
