import { Link } from 'react-router-dom';
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#3949ab] flex justify-between items-center p-6 text-white relative">
      <div className="flex items-center">
        <input type="file" id="upload-logo" accept="image/*" hidden />
        <img id="logo" src="logo.jpeg" alt="Logo" className="h-12 mr-2 rounded" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8">
          <li><Link to="/" className="font-semibold hover:text-[#ff9800]">Home</Link></li>
          <li><Link to="#about" className="font-semibold hover:text-[#ff9800]">About Us</Link></li>
          <li><Link to="#features" className="font-semibold hover:text-[#ff9800]">Features</Link></li>
          <li><Link to="#gallery" className="font-semibold hover:text-[#ff9800]">Gallery</Link></li>
          <li><Link to="#contact" className="font-semibold hover:text-[#ff9800]">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 right-0 bg-[#3949ab] p-4 md:hidden z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <button
            className="text-white focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4">
          <li><Link to="/" className="font-semibold text-white hover:text-[#ff9800]" onClick={closeMenu}>Home</Link></li>
          <li><Link to="#about" className="font-semibold text-white hover:text-[#ff9800]" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="#features" className="font-semibold text-white hover:text-[#ff9800]" onClick={closeMenu}>Features</Link></li>
          <li><Link to="#gallery" className="font-semibold text-white hover:text-[#ff9800]" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="#contact" className="font-semibold text-white hover:text-[#ff9800]" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="ml-auto">
        <Link 
          to="/login" 
          className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
