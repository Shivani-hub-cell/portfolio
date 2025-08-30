import React from 'react';
import { motion } from 'framer-motion';
import image from "../image/shiv.jpg"



const Hero = () => {
  return (
    <section className='hero' aria-label='hero'>
      <div className='left'>
        <motion.h1 initial={{y:8,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className='hero-title'>
          Hi, I'm <span style={{color:'#7c3aed'}}>Shivani</span> — MERN Stack Developer
        </motion.h1>
        <motion.p initial={{y:8,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.08,duration:0.5}} className='hero-sub'>
          I build reliable, responsive web applications. Seeking junior developer roles or internships to learn and contribute.
        </motion.p>
        <div className='actions'>
          <a href='#projects' className='cta'>View Projects</a>
          <a href='https://github.com' target='_blank' rel='noreferrer' style={{padding:'8px 12px',borderRadius:10,border:'1px solid rgba(34,51,68,0.06)',textDecoration:'none',fontWeight:700}}>GitHub</a>
        </div>
      </div>
      <div className='right'>
        <div className='profile-card'>
          <img src={image} alt='profile' className='profile-pic' />
          <p style={{marginTop:12,fontWeight:700,color:'#0f1724'}}>Fresher • MERN • JavaScript</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
