// //For defining routes

// // src/App.js

// import React from 'react';
// import Header from './components/Header'
// import Footer from './components/Footer';
// //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Demo from './pages/Demo';
// import Team from './pages/Team';


// // function App() {
// //   return (
// //     <div className="App">
// //       <Routes>
// //         <Route path="/" element={<About />} />
// //         <Route path="/Demo" element={<Demo />} />
// //         <Route path="/Team" element={<Team />} />
// //       </Routes>
// //       <Footer />
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/about" component={About} />
//         <Route path="/demo" component={Demo} />
//         <Route path="/team" component={Team} />
//         <Route path="/" exact component={Demo} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

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
        <Route path="/" element={<Demo />} />
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



