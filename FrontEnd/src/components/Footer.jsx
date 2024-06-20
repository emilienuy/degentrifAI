import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss'; //review
import '@fortawesome/fontawesome-free/css/all.min.css'; //recheck

const Footer = () => {
  return (
    <footer>

       {/* Footer social */}
      <section className="ft-social">
        <div className="ft-social-item"> 
            <img src=" "alt="de.gentrificAItion"/> {/*degentrificAItion logo SVG */}
        </div>
        <ul className="ft-social-list"> {/*Replace with proper links*/}
          <li><a href="https://vimeo.com"><i className="fab fa-vimeo"></i></a></li>
          <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://github.com"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="mailto:email@example.com"><i className="fas fa-envelope"></i></a></li>
        </ul>
      </section> 

      {/* Footer main */}
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">Navigation</h2>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to = "/Process">Process</Link></li>
            <li><Link to="/Demo">Demo</Link></li>
            <li><Link to = "/Team">Team</Link></li>
            
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Address</h2>
          <ul>
            <li><a href="#">6666 Saint-Urbain Street,<br></br> #200 Montreal, QC,<br></br> H2S 3H1</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">More</h2>
          <ul>
            <li><Link to="/">#Fill In</Link></li>
            <li><Link to="/Demo">#Fill In2</Link></li>
            <li><Link to = "/Team">#Fill In3</Link></li>
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
          <li>&copy;2024 degentrifAI. All Rights Reserved.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
