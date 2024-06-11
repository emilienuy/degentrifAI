import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss'; //review
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer>

       {/* Footer social */}
      <section className="ft-social">
        <div className="ft-social-item"> 
            <img src=" "alt="de.gentrificAItion"/> {/*de.gentrificAItion logo SVG */}
        </div>
        <ul className="ft-social-list"> {/*Replace with proper links*/}
          <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com"><i className="fab fa-github"></i></a></li>
          <li><a href="mailto:email@example.com"><i className="fas fa-email"></i></a></li>
        </ul>
      </section> 

      {/* Footer main */}
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">Navigation</h2>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/Demo">Demo</Link></li>
            <li><Link to = "/Team">Team</Link></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Address</h2>
          <ul>
            <li><a href="#">6666 Saint-Urbain Street, #200 Montreal, QC, H2S 3H1</a></li>
          </ul>
        </div>
        <div className="ft-main-item"> {/*AI4Good SVG logo*/}
          {/*insert here:*/}
            <a href="https://www.ai4goodlab.com/">
                <img src=" " alt="AI4GoodLab"/>
            </a>
        </div>
      </section>

      {/* Footer legal */}
      <section className="ft-copyright">
        <ul className="ft-copyright-list">
          <li>&copy;2024 de.gentrificAItion. All Rights Reserved.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
