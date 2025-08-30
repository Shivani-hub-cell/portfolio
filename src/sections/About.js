import React from 'react';

const About = () => {
  return (
    <div id='about' style={{marginTop:18}}>
      <h3 className='section-title'>About Me</h3>
      <div className='about-grid' style={{marginTop:10}}>
        <div className='card'>
          <p style={{color:'#475569'}}>I'm a fresher MERN Stack Developer focused on building user-friendly web apps. I enjoy turning ideas into products and learning backend/frontend integration.</p>
          <ul style={{marginTop:10,color:'#475569'}}>
            <li>Strong fundamentals — HTML, CSS, JavaScript</li>
            <li>Built small e-commerce clones and portfolio projects</li>
            <li>Familiar with Git and deployment besics</li>
          </ul>
        </div>
        <div className='card'>
          <h4 style={{marginBottom:8}}>Quick facts</h4>
          <p style={{color:'#475569',marginBottom:6}}>Location: India</p>
          <p style={{color:'#475569',marginBottom:6}}>Availability: Open to internships & junior roles</p>
          <p style={{color:'#475569'}}>Resume: <a href='https://shivi-resume.netlify.app/' style={{color:'#7c3aed',fontWeight:700}}>Download</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
