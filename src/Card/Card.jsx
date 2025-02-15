import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Card = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        
        <div className="flex flex-col items-center space-y-3 bg-red-500 p-6 rounded-xl shadow-lg cursor-pointer">
          <MdPayment className="text-5xl" />
          <p className="text-lg font-semibold">Secure Payment</p>
        </div>

        <div className="flex flex-col items-center space-y-3 bg-red-500 p-6 rounded-xl shadow-lg cursor-pointer">
          <FaShippingFast className="text-5xl" />
          <p className="text-lg font-semibold">Free Shipping</p>
        </div>

        <div className="flex flex-col items-center space-y-3 bg-red-500 p-6 rounded-xl shadow-lg cursor-pointer">
          <TbTruckReturn className="text-5xl" />
          <p className="text-lg font-semibold">Easy Return</p>
        </div>

        <div className="flex flex-col items-center space-y-3 bg-red-500 p-6 rounded-xl shadow-lg cursor-pointer">
          <MdOutlineProductionQuantityLimits className="text-5xl" />
          <p className="text-lg font-semibold">Authentic Products</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
