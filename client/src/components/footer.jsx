import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <div className="bg-[#d02c2f] p-3 inline-block">
            <span className="text-white text-2xl font-bold">juicynCrazy</span>
          </div>
        </div>

        <div>
          <h3 className="text-[#d02c2f] font-bold text-lg mb-3">SHOP</h3>
          {/*  <ul className="space-y-2">
            <li>Beef</li>
            <li>Turkey</li>
            <li>Venison</li>
            <li>Chomplings</li>
            <li>Shop All</li>
          </ul> */}
        </div>

        <div>
          <h3 className="text-[#d02c2f] font-bold text-lg mb-3">EARN</h3>
          <ul className="space-y-2">
            {/* <li>Rewards</li>
            <li>Subscribe & Save</li>
            <li>Affiliate</li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-[#d02c2f] font-bold text-lg mb-3">LEARN</h3>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Careers</li>
            {/*            <li>Student Discount</li>
            <li>Blog</li>
            <li>Where To Buy</li>
            <li>Our Mission</li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-[#d02c2f] font-bold text-lg mb-3">SUPPORT</h3>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Shipping & Returns</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Product Guarantee</li>
            <li>Wholesale</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          Your Privacy Rights | Privacy Notice | Terms of Service |
          Accessibility Statement
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="text-[#d02c2f] text-xl" />
          <FaInstagram className="text-[#d02c2f] text-xl" />
          <FaPinterestP className="text-[#d02c2f] text-xl" />
          <FaLinkedinIn className="text-[#d02c2f] text-xl" />
          <FaTiktok className="text-[#d02c2f] text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
