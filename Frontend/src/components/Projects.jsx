import React from 'react'
import {motion} from 'framer-motion'
import Projectcards from './Projectcards'
import dolisha from '../assets/dolisha.jpeg'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio website built using React and Tailwind CSS.',
    image: dolisha,
    tech: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'E-Commerce App',
    description: 'An online shopping application with cart and payment integration.',
    image: dolisha,
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using OpenWeather API.',
    image: dolisha,
    tech: ['JavaScript', 'API', 'CSS']
  },
  {
    title: 'Blog Website',
    description: 'A responsive blog platform with authentication system.',
    image: dolisha,
    tech: ['React', 'Firebase', 'Tailwind']
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks and schedules.',
    image: dolisha,
    tech: ['React', 'Local Storage', 'CSS']
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix inspired UI clone with movie categories and banners.',
    image: dolisha,
    tech: ['React', 'TMDB API', 'Tailwind']
  }
]

const Projects = () => {
  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1,ease:'easeOut'}}
      viewport={{once:false,amount:0.2}}
      id='projects'
      className='py-20 bg-dark-200'
    >

      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          My
          <span className='text-purple-600'>Projects</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          A Selection of My recent Work
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          
          {
            projects.map((project,index)=>(
              <Projectcards
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
              />
            ))
          }

        </div>

      </div>

    </motion.div>
  )
}

export default Projects