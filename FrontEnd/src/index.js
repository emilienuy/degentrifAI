// // src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
// //import { BrowserRouter } from 'react-router-dom';
// //import './styles/index.css'; // Update the path to reflect the correct location
// //import '@fortawesome/fontawesome-free/css/all.min.css';
// import App from './App';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //         <App />
// //     </BrowserRouter>
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

// <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

