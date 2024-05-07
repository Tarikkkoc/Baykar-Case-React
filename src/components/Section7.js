import React from "react";

const Section7 = ({ Object }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-20 mobile:px-4 flex flex-col items-center bg-[url('../img/WorldBgImg.png')] bg-cover">
      {/* img'ı düzenle */}
      <img
        className="desktop:relative desktop:right-96"
        src={Object.img}
        alt=""
      />
      <div className="flex flex-col items-center w-full text-white">
        <h2 className="text-Heading1L">{Object.title}</h2>
        <span className="text-Heading2">{Object.content}</span>
      </div>
    </div>
  );
};

export default Section7;
