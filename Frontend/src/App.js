import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';

// Import pages
import Home from './pages/Home';
import Staking from './pages/Staking';

// Import global styles
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/staking" element={<Staking />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
