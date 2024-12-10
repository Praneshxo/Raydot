import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Nlp from './pages/Nlp';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className='page-content'>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/nlp" element={<Nlp />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
