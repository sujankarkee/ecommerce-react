import React from "react";
import images from "../images";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Product() {
  const data = [
    
  ]
  return (
    <div className="topDiv grid grid-cols-5">
      <div className="border-2 border-gray-200">
        <img
          className=""
          src={images.greenApple}
          alt="Green Apple"
        />
        <div className="productDetails p-3 ">
          <div className="bichhako relative flex">
            <div className="price gap-3">
              <p>Green Apple</p>
              <span className="mr-1">$14.99</span>
              <span className="line-through text-gray-300">$20.99</span>
            </div>
            <div className="absolute right-1 bottom-0 w-10 h-10 bg-gray-500 flex justify-center items-center rounded-full">
              <HiOutlineShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div className="ratings mt-1 flex ">
            <img src={images.Star} alt="" />
            <img src={images.Star} alt="" />
            <img src={images.Star} alt="" />
            <img src={images.Star} alt="" />
            <img src={images.StarBlank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
