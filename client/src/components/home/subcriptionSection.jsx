import React from "react";
import { BadgeIndianRupee, MessageSquareQuote, CircleX, LockKeyholeOpen, HandCoins } from "lucide-react";
import { motion } from "framer-motion";

const SubcriptionSection = () => {
  return (
    <div className="bg-[#FBEC5D] text-black text-center py-16">
      <h1 className="text-[70px] mb-4">STICK SOME POWER IN YOUR PANTRY.</h1>
      <p className="text-lg mb-8">Subscribe to something equal parts tasty and rewarding.</p>

      <div className="flex justify-center gap-12 mt-20 mb-10">
        {[{icon: <BadgeIndianRupee size={150} />, label: "10% Off Every Order"},
          {icon: <MessageSquareQuote size={150} />, label: "Text Updates"},
          {icon: <CircleX size={150} />, label: "Cancel Anytime"},
          {icon: <LockKeyholeOpen size={150} />, label: "Early Access"},
          {icon: <HandCoins size={150} />, label: "Rewards Points"}].map((item, index) => (
          <motion.div key={index} className="flex flex-col items-center" whileHover={{ scale: 1.05 }}>
            <div className="bg-green text-black-600 p-6 rounded-full shadow-md">
              {item.icon}
            </div>
            <h3 className="mt-6 text-2xl">{item.label}</h3>
          </motion.div>
        ))}
      </div>

      <button className="bg-white text-red-700 px-6 py-3 rounded-full shadow-md hover:bg-red-500 hover:border-2 hover:text-white cursor-pointer transition-all duration-300 ease-in-out mt-10 w-[200px]">
        SUBSCRIBE & SAVE
      </button>

     
    </div>
    
    
  );
};

export default SubcriptionSection;
