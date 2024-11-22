import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Business from './pages/Business';
import About from './pages/About';
import Help from './pages/Help';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <div className="bg-[#4BA3FF] text-white text-center py-2">
        <a href="#" className="hover:underline">
          Get 14 days free now →
        </a>
      </div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;