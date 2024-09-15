import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import Translator from './components/Translator';
import FAQ from './components/FAQ';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="site-name">
            <h1>Fruit.AI</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chatbox">Chatbox</Link>
            </li>
            <li>
              <Link to="/translator">Translator</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbox" element={<Chatbox />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;