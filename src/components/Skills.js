import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card"><FaReact /> React</div>
        <div className="skill-card"><FaNodeJs /> Node.js</div>
        <div className="skill-card"><SiExpress /> Express</div>
        <div className="skill-card"><SiMongodb /> MongoDB</div>
        <div className="skill-card"><FaDatabase /> SQL</div>
      </div>
    </section>
  );
}

export default Skills;
