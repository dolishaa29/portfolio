import React from 'react';
import { motion } from 'framer-motion';
import backdrop from '../assets/dolisha.jpeg';

const About = () => {
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

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About
            <span className="text-purple-500"> Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get to know more about my background, skills, and passion for
            creating beautiful digital experiences.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-30 scale-105"></div>

              <img
                src={backdrop}
                alt="Dolisha Gandhi"
                className="relative w-[320px] md:w-[420px] rounded-3xl object-cover border-4 border-purple-500 shadow-2xl shadow-purple-700/30"
              />
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >

            <div className="bg-[#1f2937] p-8 rounded-3xl shadow-xl border border-gray-700">

              <h3 className="text-3xl font-bold mb-6 text-purple-400">
                My Journey
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer who loves building
                modern, responsive, and user-friendly web applications.
                I enjoy transforming ideas into real digital experiences
                using creative design and clean code.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                My focus is on creating fast, scalable, and visually
                appealing websites with technologies like React,
                JavaScript, Tailwind CSS, Node.js, and modern UI/UX
                principles.
              </p>



              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#111827] p-5 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                  <h4 className="text-2xl font-bold text-purple-400">
                    2+
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Years Learning
                  </p>
                </div>

                <div className="bg-[#111827] p-5 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                  <h4 className="text-2xl font-bold text-purple-400">
                    10+
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Projects Completed
                  </p>
                </div>

                <div className="bg-[#111827] p-5 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                  <h4 className="text-2xl font-bold text-purple-400">
                    React
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Frontend Development
                  </p>
                </div>

                <div className="bg-[#111827] p-5 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                  <h4 className="text-2xl font-bold text-purple-400">
                    Node
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Backend Development
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;