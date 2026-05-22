import React, { useState, useEffect } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    
    const ids = ["home", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    
    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    }
  }, []);
  


  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>

      <div className='container mx-auto flex justify-between items-center'>

        <div>
          <a href='#' className='text-3xl font-bold text-white'>
            
            <span className='text-purple-500 px-2'></span>
          </a>
        </div>

        <div className='hidden md:flex space-x-10'>

          <a href="#home" className={`relative transition duration-300 group ${activeSection === 'home' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>Home</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'home' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

          <a href="#about" className={`relative transition duration-300 group ${activeSection === 'about' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>About</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'about' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

          <a href="#skills" className={`relative transition duration-300 group ${activeSection === 'skills' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>Skills</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'skills' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

          <a href="#projects" className={`relative transition duration-300 group ${activeSection === 'projects' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>Projects</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'projects' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

          <a href="#experience" className={`relative transition duration-300 group ${activeSection === 'experience' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>Experience</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'experience' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

          <a href="#contact" className={`relative transition duration-300 group ${activeSection === 'contact' ? 'text-purple-500' : 'text-white/80 hover:text-purple-500'}`}>
            <span>Contact</span>
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-transform duration-300 origin-left ${activeSection === 'contact' ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}></span>
          </a>

        </div>

        <div className='md:hidden'>
          {
            showMenu ?
              <FaXmark
                className='text-2xl text-white cursor-pointer'
                onClick={() => setShowMenu(false)}
              />
              :
              <FaBars
                className='text-2xl text-white cursor-pointer'
                onClick={() => setShowMenu(true)}
              />
          }
        </div>

      </div>

      {
        showMenu && (
          <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 items-center justify-center'>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#home"
              className={`relative transition duration-300 ${activeSection === 'home' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>Home</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#about"
              className={`relative transition duration-300 ${activeSection === 'about' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>About</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#skills"
              className={`relative transition duration-300 ${activeSection === 'skills' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>Skills</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#projects"
              className={`relative transition duration-300 ${activeSection === 'projects' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>Projects</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#experience"
              className={`relative transition duration-300 ${activeSection === 'experience' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>Experience</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#contact"
              className={`relative transition duration-300 ${activeSection === 'contact' ? 'text-purple-500 font-bold' : 'text-white/80'}`}
            >
              <span>Contact</span>
            </a>

          </div>
        )
      }
    </nav>
  )
}

export default Navbar