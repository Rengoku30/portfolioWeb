import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>© 2025 Quicksilver. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/Quicksilver" className="hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://linkedin.com/in/Quicksilver" className="hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="https://twitter.com/Quicksilver" className="hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
