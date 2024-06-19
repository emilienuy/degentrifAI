import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../pictures/DegentrifAI.png';

const Header = () => {
    return (
        <header className="header-container"> 
            {/* Header Toggle */}
            {/* <section className="hd-toggle">
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <div className="lang-toggle-container">
                    <button className="lang-toggle">
                        <i className="fas fa-globe"></i> FR
                    </button>
                </div>
            </section> */}

            {/* Header Main = Logo & Navigation */}
            <section className="hd-main"> 
                <div className="hd-logo">
                    <img src={Logo} alt="de.gentrificAItion" className="logo" /> {/* Adjusted class name */}
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
