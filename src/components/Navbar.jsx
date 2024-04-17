import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";

function Navbar() {
  return (
    <div className="nav bg-black text-white">
      <div className="container max-w-screen-xl mx-auto h-16 flex items-center justify-between">
        <div className="navlinks flex justify-center items-center gap-[32px]">
          <div className="navlink flex">
            <a href="#home">Home</a>
            <RiArrowDropDownLine className="place-self-center" />
          </div>
          <div className="navlink flex">
            <a href="#">Shop</a>
            <RiArrowDropDownLine className="place-self-center" />
          </div>
          <div className="navlink flex">
            <a href="#">Pages</a>
            <RiArrowDropDownLine className="place-self-center" />
          </div>
          <div className="navlink flex">
            <a href="#">Blog</a>
            <RiArrowDropDownLine className="place-self-center" />
          </div>
          <div className="navlink">
            <a href="#">About Us</a>
          </div>
          <div className="navlink">
            <a href="#">Contact Us</a>
          </div>
        </div>
        <span className="phone flex justify-center items-center gap-[3px]">
          <FaPhoneVolume className="w-5 h-5" alt="Phone Icon" />
          <a href="tel:+12195550114" className="text-sm font-medium">(219) 555-0114</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
