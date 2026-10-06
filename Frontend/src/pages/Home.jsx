import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <div className='overflow-x-clip'>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
