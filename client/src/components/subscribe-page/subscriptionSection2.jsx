import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { assets } from "../../assets/assets";

const productImages = {
  Mango: assets.mangocandy,
  Litchi: assets.litchicandy,
  Orange: assets.candy,
  Blackberry: assets.blackberrycandy,
  Pineapple: assets.pineapplecandy
};

const productPrices = {
  Mango: 100,
  Litchi: 110,
  Orange: 124,
  Blackberry: 150,
  Pineapple: 120 
};

const SubscribeSection2 = () => {
  const [selectedPack, setSelectedPack] = useState("10");
  const [subscription, setSubscription] = useState("30");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("Mango");

  const basePricePerItem = productPrices[selectedProduct]; 
  const basePricePerPack = selectedPack === "10" ? basePricePerItem * 10 : basePricePerItem * 24;
  const discountPricePerPack = basePricePerPack * 0.9; 
  const totalPrice = discountPricePerPack * quantity; 

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
  };

  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div className="bg-[#fdecea] py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 border-2 border-red-500">
      
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={productImages[selectedProduct]} 
          alt={`${selectedProduct} Ice Pop`}
          className="max-w-xs md:max-w-md"
        />
      </div>

     
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md border-2 border-red-500">
        <h1 className="text-3xl font-bold text-black text-center">SUBSCRIBE TODAY</h1>
        <p className="text-lg font-semibold mt-4">Choose your favorite Ice Pop and setup your subscription</p>
        
      
        <div className="mt-4">
          <p className="font-semibold">Product:</p>
          <select 
            className="w-full p-2 border rounded mt-2 cursor-pointer"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            {Object.keys(productPrices).map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        
        <div className="mt-4 flex gap-4">
          <button
            className={`p-3 w-full text-center cursor-pointer rounded border ${selectedPack === "10" ? "bg-red-600 text-white" : "border-red-500"}`}
            onClick={() => handlePackSelection("10")}
          >
            10 PACK <br /> ₹{(basePricePerItem).toFixed(2)} / Ice Pop
          </button>
          <button
            className={`p-3 w-full text-center cursor-pointer rounded border ${selectedPack === "24" ? "bg-red-600 text-white" : "border-red-500"}`}
            onClick={() => handlePackSelection("24")}
          >
            24 PACK <br /> ₹{(basePricePerItem * 0.75).toFixed(2)} / Ice Pop
          </button>
        </div>

      
        <div className="mt-4">
          <p className="font-semibold">Subscribe & Save</p>
          <p className="text-lg text-gray-500 line-through">₹{(basePricePerPack * quantity).toFixed(2)}</p>
          <p className="text-xl text-red-600 font-bold">₹{totalPrice.toFixed(2)}</p>
          <select
            className="w-full p-2 border rounded mt-2 cursor-pointer"
            value={subscription}
            onChange={handleSubscriptionChange}
          >
            <option value="30">30 Days</option>
          </select>
        </div>

      
        <div className="mt-4 flex gap-4 items-center">
          <FaCheck className="text-red-600" /> <span>Happiness Guarantee</span>
        </div>
        <div className="mt-2 flex gap-4 items-center">
          <FaCheck className="text-red-600" /> <span>Skip/Cancel Anytime</span>
        </div>
        <div className="mt-2 flex gap-4 items-center">
          <FaCheck className="text-red-600" /> <span>Free Shipping</span>
        </div>

      
        <div className="mt-4  flex items-center gap-4">
          <button
            className="p-2 cursor-pointer  border rounded w-10 text-center bg-gray-200"
            onClick={() => handleQuantityChange("decrease")}
          >
            -
          </button>
          <p className="text-lg font-bold">{quantity}</p>
          <button
            className="p-2 cursor-pointer border rounded w-10 text-center bg-gray-200"
            onClick={() => handleQuantityChange("increase")}
          >
            +
          </button>
        </div>

        
        <button className="mt-6 w-full bg-red-600 text-white p-3 rounded-lg text-lg hover:bg-red-700 cursor-pointer">
          ADD TO CART - ₹{totalPrice.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection2;
