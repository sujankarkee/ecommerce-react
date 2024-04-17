import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import images from '../assets/images/'  

function PopularProducts() {
  return (
    <div className="container max-w-screen-xl h-2/5 mx-auto mt-6">
      <div className="ml-2 flex justify-between">
        <h6 className="text-3xl font-semibold">Popular Products</h6>
        <div className="flex gap-1 items-center">
          <h5 className="text-green-500 text-base font-medium">View All</h5>
          <IoMdArrowForward className="text-green-500 place-self-center" />
        </div>
      </div>
      
      <div className="w-64 h-80 border-2 border-gray-200">
      <img className="w-48 min-h-60" src={images.greenApple} alt="#" />
      <div className="thuloDiv">
        hello
        <h6>Green Apple</h6>
        <div className="price">
          <h5>$14.99</h5>
          <h6 className="line-through text-gray-300">$20.99</h6>
        </div>
        <div className="w-5 h-5 bg-gray-500 rounded-full">
          <HiOutlineShoppingBag />
        </div>
        <div className="ratings">
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

export default PopularProducts;
