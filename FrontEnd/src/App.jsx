// src/App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Process from './pages/Process';
import Demo from './pages/Demo';
import Team from './pages/Team';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



