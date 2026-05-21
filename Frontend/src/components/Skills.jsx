import React from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaAws,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFlask,
} from 'react-icons/si';

const skills = [
  { title: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { title: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { title: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
  { title: 'React', icon: FaReact, color: 'text-cyan-400' },
  { title: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { title: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
  { title: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { title: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
  { title: 'Git & GitHub', icon: FaGitAlt, color: 'text-red-500' },
  { title: 'Python', icon: FaPython, color: 'text-blue-400' },
  { title: 'Flask', icon: SiFlask, color: 'text-gray-200' },
  { title: 'AWS (EC2, S3)', icon: FaAws, color: 'text-orange-400' },
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

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build scalable, fast and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e293b] border border-gray-700 hover:border-purple-500 rounded-2xl p-5 flex items-center gap-4 transition"
            >
              <div className={`text-3xl ${skill.color}`}>
                <skill.icon />
              </div>

              <h3 className="text-lg font-medium text-gray-200">
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