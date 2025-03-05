import React from "react";
import { assets } from "../../assets/assets";

const FeatureBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-green-700 p-6 md:p-12 min-h-screen">
      {/* Left Side Image */}
      {
        <div className="md:w-1/2 flex justify-center items-center rounded-lg p-4">
          <img
            src={assets.hall} // Replace with the actual key in your assets object
            alt="pops makes you happy"
            className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl rounded-md"
          />
        </div>
      }

      {/* Right Side Content */}
      <div className="md:w-1/2 text-white text-center md:text-left p-6 relative">
        {/* Decorative SVG */}
        <div className="absolute -top-16 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-32 md:w-48 opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 534 534"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="matrix(1,0,0,1,17,17)">
              <g opacity="1" transform="rotate(180, 245.724, 243.306)">
                <g transform="matrix(1,0,0,1,245.724,243.306)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="0.5"
                    strokeWidth="14"
                    d="M-207.564,-81.214 C-196.933,-64.048 -139.474,24.865 -21.883,52.742 C98.214,81.213 191.095,24.699 207.564,14.28"
                  ></path>
                </g>
                <g transform="matrix(1,0,0,1,419.307,285.157)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="0.5"
                    strokeWidth="14"
                    d="M-43.112,-52.75 C-16.076,-46.718 10.96,-40.686 37.996,-34.654 C41.143,-33.952 43.112,-30.818 42.38,-27.679 C36.136,-0.869 29.892,25.94 23.647,52.75"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-4 text-white tracking-wide md:tracking-wider drop-shadow-lg">
          innovative flavors, push the boundaries{" "}
          <br className="hidden md:block" />
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-6 text-white/90 mt-4 leading-relaxed md:leading-loose">
          Introducing our Refreshing Ice Pops, the perfect treat for any season!
          Made with only the freshest, organic ingredients, our ice pops are
          bursting with natural fruit flavors, no artificial sweeteners or
          preservatives
        </p>

        {/* CTA Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl md:text-2xl py-3 px-8 rounded-lg transition-all cursor-pointer mt-3 tracking-wide font-bold shadow-lg hover:shadow-xl">
          SHOP ALL
        </button>
      </div>
    </div>
  );
};

export default FeatureBanner;
