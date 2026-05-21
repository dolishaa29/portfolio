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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="contact"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In
            <span className="text-purple-500"> Touch</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have any project in mind or want to collaborate?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* LEFT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1f2937] p-8 rounded-3xl shadow-2xl border border-gray-700"
          >
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none text-white focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none text-white focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none text-white focus:border-purple-500 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition duration-300 py-4 rounded-xl font-semibold shadow-lg shadow-purple-600/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >

            {/* Info Cards */}
            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="text-purple-500 text-3xl">
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Alwar, Rajasthan
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="text-purple-500 text-3xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    dolishagandhi@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="text-purple-500 text-3xl">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 7014093257
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-5">
                Follow Me
              </h3>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-purple-500 text-xl hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-purple-500 text-xl hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-purple-500 text-xl hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-purple-500 text-xl hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;