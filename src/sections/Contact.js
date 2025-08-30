import React from 'react';

const Contact = () => {
  return (
    <div id='contact' style={{marginTop:18}}>
      <h3 className='section-title'>Contact</h3>
      <div className='card' style={{marginTop:10}}>
        <p style={{color:'#475569'}}>Want to work together? Reach out —</p>
        <form className='contact-form' style={{marginTop:12}} onSubmit={(e)=>{e.preventDefault();alert('Demo: message sent')}}>
          <input className='input' placeholder='Your name' required />
          <input className='input' placeholder='Your email' type='email' required />
          <textarea className='input' rows='4' placeholder='Message' required></textarea>
          <button className='cta' type='submit' style={{width:120}}>Send</button>
        </form>
        <div style={{marginTop:12,color:'#475569'}}>Or connect: <a href='https://github.com/Shivani-hub-cell' target='_blank' rel='noreferrer' style={{color:'#7c3aed'}}>GitHub</a> • <a href='https://www.linkedin.com/in/shivani-panchal-256171242/' target='_blank' rel='noreferrer' style={{color:'#7c3aed'}}>LinkedIn</a></div>
      </div>
    </div>
  );
};

export default Contact;
