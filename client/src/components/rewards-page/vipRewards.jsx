import React from "react";

const VipRewards = () => {
  return (
    <div className="w-full bg-yellow-600 flex flex-col items-center py-24 px-6 ">
      {/* Heading & Description */}
      <h2 className="text-black text-5xl md:text-6xl text-center underline">
        VIPS EARN EVEN MORE
      </h2>
      <p className="text-black text-center mt-6 text-xl leading-relaxed">
        The more you spend, the more exclusive perks you unlock!
      </p>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mt-10 w-full max-w-7xl">
        <table className="w-full text-center border-collapse text-2xl">
          <thead>
            <tr className="border-b bg-gray-100 min-h-[80px]">
              <th className="p-8 text-left font-bold text-3xl">BENEFITS</th>
              <th className="p-8 text-gray-700 font-bold text-3xl">
                ICEPOP LOVER <br />
                <span className="text-xl font-normal">SPEND ₹0 - ₹20,000</span>
              </th>
              <th className="p-8 text-red-600 font-bold text-3xl">
                ICEPOP CHAMP <br />
                <span className="text-xl font-normal">SPEND ₹20,000+</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b min-h-[80px]">
              <td className="p-8 text-left">Point Multiplier</td>
              <td className="p-8 font-bold text-3xl">1X</td>
              <td className="p-8 font-bold text-3xl">2X</td>
            </tr>
            <tr className="border-b min-h-[80px]">
              <td className="p-8 text-left">3 Purchase Streak</td>
              <td className="p-8"><span className="text-red-600 text-3xl">✔</span></td>
              <td className="p-8"><span className="text-red-600 text-3xl">✔</span></td>
            </tr>
            <tr className="border-b min-h-[80px]">
              <td className="p-8 text-left">Early Access To Sales</td>
              <td className="p-8"></td>
              <td className="p-8"><span className="text-red-600 text-3xl">✔</span></td>
            </tr>
            <tr className="border-b min-h-[80px]">
              <td className="p-8 text-left">Coupon For One Purchase</td>
              <td className="p-8"></td>
              <td className="p-8 font-bold text-3xl text-red-600">20% OFF</td>
            </tr>
            <tr className="min-h-[80px]">
              <td className="p-8 text-left">Birthday Rewards</td>
              <td className="p-8"></td>
              <td className="p-8"><span className="text-red-600 text-3xl">✔</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VipRewards;
