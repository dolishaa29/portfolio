import React from 'react';
import { motion } from 'framer-motion';

const workdata = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    year: "2020 - Present",
    desc: "Leading frontend development for enterprise clients, implementing modern frameworks and mentoring junior developers."
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    year: "2018 - 2020",
    desc: "Developed and maintained responsive web applications with a focus on performance optimization and user experience."
  },
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    year: "2016 - 2018",
    desc: "Designed intuitive user interfaces and collaborated with developers to build seamless digital experiences."
  }
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="experience"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work
            <span className="text-purple-500"> Experience</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and experience in building
            modern web applications and digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">

            {workdata.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-[#111827] transform md:-translate-x-1/2 z-10 shadow-lg shadow-purple-600/40"></div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-[45%]">

                  <div className="bg-[#1f2937] border border-gray-700 hover:border-purple-500 p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

                    {/* Top */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {data.role}
                        </h3>

                        <p className="text-purple-400 font-medium mt-1">
                          {data.company}
                        </p>
                      </div>

                      <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium w-fit">
                        {data.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {data.desc}
                    </p>

                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;