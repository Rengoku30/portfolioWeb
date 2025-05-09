import React from 'react';
import ReactMarkdown from 'react-markdown';
import { aboutData } from '../data/content';

const About = () => {
  return (
    <section className="bg-deepSlate text-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 neon-border">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{aboutData.name}</h2>
          <h3 className="text-xl text-cyberBlue mb-2">{aboutData.title}</h3>
          <div className="text-gray-300 mb-6">
            <ReactMarkdown>{aboutData.bio}</ReactMarkdown>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {aboutData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-800 text-cyberBlue py-1 px-3 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href="/assets/resume.pdf"
            className="bg-cyberYellow text-deepSlate font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 text-center">
        <h4 className="text-2xl italic">"Security is not a product, but a process. – Bruce Schneier"</h4>
      </div>
    </section>
  );
};

export default About;
