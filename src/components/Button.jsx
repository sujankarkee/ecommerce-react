import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function GreenButton() {
  return (
    <button className="flex items-center justify-center w-48 h-14 gap-4 bg-white text-base font-semibold text-green-500 rounded-full">
      Shop now
      <IoMdArrowForward/>
    </button>
  );
}

export default GreenButton;