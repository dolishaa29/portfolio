import React from 'react'
import {motion} from 'framer-motion'
import pic1 from '../assets/dolisha.png'

const Hero = () => {
  return (
    <motion.div initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,ease:'easeOut'}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            
            <div className='md:w-1/2 mb-10 md:mb-0'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi ,<br></br> I'm 
                <span className='text-purple-600'> Dolisha Gandhi</span></h1>
              <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
              <p>I create stunning web experiences with modern technologies and innovative design.</p>
              <br></br>
              <div className='flex space-x-4'>
                <a href='#projects' className='px-6 py-3 border-purple-600 rounded-lg font-medium hover:bg-purple-600 transition duration-300'>
                  View Work
                </a>
                <a href='#contact' className='px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple/20 trannsitio'>
                   Contact Me
                </a>
              </div>
            </div>  
             
             <div className='md:w-1/2 flex justify-center'>
             <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <div className='basolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 animate-pulse-slow opacity-70'>
                  <motion.img animate={{y:[0,-20,0]}} transition={{
                    duration:4,
                    repeat:Infinity,
                    repeatType: "loop",
                    ease:"easeInOut",
                  }} className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float' src={pic1} alt=''/>
                </div>
             </div>
             </div>
        </div>

    </motion.div>
  )
}

export default Hero
