import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const HeaderSection = () => {
  const images = [assets.candyimg, assets.candyimg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="relative text-white p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundColor: "#FBEC5D", 
        minHeight: "100vh",
      }}
    >
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left p-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg text-red-500">
          COOL OFF WITH ICE POPS!
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-800">
          Refresh your taste buds with our new fruity ice pops.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-white text-red-500 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-transform cursor-pointer"
        >
          GET YOURS NOW &gt;
        </motion.button>
      </motion.div>

      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <button
          className="absolute left-0 p-2 cursor-pointer bg-opacity-50 rounded-full text-red-600 text-xl hover:bg-opacity-75 transition"
          onClick={prevImage}
        >
          &#10094;
        </button>

        <motion.div
          key={currentIndex}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-[80%] max-w-lg h-auto"
        >
          <motion.img
            src={images[currentIndex]}
            alt="Ice Pop"
            className="w-full h-auto rounded-lg drop-shadow-2xl"
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <button
          className="absolute right-0 p-2 cursor-pointer bg-opacity-50 rounded-full text-red-600 text-xl hover:bg-opacity-75 transition"
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
