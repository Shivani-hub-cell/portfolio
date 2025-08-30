import React from 'react';

const skills = ['HTML','CSS','JavaScript','React','Node.js','Express','MongoDB','Git','GitHub','REST APIs'];

const Skills = () => {
  return (
    <div id='skills' style={{marginTop:18}}>
      <h3 className='section-title'>Skills</h3>
      <div className='card' style={{marginTop:10}}>
        <div className='skills'>
          {skills.map(s => <div key={s} className='skill'>{s}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
