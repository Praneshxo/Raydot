import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Report from './pages/Report';
import Chatbot from './pages/Chatbot';
import Hcare from './pages/Hcare';

const App = () => {
  return (
    <Router>
        <div className="main-content">
          <Header />
          <div className='page-content'>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/report" element={<Report />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/hcare" element={<Hcare />} />
          </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
