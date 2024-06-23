import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ai4goodLabImage from '../pictures/ai4good_lab.png';

const Footer = () => {
  return (
    <footer>
      {/* Footer main */}
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">Navigation</h2>
          <ul>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Process">Process</Link></li>
            <li><Link to="/Demo">Demo</Link></li>
            <li><Link to="/Team">Team</Link></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Address</h2>
          <ul>
            <li><a href="https://mila.quebec/en">6666 Saint-Urbain Street,<br></br> #200 Montreal, QC,<br></br> H2S 3H1</a></li>
          </ul>
        </div>
        <div className="ft-main-item logo-container">
          <a href="https://www.ai4goodlab.com/">
            <img src={ai4goodLabImage} alt="AI4GoodLab" className="logo-image" />
          </a>
          <ul className="ft-social-list">
            <li><a href="https://vimeo.com"><i className="fab fa-vimeo"></i></a></li>
            <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://github.com"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="mailto:email@example.com"><i className="fas fa-envelope"></i></a></li>
          </ul>
        </div>
      </section>

      {/* Footer legal */}
      <section className="ft-copyright">
        <ul className="ft-copyright-list">
          <li>&copy;2024 degentrifAI. All Rights Reserved.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
