//For defining routes

// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Demo from './pages/Demo';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

