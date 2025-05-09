import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const GlobalLayout = ({ children }) => {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarClass('sticky top-0 backdrop-blur-sm bg-deepSlate/75 dark:bg-deepSlate/75 z-50');
      } else {
        setNavbarClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className={navbarClass} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
