import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Product from "./Product";

function PopularProducts() {
  return (
    <div className="container max-w-screen-xl h-2/5 mx-auto mt-6">
      <div className="ml-2 flex justify-between">
        <h6 className="mb-3 text-3xl font-semibold">Popular Products</h6>
        <div className="flex gap-1 items-center">
          <h5 className="text-green-500 text-base font-medium">View All</h5>
          <IoMdArrowForward className="text-green-500 place-self-center" />
        </div>
      </div>
      <Product/>

    </div>
  );
}

export default PopularProducts;
