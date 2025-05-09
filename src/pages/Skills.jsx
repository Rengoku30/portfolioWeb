import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { name: "Network Security", percentage: 90 },
    { name: "Threat Modeling", percentage: 80 },
    { name: "Penetration Testing", percentage: 75 },
    { name: "Incident Response", percentage: 85 },
  ];

  const certificationsData = [
    { name: "CompTIA Security+", organization: "CompTIA", date: "2023", logo: "/assets/comptia.png" },
    { name: "CEH", organization: "EC-Council", date: "2024", logo: "/assets/ceh.png" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-deepSlate text-white py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-4">
                  <div
                    className="bg-cyberBlue h-4 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            {certificationsData.map((certification, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-700'}`}
              >
                <h4 className="text-xl font-bold mb-2">{certification.name}</h4>
                <p className="text-gray-300">Organization: {certification.organization}</p>
                <p className="text-gray-300">Date: {certification.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
