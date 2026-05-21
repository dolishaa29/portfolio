import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='contact'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2>
                Get In
                <span>Touch</span>
            </h2>
            <p>Have Projects in mind or want to collaborate ? Let's talk!</p>
        </div>
        
      
    </motion.div>
  )
}

export default Contact
