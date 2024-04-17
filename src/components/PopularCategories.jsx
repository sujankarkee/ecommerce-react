import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";

function PopularCategories() {
  return (
    <div className="container max-w-screen-xl h-2/5 mx-auto mt-6">
      
      <div className="ml-2 flex justify-between">
        <h6 className="text-3xl font-semibold">Popular Categories</h6>
        <div className="flex gap-1 items-center">
          <h5 className="text-green-500 text-base font-medium">View All</h5>
          <IoMdArrowForward className="text-green-500 place-self-center" />
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-6 gap-4">
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image1} alt="#"/>
          <h6 className="font-medium text-lg">Fresh Fruit</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image2} alt=""/>
          <h6 className="font-medium text-lg">Fresh Vegetables</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image3} alt=""/>
          <h6 className="font-medium text-lg">Meat & Fish</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image4} alt="" />
          <h6 className="font-medium text-lg">Snacks</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image5} alt="" />
          <h6 className="font-medium text-lg">Beverages</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image6} alt="" />
          <h6 className="font-medium text-lg">Beauty & Health</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image7} alt="" />
          <h6 className="font-medium text-lg">Bread & Bakery</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image8} alt="" />
          <h6 className="font-medium text-lg">Baking Needs</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image9} alt="" />
          <h6 className="font-medium text-lg">Cooking</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image10} alt="" />
          <h6 className="font-medium text-lg">Diabetic Food</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image11} alt="" />
          <h6 className="font-medium text-lg">Dish Detergents</h6>
        </div>
        <div className="w-52 h-56 border-[1px] border-gray-200 pt-4	pb-6 rounded flex flex-col items-center gap-4">
          <img className="w-48 h-32" src={image12} alt="" />
          <h6 className="font-medium text-lg">Oil</h6>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
