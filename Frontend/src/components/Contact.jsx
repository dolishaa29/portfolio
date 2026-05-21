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
            <h2 className='text-3xl font-bond text-center mb-4'>
                Get In
                <span className='text-purple-600'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have Projects in mind or want to collaborate ? Let's talk!</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
               <div>
                   <form className='space-y-6'>
                    <div>
                       <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                       <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
                    </div>
                    <div>
                       <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                       <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
                    </div>
                    <div>
                       <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                       <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-20 outline-none' type='text' />
                    </div>
                    <button type='submit' className='w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-600 transition duration-300 cursor-pointer' >Submit</button>
                   </form>
               </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
