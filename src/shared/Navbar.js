import React from 'react';

const Navbar = () => {
  return (
    <header className='container nav'>
      <div className='brand'>Shivani Panchal</div>
      <nav className='nav-links'>
        <a href='#about'>About</a>
       <a href='#education'>Education</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact' className='cta'>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
