import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { homeData } from '../data/content';

const Home = () => {
  return (
    <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">👋</span>
      <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyberBlue to-cyberYellow">
        <TypeAnimation
          sequence={[
            `Hi, I'm Cyber Sentinel, Network Security Specialist.`,
            1000,
          ]}
          repeat={Infinity}
        />
      </h1>
      <p className="max-w-xl mt-4 text-sm lg:text-base font-normal text-secondary">{homeData.heroText}</p>
      <p className="max-w-xl mt-4 text-sm lg:text-base font-normal text-secondary">
        I'm a senior software engineer with{" "}
        <span>7 years of experience</span> building scalable web apps
        that are performance optimized and good looking.
      </p>
      <h2>What I've been working on</h2>
      <div>
        {/* <Products /> */}
      </div>
      <div>
        {/* <TechStack /> */}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link to="/about" className="text-gray-300 hover:text-white">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
