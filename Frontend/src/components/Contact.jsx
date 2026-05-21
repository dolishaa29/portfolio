import React from 'react';
import { motion } from 'framer-motion';

import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple-600">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have projects in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <div>
            <form className="space-y-6">
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl">
                <FaMapMarkedAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Location
                </h3>

                <p className="text-gray-400">
                  Alwar, Rajasthan
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Email
                </h3>

                <p className="text-gray-400">
                  dolishagandhi@gmail.com
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 7014093257
                </p>
              </div>
            </div>


            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;