import React from "react";
import { Leaf, ShieldCheck, Utensils } from "lucide-react"; 
import { motion } from "framer-motion";

const IcePopBenefits = () => {
  return (
    <section className="bg-green-600 text-black py-16 px-6 md:px-20 ">
      <div className="text-center mt-10  ">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          ICE POPS WITHOUT SHORTCUTS
        </h2>
        <p className="mt-4 text-lg">
          Our team did the work, so you don’t have to.
          <br />
          Ice Pops are made with thoughtfully-sourced simple ingredients.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center ">
        
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-green text-black-600 p-6 border-4 border-black rounded-full shadow-md">
            <Leaf size={150} />
          </div>
          <h3 className="mt-6 text-2xl font-bold">HIGH-QUALITY INGREDIENTS</h3>
          <p className="mt-4 text-md max-w-sm">
            Our Ice Pops are made with real fruit and natural flavors, ensuring
            every bite is packed with goodness.
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-green text-black-600 p-6 border-4 border-black rounded-full shadow-md">
            <ShieldCheck size={150} />
          </div>
          <h3 className="mt-6 text-2xl font-bold">REAL INGREDIENTS</h3>
          <p className="mt-4 text-md max-w-sm">
            We don’t take shortcuts when it comes to quality. No artificial
            sweeteners, just real fruit and simple ingredients.
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-green text-black-600  border-4 border-black p-6 rounded-full shadow-md">
            <Utensils size={150} />
          </div>
          <h3 className="mt-6 text-2xl font-bold">BETTER TASTE</h3>
          <p className="mt-4 text-md max-w-sm">
            Our Ice Pops are bursting with delicious flavors, crafted to bring
            you the best snacking experience.
          </p>
        </motion.div>
      </div>

      
      <div className="mt-12 flex justify-center">
        <button className="mt-6 bg-red-500 text-white py-3 px-6 w-64 rounded-full text-2xl  hover:bg-red-600 cursor-pointer">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default IcePopBenefits;
