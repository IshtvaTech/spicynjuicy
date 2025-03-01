import React from "react";
import { FaShoppingBag, FaBirthdayCake, FaUser, FaStar } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

const pointsData = [
  { icon: <FaShoppingBag size={50} />, points: 75, text: "Make 3 Purchases Over $50" },
  { icon: <FaBirthdayCake size={50} />, points: 250, text: "Happy Birthday" },
  { icon: <FaUser size={50} />, points: 125, text: "Create an account" },
  { icon: <FaStar size={50} />, points: 50, text: "Leave a Review" },
  { icon: <AiFillInstagram size={50} />, points: 100, text: "Follow us on Instagram" },
  { icon: <MdWeb size={50} />, points: 150, text: "Visit our website" },
];

const EarnPoints = () => {
  return (
    <div className="w-full py-12 bg-white text-center cursor-pointer">
      <h2 className="text-3xl font-bold mb-8">OTHER WAYS TO EARN POINTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {pointsData.map((item, index) => (
          <div
            key={index}
            className="bg-red-600 text-white rounded-lg p-8 flex flex-col items-center shadow-lg 
            h-56 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {item.icon}
            <p className="text-2xl font-bold mt-4">{item.points} POINTS</p>
            <p className="text-lg mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarnPoints;
