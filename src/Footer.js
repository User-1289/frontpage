import React from 'react';
import './footer.css';
import twitter from './twitter.png';
import facebook from './facebook.png'
export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <span className='text-footer'>About</span>
        <span className='text-footer'>Privacy</span>
        <span className='text-footer'>Terms</span>
        <span className='text-footer'>Contact</span>
        <span className='text-footer'><img src={twitter} alt="Twitter" /></span>

      </div>
    </footer>
  );
}
