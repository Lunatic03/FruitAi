import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="box-wrapper">
        <Link to="/chatbox" className="box-link">
          <div className="box" style={{ backgroundImage: 'url(/images/chatbox-image.jpg)' }}></div>
        </Link>
        <h2 className="box-text">Chatbox</h2>
      </div>

      <div className="box-wrapper">
        <Link to="/translator" className="box-link">
          <div className="box" style={{ backgroundImage: 'url(/images/translator-image.avif)' }}></div>
        </Link>
        <h2 className="box-text">Translator</h2>
      </div>

      <div className="box-wrapper">
        <Link to="/faq" className="box-link">
          <div className="box" style={{ backgroundImage: 'url(/images/faq-image.jpg)' }}></div>
        </Link>
        <h2 className="box-text">FAQ</h2>
      </div>

      <div className="box-wrapper">
        <Link to="/about" className="box-link">
          <div className="box" style={{ backgroundImage: 'url(/images/about-image.jpg)' }}></div>
        </Link>
        <h2 className="box-text">About</h2>
      </div>
    </div>
  );
};

export default Home;
