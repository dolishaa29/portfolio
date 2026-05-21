import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './Navbar';

const About = () => {

   useEffect=()=>
   {
    about=true;
    const call=async()=>
    {
       <Navbar about/>
    }
   }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            React • Node.js • Python | AWS | GSSoC’26 Contributor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="bg-[#1f2937] border border-gray-700 hover:border-purple-500 transition rounded-2xl p-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-3">
              Introduction
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi connections, I’m a final-year student passionate about Full Stack Development
              and building scalable web applications.
            </p>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 hover:border-purple-500 transition rounded-2xl p-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-3">
              Tech Stack
            </h3>
            <p className="text-gray-300 leading-relaxed">
              React, Node.js, Express.js, Flask with focus on clean architecture,
              performance optimization and responsive UI.
            </p>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 hover:border-purple-500 transition rounded-2xl p-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-3">
              Experience
            </h3>
            <p className="text-gray-300 leading-relaxed">
              JWT Authentication, RBAC, AI tools, AWS EC2 & S3 for deployment and cloud management.
            </p>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 hover:border-purple-500 transition rounded-2xl p-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-3">
              Goal
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Building scalable, real-world solutions while continuously improving my development skills.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default About;