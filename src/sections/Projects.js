import React from 'react';

const projects = [
  {id:1,title:'FreshCart',desc:'Grocery e-commerce clone with React and Context API',link:'https://freshcart-ecommerce-web.netlify.app/'},
  {id:2,title:'Forever',desc:'E-commerce frontend with filtering and cart',link:'https://forever-ecomommerce.netlify.app/'},
  {id:3,title:'Portfolio Website',desc:'Professional portfolio showcasing projects and skills',link:'#'}
];

const Projects = () => {
  return (
    <div id='projects' style={{marginTop:18}}>
      <h3 className='section-title'>Projects</h3>
      <div className='projects-grid' style={{marginTop:10}}>
        {projects.map(p => (
          <div key={p.id} className='project'>
            <div className='project-title'>{p.title}</div>
            <div className='project-desc'>{p.desc}</div>
            <div style={{marginTop:12,display:'flex',gap:8}}>
              <a href={p.link} className='cta' style={{background:'#60a5b3'}}>Live</a>
              <a href='https://github.com/Shivani-hub-cell' target='_blank' rel='noreferrer' className='cta' style={{background:'transparent',border:'1px solid rgba(34,51,68,0.06)',color:'#0f1724'}}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
