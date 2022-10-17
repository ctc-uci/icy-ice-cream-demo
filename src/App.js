import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" />
            <Route path="/contact" />
            <Route path="/locations" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
