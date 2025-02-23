import React from "react";

const ScrollingBar = () => {
  return (
    <div className="bg-red-600 py-3 overflow-hidden whitespace-nowrap  mt-30 h-[100px] flex items-center justify-center">
      <div className="flex w-max animate-marquee items-center">
        <div className="flex text-white text-2xl font-bold uppercase gap-12">
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
        </div>
        <div
          className="flex text-white text-[40px] font-bold uppercase gap-12"
          aria-hidden="true"
        >
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
          <span>
            100% Natural , Lab verified and Mineral water based Ice!
            &nbsp;•&nbsp;
          </span>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingBar;
