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
 

import React from 'react';
import '../styles/Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div id="div_top_hypers">
            <ul id="ul_tope_hypers">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/demo">Demo</Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;

