import React from "react";
import { assets } from "../../assets/assets";

const ProductBenefits = () => {
  const benefits = [
    { img: assets.protine, text: "10-12G OF PROTEIN" },
    { img: assets.suger, text: "0G SUGAR" },
    { img: assets.keto, text: "KETO FRIENDLY" },
    { img: assets.carb, text: "LOW-CARB" },
    { img: assets.allergy, text: "ALLERGY FRIENDLY" },
    { img: assets.filler, text: "NO FILLERS" },
  ];

  return (
    <div className="text-center py-10 mt-10 px-4">
      {/* Responsive Header with Soft Shadow */}
      <h2
        className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-blue-700 
        sm:text-5xl lg:text-7xl text-center"
      >
        Cool, Refreshing, and <br className="hidden md:block" /> Bursting with
        Flavor!
      </h2>

      {/* Benefit Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32 sm:w-40 md:w-48 p-4 rounded-lg 
            bg-gradient-to-b from-blue-50 to-white shadow-md transition-transform transform 
            hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-16 sm:w-20 md:w-28 h-auto"
            />
            <p className="mt-3 text-sm sm:text-lg md:text-xl font-bold uppercase text-gray-900 text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefits;
