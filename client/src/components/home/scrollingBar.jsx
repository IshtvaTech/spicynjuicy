import React from "react";

const ScrollingBar = () => {
  return (
    <div className="bg-red-500 py-3 overflow-hidden whitespace-nowrap  mt-30 h-[100px] flex items-center justify-center">
      <div className="flex w-max animate-marquee items-center">
        <div className="flex text-white text-2xl font-bold uppercase gap-12">
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
        </div>
        <div className="flex text-white text-[40px] font-bold uppercase gap-12" aria-hidden="true">
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
          <span>Find us in over 20,000 stores nationwide! &nbsp;•&nbsp;</span>
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