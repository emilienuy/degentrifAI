//For defining routes

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Demo from './pages/Demo';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes> {/*Switch*/}
             <Route path="/" element={<About />} />
             <Route path="/Demo" element={<Demo />} />
             <Route path="/Team" element={<Team />} />
            </Routes>
            <Footer />
       </Router>
    </div>
  );
}

export default App;

