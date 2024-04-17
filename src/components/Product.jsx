import React from "react";
import images from "../images";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Star from "../images/star";
import StarBlank from "../images/StarBlank"; 

function Product() {
  return (
    <div className="w-64 h-80 border-2 border-gray-200">
      <img className="w-48 min-h-60" src={images.greenApple} alt="Green Apple" />
      <div className="productDetailsContainer">
        <h6>Green Apple</h6>
        <div className="price">
          <span>$14.99</span>
          <span className="line-through text-gray-300">$20.99</span>
        </div>
        <div className="w-5 h-5 bg-gray-500 rounded-full">
          <HiOutlineShoppingBag />
        </div>
        <div className="ratings">
          {Star}
          {Star}
          {Star}
          {Star}
          {StarBlank}
        </div>
      </div>
    </div>
  );
}

export default Product;
