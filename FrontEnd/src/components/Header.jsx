//  export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };


    return (
        <header className="header-container"> 

            {/* Header Toggle */}
            <section className="hd-toggle">
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <div className="lang-toggle-container">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <i className="fas fa-globe"></i> {i18n.language === 'en' ? 'FR' : 'EN'}
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





