import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      © {new Date().getFullYear()} Shivani • Built with MERN skills • <a href='https://github.com' target='_blank' rel='noreferrer'>GitHub</a>
    </footer>
  );
};

export default Footer;
