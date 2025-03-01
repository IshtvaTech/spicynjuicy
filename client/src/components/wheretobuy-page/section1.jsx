import React from "react";
import { assets } from "../../assets/assets";

const Section1 = () => {
  return (
    <div className="relative w-full bg-green-600 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-24 h-[562px]">
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left z-10">
        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          WHERE TO BUY
        </h2>
        <p className="text-white text-lg md:text-xl mt-4 md:mt-6">
          Find your favorite products at stores near you or order online for convenience.
        </p>
        <button className="mt-6 bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Find Stores
        </button>
      </div>

      {/* Image Container */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={assets.bgimg}
          alt="Where to Buy"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg md:mt-12"
        />
      </div>
    </div>
  );
};

export default Section1;
