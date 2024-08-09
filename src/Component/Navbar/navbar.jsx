import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">HealMe</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</Link>
              <Link to="/shop" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Shop</Link>
              <Link to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link to="/contactus" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
              <Link to="/product" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Product</Link>
              <Link to="/listproduct" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">ListProduct</Link>
              <Link to="/category" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Category</Link>
            </div>
          </div>

          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Log In</Link>
            <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
            <Link to="/assignment2" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Event</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="">
            <li><Link to="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
            <li><Link to="/shop" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Shop</Link></li>
            <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
            <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</Link></li>
            <li><Link to="/product" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Product</Link></li>
            <li><Link to="/category" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Category</Link></li>
            <li><Link to="/category" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">List Product</Link></li>
            <li><Link to="/listproduct" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Log In</Link></li>
            <li><Link to="/signup" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;