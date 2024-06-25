// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CoverPage from './pages/Cover';
// import About from './pages/About';
// import Process from './pages/Process';
// import Demo from './pages/Demo';
// import Team from './pages/Team';

// function App() {
//   const location = useLocation();
//   const showHeader = location.pathname !== '/';

//   return (
//     <div>
//       {showHeader && <Header />}
//       <Routes>
//         <Route path="/" element={<CoverPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/process" element={<Process />} />
//         <Route path="/demo" element={<Demo />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CoverPage from './pages/Cover';
import About from './pages/About';
import Process from './pages/Process';
import Demo from './pages/Demo';
import Team from './pages/Team';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';
  const showFooter = location.pathname !== '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
