import React from "react";
import {
  BadgeIndianRupee,
  MessageSquareQuote,
  CircleX,
  LockKeyholeOpen,
  HandCoins,
} from "lucide-react";
import { motion } from "framer-motion";

const SubscriptionSection = () => {
  const benefits = [
    { icon: <BadgeIndianRupee size={80} />, label: "10% Off Every Order" },
    { icon: <MessageSquareQuote size={80} />, label: "Text Updates" },
    { icon: <CircleX size={80} />, label: "Cancel Anytime" },
    { icon: <LockKeyholeOpen size={80} />, label: "Early Access" },
    { icon: <HandCoins size={80} />, label: "Rewards Points" },
  ];

  return (
    <div className="bg-[#FBEC5D] text-black text-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-[70px] font-extrabold uppercase leading-tight">
        Stick Some Power in Your Pantry.
      </h1>
      <p className="text-lg mt-4">
        Subscribe to something equal parts tasty and rewarding.
      </p>

      {/* Benefits Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12 justify-center mt-12">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-green-500 text-white p-6 rounded-full shadow-md">
              {item.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.label}</h3>
          </motion.div>
        ))}
      </div>

      {/* Subscribe Button */}
      <button className="bg-white text-red-700 px-6 py-3 rounded-full shadow-md hover:bg-red-500 hover:border-2 hover:text-white cursor-pointer transition-all duration-300 ease-in-out mt-10 w-[200px] font-bold text-lg">
        SUBSCRIBE & SAVE
      </button>
    </div>
  );
};

export default SubscriptionSection;
