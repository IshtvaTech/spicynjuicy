import React, { useState } from "react";
import wrapperImage from "../../assets/candy2.jpg";
import candyImage from "../../assets/candy.avif";
import mangocandy from "../../assets/mangocandy.png";
import mangocandywrapper from "../../assets/mangocandywrapper.png";
import pineapplecandy from "../../assets/pineapplecandy.png";
import pineapplecandywrapper from "../../assets/pineapplecandywrapper.png";
import litchicandy from "../../assets/litchicandy.png";
import litchicandywrapper from "../../assets/litchicandywrapper.png";
import blackberrycandy from "../../assets/blackberrycandy.png";
import blackberrycandywrapper from "../../assets/blackberrycandywrapper.png";

const candyData = [
  { id: 1, wrapper: wrapperImage, candy: candyImage },
  { id: 2, wrapper: mangocandywrapper, candy: mangocandy },
  { id: 3, wrapper: pineapplecandywrapper, candy: pineapplecandy },
  { id: 4, wrapper: litchicandywrapper, candy: litchicandy },
  { id: 5, wrapper: blackberrycandywrapper, candy: blackberrycandy },
];

const IcePopSection = () => {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center py-10 px-6 max-w-3xl mt-10">
        <h2 className="text-4xl md:text-[70px] font-extrabold text-black leading-tight">
          THESE SNACKS STACK UP
        </h2>
        <p className="mt-4 text-md text-gray-700">
          Who said snacks need to be complicated? Stick to the basics: 0g sugar
          and plenty of protein, in a range of Chompable flavors. Nutrition your
          taste buds will understand.
        </p>
        <button className="mt-6 bg-red-500 text-white py-3 px-6 w-64 rounded-full text-2xl hover:bg-red-600 cursor-pointer">
          SHOP ALL
        </button>
      </div>

      {/* Candy Image Swap Section */}
      <div className="flex flex-wrap gap-6 justify-center items-center mt-10 md:mt-20">
        {candyData.map((candyItem) => (
          <CandyItem
            key={candyItem.id}
            wrapper={candyItem.wrapper}
            candy={candyItem.candy}
          />
        ))}
      </div>
    </div>
  );
};

const CandyItem = ({ wrapper, candy }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 md:w-64 h-64 md:h-80 flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Swapping Images on Hover/Tap */}
      <img
        src={isHovered ? candy : wrapper}
        alt="Candy"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default IcePopSection;
