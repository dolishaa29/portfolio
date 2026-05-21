import React from 'react'
import { motion } from 'framer-motion'

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
    desc: "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization."
  },
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    year: "2016 - 2018",
    desc: "Designed user-friendly interfaces and collaborated with developers to create seamless digital experiences."
  }
]

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='experience'
      className='py-20 bg-dark-200'
    >

      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>
          Work <span className='text-purple-600'>Experience</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
          My Professional Journey
        </p>

        <div className='max-w-4xl mx-auto relative'>

          <div className='absolute left-4 top-0 h-full w-1 bg-purple-600'></div>

          <div className='space-y-12'>
            {
              workdata.map((data, index) => (
                <div key={index} className='relative pl-16'>
                  <div className='absolute left-0 top-2 w-8 h-8 bg-purple-600 rounded-full border-4 border-dark-200'></div>
                  <div className='bg-[#1f1f1f] rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300'>
                    
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                      <div>
                        <h3 className='text-xl font-bold text-white'>
                          {data.role}
                        </h3>

                        <p className='text-gray-400'>
                          {data.company}
                        </p>
                      </div>

                      <span className='bg-purple-700/30 text-purple-400 px-4 py-1 rounded-full text-sm mt-3 md:mt-0'>
                        {data.year}
                      </span>
                    </div>

                    <p className='text-gray-300 leading-relaxed'>
                      {data.desc}
                    </p>

                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

    </motion.div>
  )
}

export default Experience