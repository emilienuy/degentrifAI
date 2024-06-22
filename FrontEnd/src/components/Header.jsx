import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../pictures/Logo_green.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header-container">
            <div className="hd-main">
                <div className="hd-logo">
                    <img src={Logo} alt="de.gentrificAItion" className="logo" />
                </div>
                <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
                <div className="overlay-content">
                    <div className="close-btn" onClick={toggleMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                    <ul>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/process" onClick={toggleMenu}>Process</Link></li>
                        <li><Link to="/demo" onClick={toggleMenu}>Demo</Link></li>
                        <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
