import React from 'react';
import './container.css'; // Import your CSS file
import Footer from './Footer';

const Container = () => {
  return (
    <div className="container">
      <div onClick={() => { window.open("https://news.deverse.space", "_blank") }} className="container-box container-1">
        <div className="content">
          <span className='header-txt'>News</span><br />
          <span className='sub-header'>Read news and <br />search on the go</span>
        </div>
      </div>

      <div onClick={() => { window.open("https://todo.deverse.space", "_blank") }} className="container-box container-2">
        <div className="content">
          <span className='header-txt'>To do</span><br />
          <span className='sub-header'>Organize your daily<br />day tasks</span>
        </div>
      </div>
      <div onClick={() => { window.open("https://mirror-lavish-bagel.glitch.me/", "_blank") }} className="container-box container-3">
        <div className="content">
          <span className='header-txt'>Weather</span><br />
          <span className='sub-header'>Check the climate of<br /> your surroundings</span>
        </div>
      </div>
      <div onClick={() => { window.open("https://quizhub.deverse.space", "_blank") }} className="container-box container-4">
        <div className="content">
          <span className='header-txt'>Quiz</span><br />
          <span className='sub-header'>Test your knowledge<br />and have some fun</span>
        </div>
      </div>
      <div onClick={() => { window.open("https://fruits.deverse.space", "_blank") }} className="container-box container-5">
        <div className="content">
          <span className='header-txt'>Fruits</span><br />
          <span className='sub-header'>Discover new fruits and <br/> find their benefits</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
