import React from "react";

const RewardsSection = () => {
  const rewards = [
    { amount: "₹100 OFF", points: "250 POINTS" },
    { amount: "₹200 OFF", points: "500 POINTS" },
    { amount: "₹300 OFF", points: "750 POINTS" },
    { amount: "₹400 OFF", points: "1000 POINTS" },
  ];

  return (
    <div className="w-full bg-yellow-600 flex flex-col items-center py-16 px-4">
      
      <h2 className="text-black text-3xl md:text-4xl text-center">
        HOW TO USE YOUR POINTS
      </h2>
      <p className="text-black text-center mt-2 text-md">
        Redeeming your points is easy! Click Redeem My Points and copy & paste
        your code at checkout.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-8 ">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-blue-900">{reward.amount}</h3>
            <p className="text-lg text-gray-800">{reward.points}</p>
          </div>
        ))}
      </div>

   
      <button className="mt-8 bg-red-600 text-white cursor-pointer py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
        REDEEM MY POINTS
      </button>
    </div>
  );
};

export default RewardsSection;
