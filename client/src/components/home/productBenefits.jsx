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
