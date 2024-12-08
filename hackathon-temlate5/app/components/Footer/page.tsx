import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="text-blue-600 hover:text-gray-800 cursor-pointer text-xl" />
            <FaInstagram className="text-pink-600 hover:text-gray-800 cursor-pointer text-xl" />
            <FaTwitter className="text-blue-400 hover:text-gray-800 cursor-pointer text-xl" />
          </div>
        </div>
      </div>
      <footer className="bg-gray-50 py-12 text-gray-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-4">Company Info</h3>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul>
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border rounded-l-md focus:outline-none flex-grow"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 mt-2 text-sm">Lore imp sum dolor Amit</p>
            </div>
          </div>
          <hr className="mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
