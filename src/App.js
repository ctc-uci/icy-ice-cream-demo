import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route path="/"  />
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
