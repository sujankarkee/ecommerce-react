import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaHeadsetSolid } from "react-icons/lia";
import { BsBagCheck } from "react-icons/bs";
import { PiPackage } from "react-icons/pi";

function Featured() {
  return (
    <div>
        <div className="container max-w-screen-xl mx-auto h-32 flex items-center justify-between mt-6 shadow px-10">
            
            <div className="flex gap-2">
            <LiaShippingFastSolid className='text-green-500 w-10 h-10'/>
            <div className="feature1">
            <h2 className='font-semibold text-base'>
                Free Shipping
            </h2>
            <p>
                Free shipping on all your order
            </p>
            </div>
            </div>

            <div className="flex gap-2 ">
            <LiaHeadsetSolid className='text-green-500 w-10 h-10'/>
            <div className="feature2">
            <h2 className='font-semibold text-base'>
                Customer Support 24/7
            </h2>
            <p>
                Instant access to Support
            </p>
            </div>
            </div>

            <div className="flex gap-2 ">
            <BsBagCheck className='text-green-500 w-10 h-10'/>
            <div className="feature3">
            <h2 className='font-semibold text-base'>
                100% Secure Payment
            </h2>
            <p>
                We ensure your money is save
            </p>
            </div>
            </div>

            <div className="flex gap-2">
            <PiPackage className='text-green-500 w-10 h-10'/>
            <div className="feature1">
            <h2 className='font-semibold text-base'>
                Money-Back Guarantee
            </h2>
            <p>
                30 Days Money-Back Guarantee
            </p>
            </div>
            </div>

            

        </div>
    </div>
  )
}

export default Featured