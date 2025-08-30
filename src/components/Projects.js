import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>E-commerce Website</h3>
          <p>Full stack MERN project with user authentication and product management.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Responsive personal portfolio built using React and CSS.</p>
        </div>
        <div className="project-card">
          <h3>Chat App</h3>
          <p>Real-time chat application using Node.js, Express, and Socket.io.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
