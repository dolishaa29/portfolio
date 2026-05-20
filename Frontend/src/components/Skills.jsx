import React from 'react'
import {motion} from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa'

const skills = [
  {
    title: 'HTML',
    icon: FaHtml5,
  },
  {
    title: 'CSS',
    icon: FaCss3Alt,
  },
  {
    title: 'JavaScript',
    icon: FaJsSquare,
  },
  {
    title: 'React',
    icon: FaReact,
  },
]

const Skills = () => {
  
  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1,ease:'easeOut'}}
      viewport={{once:false,amount:0.2}}
      id='skills'
      className='py-20 bg-dark-100'
    >

      <div className="container mx-auto px-6">

        <h2 className='text-3xl font-bold text-center mb-4 text-white'>
          My <span className='text-purple-500'>Skills</span>
        </h2>

        <p className='text-center text-gray-400 mb-12'>
          Technologies I work with to bring ideas to life
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          
          {
            skills.map((skill,index)=>
            (
              <div 
                key={index} 
                className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer text-center'
              >
                <div className='flex flex-col items-center gap-4'>
                  
                  <skill.icon className='text-5xl text-purple-500' />

                  <h3 className='text-xl font-semibold text-white'>
                    {skill.title}
                  </h3>

                </div>
              </div>
            ))
          }

        </div>

      </div>    

    </motion.div>
  )
}

export default Skills