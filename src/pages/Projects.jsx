import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/content';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.category === filter);

  return (
    <section className="bg-deepSlate text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex justify-center mb-8">
          <button
            className={`bg-slate-800 text-cyberBlue py-2 px-4 rounded-full text-sm mr-2 ${filter === 'all' ? 'font-bold' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`bg-slate-800 text-cyberBlue py-2 px-4 rounded-full text-sm mr-2 ${filter === 'pentest' ? 'font-bold' : ''}`}
            onClick={() => setFilter('pentest')}
          >
            Pentest
          </button>
          <button
            className={`bg-slate-800 text-cyberBlue py-2 px-4 rounded-full text-sm ${filter === 'incidentresponse' ? 'font-bold' : ''}`}
            onClick={() => setFilter('incidentresponse')}
          >
            Incident Response
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-cyberBlue py-1 px-3 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="bg-cyberYellow text-deepSlate font-bold py-2 px-4 rounded-full hover:scale-105 transition-all duration-300 inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
