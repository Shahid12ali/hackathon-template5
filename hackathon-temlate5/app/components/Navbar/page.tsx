import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt, FaUser, FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const HeaderHeroSection = () => {
  return (
    <div>
      <div className="bg-cyan-950 text-white text-sm flex justify-between items-center px-4 py-4 relative">
        <div className="flex space-x-4">
          <span className="flex items-center space-x-2">
            <FaPhoneAlt className="text-xl" />
            <span>(225) 555-0118</span>
          </span>
          <span className="flex items-center space-x-2">
            <IoIosMail className="text-xl" />
            <span>michelle.rivera@example.com</span>
          </span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl">Follow Us:</span>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300 text-xl">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 text-xl">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 text-xl">
              <CiTwitter />
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Bandage</div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Shop</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Pages</a></li>
        </ul>
        <div className="space-x-4 flex items-center">
          <a href="#" className="text-blue-500 text-sm font-medium flex items-center space-x-2">
            <FaUser className="text-xl" />
            <span>Login / Register</span>
          </a>
          <a href="#" className="text-blue-500 text-sm font-medium flex items-center space-x-2">
            <IoIosSearch className='text-xl'/>
          </a>
          <a href="#" className="text-blue-500 text-sm font-medium flex items-center space-x-2">
            <FaShoppingCart className='text-xl'/>
            <span></span>
          </a>
          <a href="#" className="text-blue-500 text-sm font-medium flex items-center space-x-2">
            <FaRegHeart className='text-xl'/>
          </a>
        </div>
      </nav>
      <div className="relative bg-cyan-500 text-white py-32 px-10 md:flex items-center min-h-screen">
        <div className="space-y-6 md:w-1/2">
          <h4 className="text-sm uppercase tracking-widest">Summer 2020</h4>
          <h1 className="text-4xl md:text-6xl font-bold">New Collection</h1>
          <p className="text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-md font-medium text-lg hover:bg-green-600"
          >
            Shop Now
          </a>
        </div>
        <div className="hidden md:block absolute right-10 bottom-0 md:w-1/2">
          <img
            src="/images/carousel-item.png" // Replace with your image path
            alt="Woman with Bags"
            className="h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHeroSection;

