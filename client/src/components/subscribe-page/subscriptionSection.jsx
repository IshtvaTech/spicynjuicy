import React from "react";
import { FaShippingFast, FaUndo, FaGift } from "react-icons/fa"; 
import { assets } from "../../assets/assets";

const SubscribeSection = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
     
      <div className="max-w-lg w-full flex flex-col items-center text-center md:items-start md:text-left ml-30">
       
        <div className="w-full flex flex-col items-center text-center ml-[70%] mb-20">
          <h1 className="text-5xl font-bold text-black">SUBSCRIBE. CHOMP. REPEAT.</h1>
          <p className="text-md  text-gray-600 mt-5">
            Subscribe to save 10% on every order and say goodbye to boring snacks.
          </p>
        </div>

      
        <div className="mt-10 space-y-6">
         
          <div className="flex items-center gap-4">
            <FaShippingFast className="text-red-600 w-20 h-10" />
            <div>
              <h2 className="text-2xl  text-black">10% OFF + FREE SHIPPING</h2>
              <p className="text-gray-600">
                Take 10% off every order and enjoy free shipping on your favorite Chomps flavors.
              </p>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <FaUndo className="text-blue-600 w-20 h-10" />
            <div>
              <h2 className="text-2xl  text-black">SKIP OR CANCEL ANYTIME</h2>
              <p className="text-gray-600">
                We make it easy to update flavors, skip an order, or cancel whenever you want.
              </p>
            </div>
          </div>

         
          <div className="flex items-center gap-4">
            <FaGift className="text-green-600 w-20 h-10" />
            <div>
              <h2 className="text-2xl  text-black">GET REWARDED</h2>
              <p className="text-gray-600">
                Earn points on every order to put towards Chomps, merch, and more!
              </p>
            </div>
          </div>
        </div>

       
        <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg text-lg  hover:bg-red-700 transition cursor-pointer">
          SUBSCRIBE TODAY
        </button>
      </div>

      
      <div className="mt-20 mr-30 md:mt-0 md:ml-10 flex justify-center">
        <img
          src={assets.candyimg2}
          alt="Chomps Products"
          className="max-w-xs md:max-w-md mt-30"
        />
      </div>
    </div>
  );
};

export default SubscribeSection;
