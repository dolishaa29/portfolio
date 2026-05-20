import React from 'react'
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='experience'
    className='py-20 bg-dark-200'
    >
      
    </motion.div>
  )
}

export default Experience
