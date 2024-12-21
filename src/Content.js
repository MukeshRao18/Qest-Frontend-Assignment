import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Solutions from './Components/Solutions';
import Footer from './Components/Footer';
import GeminiButton from './GeminiButton';

const Content = () => {
  return (
    <Router>
      <div className='bg-gray-50'>
        <Navbar />
        <div className=""> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </div>
        <Footer/>
        <GeminiButton/>
      </div>
    </Router>
  );
};

export default Content;
