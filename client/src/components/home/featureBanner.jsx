import React from "react";

const FeatureBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-green-600 p-6 md:p-12 h-[800px] ">
      <div className="md:w-1/2 flex justify-center items-center rounded-lg p-4">
        <img
          src="https://chomps.com/cdn/shop/files/bts-fuel-for-you-looped.gif?v=1724095464"
          alt="A young girl eating a Turkey Chomps"
          className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl rounded-md"
        />
      </div>

      <div className="md:w-1/2 text-black text-center md:text-left p-6 relative bg-green-600 rounded-lg mt-30">
        
        <div className="absolute -top-40  transform -translate-x-1/2 w-50 h-50">
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
                    stroke="rgb(208,44,47)"
                    strokeOpacity="1"
                    strokeWidth="20"
                    d="M-207.564,-81.214 C-196.933,-64.048 -139.474,24.865 -21.883,52.742 C98.214,81.213 191.095,24.699 207.564,14.28"
                  ></path>
                </g>
                <g transform="matrix(1,0,0,1,419.307,285.157)">
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

        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 text-black tracking-wide md:tracking-wider">
          Fuel For You And All You <br /> Do
        </h1>

        <p className="text-lg md:text-xl mb-6 text-black  mt-7 leading-relaxed md:leading-loose">
          Give your inner nutritionist the day off. Our sticks are packed with{" "}
          <br />
          flavor and free of the icky stuff. Keto-friendly, Paleo-certified,{" "}
          <br /> and gluten-free!
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white text-xl md:text-2xl py-3 px-8 rounded-lg transition-all w-70 cursor-pointer mt-3 tracking-wide">
          SHOP ALL
        </button>
      </div>
    </div>
  );
};

export default FeatureBanner;
