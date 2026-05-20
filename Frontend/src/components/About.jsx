import React from 'react'
import Hero from './Hero'
import {motion} from 'framer-motion'
import backdrop from '../assets/backdrop.jpg'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6 , ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'
    >
    <div className='container mx-0 px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>About
        <span className='text-purple-600'> Me</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
            Get to know more about my background and passion
        </p>
      <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2 relative text-purple-600'>
            <motion.img initial={{opacity:0 , y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.9,ease:'easeOut'}}
            viewport={{once:false,amount:0.2}}
            className='w-full h-full object-cover'
            src={backdrop} alt=''/>
          </div>
          <motion.div 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.9, ease:'easeOut'}}
          viewport={{once:false,amount:0.2}}
          className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>full stack developer</p>
              <p className='text-gray-300 mb-12'>coding</p>
              <div className='grid grid-cols-1 md:grid-cols-2'>
              </div>
            </div>

          </motion.div>
      </div>
    </div>
    </motion.div>
  )
}

export default About
