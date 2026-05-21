import React from 'react';
import { motion } from 'framer-motion';
import pic1 from '../assets/dolisha.jpeg';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0f0f0f] via-[#1b1b1b] to-[#111827] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        
        <div className="md:w-1/2 text-center md:text-left">
          
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 text-lg mb-3 tracking-widest uppercase"
          >
            Welcome To My Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dolisha Gandhi
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8"
          >
            I create modern, responsive and user-friendly web experiences
            using the latest technologies with beautiful UI/UX design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition duration-300 shadow-lg shadow-purple-600/30"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-purple-500 hover:bg-purple-500/20 rounded-xl font-medium transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 scale-110"></div>

            <img
              src={pic1}
              alt="Dolisha Gandhi"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-700/40"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;