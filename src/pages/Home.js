import React from 'react';
import Navbar from '../shared/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../shared/Footer';
import Education from '../components/Education';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <Hero />
        <div className='section'>
          <About />
          <Education/>
          <Skills />
          <Projects />
          <Contact />
          
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
