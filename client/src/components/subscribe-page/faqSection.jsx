import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { assets } from "../../assets/assets";

const faqs = [
  {
    question: "How do I store my Icepop Candy?",
    answer: "Store your Icepop Candy in the freezer for a refreshing and cool treat anytime!"
  },
  {
    question: "Are Icepop Candies gluten-free?",
    answer: "Yes! Our Icepop Candies are 100% gluten-free and made with natural flavors."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer discounts for bulk purchases. Contact our support team for details!"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-gray-50 gap-60">
     
      <div className="md:w-1/3 ml-20 w-full p-4">
        <img 
          src={assets.candyimg}
          alt="Icepop Candy" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

     
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-3xl font-bold text-black mb-4">FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-black py-3">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-black focus:outline-none cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
