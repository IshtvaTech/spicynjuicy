import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { assets } from "../../assets/assets";

const faqs = [
  { question: "What is Icepop Candy?", answer: "Icepop Candy is a delicious frozen treat that comes in various fruity flavors." },
  { question: "How do I store Icepop Candy?", answer: "Keep Icepop Candy in the freezer to enjoy its refreshing taste." },
  { question: "Are there any sugar-free options available?", answer: "Yes! We offer sugar-free Icepop Candy for a healthier choice." },
  { question: "What flavors are available?", answer: "We have strawberry, mango, blueberry, and more exciting flavors!" },
  { question: "Where can I buy Icepop Candy?", answer: "You can purchase Icepop Candy at supermarkets and online stores." },
];

const QuestionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-yellow-600 py-12 px-6 md:px-12 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
       
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={assets.icepop}
            alt="Icepop Candy" 
            className="w-full max-w-sm md:max-w-md lg:max-w-md h-[600px] mr-40 rounded-lg shadow-lg object-cover"
          />
        </div>

        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-left">
          <h2 className="text-4xl  mb-6">FAQ</h2>
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-black py-4 ">
              <button
                className="flex justify-between items-center w-full text-lg font-semibold focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-base text-black">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
