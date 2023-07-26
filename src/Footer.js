import React from 'react';
import './footer.css';
import twitter from './twitter-new.png';
import facebook from './facebook.png'
export default function Footer() {
  function openTwitter()
  {
    window.open("https://twitter.com/Dev22Web","_blank", )
  }
  return (
    <footer className='footer'>
      <div>
        <span className='text-footer'>About</span>
        <span className='text-footer'>Privacy</span>
        <span className='text-footer'>Terms</span>
        <span className='text-footer'>Contact</span>
        <span className='text-footer'><img onClick={openTwitter} src={twitter} alt="Twitter" /></span>

      </div>
    </footer>
  );
}
