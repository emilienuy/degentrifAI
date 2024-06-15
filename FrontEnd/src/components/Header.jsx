// import React from 'react';
// //import '../styles.Header.scss';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Header = ( ) => {
//     return (
//         <header>


//         </header>
//     );
// };

// export default Header;
 
//Theresa's laptop
// import React from 'react';
// import '../styles/Header.scss';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';
// const Header = () => {
//     return (
//         <div id="div_top_hypers">
//             <ul id="ul_tope_hypers">
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/demo">Demo</Link>
//                 </li>
//                 <li>
//                     <Link to="/team">Team</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };
// export default Header;

//New Header
// import React from 'react';
// import '../styles/Header.scss';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div id="div_top_hypers" className="header-container">
//             <div className="nav-links">
//                 <ul id="ul_tope_hypers">
//                     <li>
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/demo">Demo</Link>
//                     </li>
//                     <li>
//                         <Link to="/team">Team</Link>
//                     </li>
//                     <li>
//                         <Link to="/process">Process</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div className="logo-lang">
//                 <button className="lang-toggle">
//                     <i className="fas fa-globe"></i> FR
//                 </button>
//                 <div className="logo">
//                     <img src="path_to_your_logo_image" alt="Website Logo" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;

//Newer header -- switched sides
// 

//  import React from 'react';
//  import '../styles/Header.scss';
//  import '@fortawesome/fontawesome-free/css/all.min.css';
//  import { Link } from 'react-router-dom';

//  const Header = () => {
//      return (
//          <div id="div_top_hypers" className="header-container">
//              <div className="logo">
//                  <img src="path_to_your_logo_image" alt="Website Logo" />
//              </div>
//              <div className="nav-links">
//                  <ul id="ul_tope_hypers">
//                      <li>
//                          <Link to="/about">About</Link>
//                      </li>
//                      <li>
//                          <Link to="/demo">Demo</Link>
//                      </li>
//                      <li>
//                          <Link to="/team">Team</Link>
//                      </li>
//                      <li>
//                          <Link to="/process">Process</Link>
//                      </li>
//                  </ul>
//              </div>
//              <div className="lang-toggle-container">
//                  <button className="lang-toggle">                     <i className="fas fa-globe"></i> FR
//                  </button>
//              </div>
//          </div>
//      );
//  };

//  export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <header className="header-container"> 

            {/* Header Toggle */}
            <section className="hd-toggle">
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <div className="lang-toggle-container">
                    <button className="lang-toggle">
                        <i className="fas fa-globe"></i> FR
                    </button>
                </div>
            </section>

            {/* Header Main = Logo & Navigation */}
            <section className="hd-main"> 
                <div className="hd-logo">
                    <img src="path_to_your_logo_image" alt="de.gentrificAItion"/> {/* Replace with actual logo path */}
                </div>

                <nav className="nav-links">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/process">Process</Link></li>
                        <li><Link to="/demo">Demo</Link></li>
                        <li><Link to="/team">Team</Link></li> 
                    </ul>
                </nav>
            </section>

        </header>
    );
};

export default Header;





