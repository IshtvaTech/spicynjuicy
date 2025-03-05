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
      className="relative text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundColor: "#FBEC5D",
        minHeight: "100vh",
      }}
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-red-500 leading-tight">
          COOL OFF WITH ICE POPS!
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-800 leading-relaxed">
          Refresh your taste buds with our new fruity ice pops.
          <br /> Frost 'it .. Feast 'it .. Enjoy 'it!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-white text-red-500 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-transform cursor-pointer"
        >
          GET YOURS NOW &gt;
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Left Button */}
        <button
          className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md text-red-600 text-xl hover:bg-gray-100 transition"
          onClick={prevImage}
          aria-label="Previous image"
        >
          &#10094;
        </button>

        {/* Image Animation */}
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
            loading="lazy"
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Button */}
        <button
          className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md text-red-600 text-xl hover:bg-gray-100 transition"
          onClick={nextImage}
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
