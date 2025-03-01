import React from "react";

const Section2 = () => {
  return (
    <div className="w-full bg-yellow-500 flex flex-col items-center justify-center py-16 px-4 h-[500px]">
      {/* Heading */}
      <h2 className="text-white text-4xl md:text-5xl text-center relative">
        <span className="relative">
          NOT SEEING YOUR <br />  FAVORITE STORE?
          {/* Decorative Lines */}
          <span className="absolute left-[-30px] top-[10px] md:left-[-50px] md:top-[15px] text-black text-3xl">✨</span>
          <span className="absolute right-[-30px] top-[10px] md:right-[-50px] md:top-[15px] text-black text-3xl">✨</span>
        </span>
      </h2>

      {/* Button */}
      <a
        href="https://forms.gle/your-google-form-link" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-white text-red-500  py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
      >
        STORE REQUEST FORM
      </a>
    </div>
  );
};

export default Section2;
