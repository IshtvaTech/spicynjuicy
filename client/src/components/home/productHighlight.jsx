import React from "react";
import { assets } from "../../assets/assets";

const ProductHighlight = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6 relative text-center md:text-left">
        {/* Decorative SVG */}
        <div className="absolute top-[-40px] right-[10%] md:right-[-5%] w-28 h-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 534 534"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="matrix(1, 0, 0, 1, 17, 17)">
              <g opacity="1" transform="rotate(180, 245.724, 243.306)">
                <g transform="matrix(-1, 0, 0, 1, 245.724, 243.306)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    stroke="rgb(208,44,47)"
                    strokeOpacity="1"
                    strokeWidth="20"
                    d="M-207.564,-81.214 C-196.933,-64.048 -139.474,24.865 -21.883,52.742 C98.214,81.213 191.095,24.699 207.564,14.28"
                  ></path>
                </g>
                <g transform="matrix(-1, 0, 0, 1, 60.307, 280.157)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    stroke="rgb(208,44,47)"
                    strokeOpacity="1"
                    strokeWidth="20"
                    d="M-43.112,-52.75 C-16.076,-46.718 10.96,-40.686 37.996,-34.654 C41.143,-33.952 43.112,-30.818 42.38,-27.679 C36.136,-0.869 29.892,25.94 23.647,52.75"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase leading-tight">
          Protein Portions for <br /> Every Occasion
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700">
          Big or small, we've got it all. Our full-size sticks power even{" "}
          <br className="hidden md:block" />
          the busiest days, while our mini Chomplings give you that{" "}
          <br className="hidden md:block" />
          much-needed final mile fuel.
        </p>

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl py-3 px-6 md:px-8 rounded-lg transition-all cursor-pointer mt-4 tracking-wide shadow-md hover:shadow-lg">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={assets.pimg}
          alt="Jalapeño Beef Mini Sticks"
          className="h-[200px] md:h-[300px] rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductHighlight;
