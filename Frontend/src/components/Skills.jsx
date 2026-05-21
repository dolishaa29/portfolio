import React from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

const skills = [
  {
    title: 'HTML',
    icon: FaHtml5,
    color: 'text-orange-500',
  },
  {
    title: 'CSS',
    icon: FaCss3Alt,
    color: 'text-blue-500',
  },
  {
    title: 'JavaScript',
    icon: FaJsSquare,
    color: 'text-yellow-400',
  },
  {
    title: 'React',
    icon: FaReact,
    color: 'text-cyan-400',
  },
  {
    title: 'Node JS',
    icon: FaNodeJs,
    color: 'text-green-500',
  },
  {
    title: 'Express JS',
    icon: SiExpress,
    color: 'text-gray-300',
  },
  {
    title: 'MongoDB',
    icon: SiMongodb,
    color: 'text-green-400',
  },
  {
    title: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-sky-400',
  },
  {
    title: 'Git',
    icon: FaGitAlt,
    color: 'text-red-500',
  },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="skills"
      className="py-24 bg-[#0f172a] text-white"
    >

      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My
            <span className="text-purple-500"> Skills</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-[#1e293b] border border-gray-700 hover:border-purple-500 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-purple-600/20 transition duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div
                className={`text-6xl mb-5 ${skill.color}`}
              >
                <skill.icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Skills;