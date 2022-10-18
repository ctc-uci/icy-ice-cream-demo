import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="page-container">
      <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/locations" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
