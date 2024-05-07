import React from "react";
import MobileBtn from "./../../assets/MobileBtn";

const Navbar = ({ Object }) => {
  return (
    <nav className="max-w-screen-xl h-24 mx-auto flex items-center justify-between px-20 mobile:px-4 tablet:px-4">
      <span className="h-[35px] text-customRed text-Heading5 flex-none cursor-pointer">
        Collers
      </span>
      <ul className="flex gap-4 text-customRed text-ButtonM shrink mobile:hidden tablet:hidden">
        {Object.map((item) => (
          <li className="py-3 px-2 flex-none cursor-pointer">{item}</li>
        ))}

        <button className="border-2 border-customRed rounded-lg p-3 min-w-[117px] ease-in duration-300">
          Sign up now
        </button>
      </ul>
      <div className="hidden mobile:flex tablet:flex h-6 w-6">
        <MobileBtn />
      </div>
    </nav>
  );
};

export default Navbar;
