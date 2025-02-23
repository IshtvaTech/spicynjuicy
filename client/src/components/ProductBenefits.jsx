import React from "react";
import { assets } from "../assets/assets.js";

const ProductBenefits = () => {
  const benefits = [
    { img: assets.memories, text: "LIVE MEMORIES" },
    { img: assets.noSugar, text: "NO SUGAR" },
    { img: assets.Natural, text: "NATURALLY JUICY" },
    { img: assets.Ice, text: "Mineral Water" },
    { img: assets.EcoFriedly, text: "Eco Friendly" },
    { img: assets.filler, text: "NO ARTIFICIALS" },
  ];

  return (
    <div className="text-center py-10 mt-10">
      <h2 className="text-[80px] font-bold uppercase tracking-wide">
        Cool, Refreshing, and Bursting <br /> with Flavor!
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-48">
            <img src={item.img} alt={item.text} className="w-28 h-28" />
            <p className="mt-3 text-xl font-bold uppercase">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefits;
