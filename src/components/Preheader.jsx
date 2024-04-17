import React from "react";
import { PiMapPin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

function Preheader() {
  return (
    <div className="nav max-w-screen-xl mx-auto h-16 flex justify-between text-[#666666] text-[12px] leading-[15.6px] font-normal items-center">
      <div className="flex gap-[8px] h-[18px]">
        <PiMapPin className="w-[15px] h-[18px] border" alt="Map Pin Icon" />
        <p className="text-xs w-[292px] h-[16px]">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>
      <div className="flex h-5 gap-4 font-SemiBold text-sm text-gray-600">
        <div className="menu1 flex gap-1 justify-center items-center">
          <h3>Eng</h3>
          <RiArrowDropDownLine className="place-self-center" />
        </div>
        <div className="menu2 flex gap-4 justify-center items-center">
          <h3>USD</h3>
          <RiArrowDropDownLine className="place-self-center" />
        </div>
        <div className="w-0 h-[15px] gap-[4px] border-[1px]"></div>
        <div className="login">
          <h3>Sign In / Sign Up</h3>
        </div>
      </div>
    </div>
  );
}

export default Preheader;
