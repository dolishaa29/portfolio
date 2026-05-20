import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
