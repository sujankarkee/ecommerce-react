import React from "react";
import images from "../images";
import GreenButton from "./Button";
import { IoMdArrowForward } from "react-icons/io";

function Banner() {
  return (
    <div className="container max-w-screen-xl mx-auto mt-6">
      <div className="banner flex gap-8 justify-between">
        <div
          className="onePhoto w-full h-[535px] rounded-md relative"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${images.hat}`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bannerBig flex flex-col gap-9 w-3/4 h-72 absolute ml-14 mt-32 px-5">
            <h1 className="text-white text-5xl font-semibold">
              Fresh & Healthy <br /> Organic Food
            </h1>
            <div className="discountMain text-white flex w-64 h-16 gap-4 items-center">
              <div className="w-1 h-16 bg-emerald-400"></div>
              <div className="w-80 flex gap-5 items-center">
                <div>
                  <div className="flex gap-4">
                    <h2 className="text-white text-xl font-medium	">Sale up to</h2>
                    <div className="w-24 rounded text-white bg-orange-500 text-center">
                      <h2 className="text-xl font-semibold">30% OFF</h2>
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-normal text-gray-300">Free shipping on all your orders.</p>
                </div>
              </div>
            </div>
            <GreenButton />
          </div>
        </div>
        <div className="twoPhotos flex flex-col gap-6 w-2/5">
          <div
            className="photo1 bg-right-bottom w-96 h-64 rounded-md relative"
            style={{
              backgroundImage: `url(${images.shopBag})`,
              backgroundPosition: "right bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            alt="Shopping Bag"
          >
            <div className="w-44 min-h-36 top-8 left-8 absolute items-center justify-center ">
              <div className="w-36 h-16">
                <h6 className="text-sm font-medium">SUMMER SALE</h6>
                <h2 className="font-semibold text-3xl">75% OFF</h2>
              </div>
              <p className="text-sm font-normal text-gray-400">Only Fruit & Vegetable</p>
              
              <div className="flex gap-2">
              <h5 className="text-green-500">Shop now</h5>
              <IoMdArrowForward className="text-green-500 place-self-center" />
              </div>
              
            </div>
          </div>
          <div
            className="photo2 w-96 h-64 rounded-md"
            style={{
              backgroundImage: `url(${images.leaves})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            alt="Leaves"
          >
            <div className="w-80 h-40 top-8 left-10 relative text-white flex flex-col justify-center items-center">
              <h5 className="text-sm font-medium text-gray-300">BEST DEAL</h5>
              <h5 className="text-center text-3xl font-semibold	">Special Products <br /> Deal of the Month</h5>
              <div className="flex gap-2 text-green-500"> 
                <h5 className="text-base font-semibold">Shop now</h5>
                <IoMdArrowForward className="place-self-center"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
