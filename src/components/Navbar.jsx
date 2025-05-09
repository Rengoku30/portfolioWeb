import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full z-10 ${className}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Quicksilver</div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white">About</NavLink>
          <NavLink to="/projects" className="text-gray-300 hover:text-white">Projects</NavLink>
          <NavLink to="/skills" className="text-gray-300 hover:text-white">Skills</NavLink>
          <NavLink to="/blog" className="text-gray-300 hover:text-white">Blog</NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 py-2">
          <NavLink to="/" className="block px-4 py-2 text-gray-300 hover:text-white">Home</NavLink>
          <NavLink to="/about" className="block px-4 py-2 text-gray-300 hover:text-white">About</NavLink>
          <NavLink to="/projects" className="block px-4 py-2 text-gray-300 hover:text-white">Projects</NavLink>
          <NavLink to="/skills" className="block px-4 py-2 text-gray-300 hover:text-white">Skills</NavLink>
          <NavLink to="/blog" className="block px-4 py-2 text-gray-300 hover:text-white">Blog</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-gray-300 hover:text-white">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
