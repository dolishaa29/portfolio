import React from 'react';
import { motion } from 'framer-motion';
import Projectcards from './Projectcards';
import dolisha from '../assets/dolisha.jpeg';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern developer portfolio built using React, Tailwind CSS and Framer Motion with smooth animations.',
    image: dolisha,
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/dolishaa29/portfolio',
    live: 'https://dolishaportfolio.vercel.app/',
  },
  {
    title: 'ERP Management System',
    description:
      'A complete ERP system for managing users, inventory and business operations efficiently.',
    image: dolisha,
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/dolishaa29/EDUpulse_2.0',
    live: 'https://frontend-4pr1.onrender.com/',
  },
  {
    title: 'Aura HealthCare',
    description:
      'A healthcare platform for managing patient records and appointments.',
    image: dolisha,
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/dolishaa29/healthcare_app',
    live: 'https://auraahealth.vercel.app/',
  },
  {
    title: 'UniTribe',
    description:
      'System for managing students, faculty, courses and attendance.',
    image: dolisha,
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/dolishaa29/UniTribe',
    live: 'https://unitribe-nine.vercel.app/login',
  },
  {
    title: 'ProductX',
    description: 'Product Selling and Redirecting App',
    image: dolisha,
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/dolishaa29/Orufy_assignment',
    live: 'https://orufy-assignment-puce.vercel.app/',
  },
  {
    title: 'Task Management System',
    description:
      'A productivity app for managing daily tasks and deadlines.',
    image: dolisha,
    tech: ['React', 'Local Storage', 'CSS'],
    github: 'https://github.com/dolishaa29/task_scheduler_assignment',
    live: 'https://tasskfloww.vercel.app/',
  },
];




const Projects = () => {

  return (

    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="projects"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My
            <span className="text-purple-500"> Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in
            frontend development, backend integration and UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#1f2937] rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 shadow-xl hover:shadow-purple-600/20 transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300 font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center rounded-xl border border-purple-500 hover:bg-purple-500/20 transition duration-300 font-medium"
                  >
                    Github
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Projects;