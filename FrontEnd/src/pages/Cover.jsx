import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cover.scss';
import TeamLogo from '../pictures/logo_pink.png';
import OldMontreal from '../pictures/Old_Montreal.png';
import NewMontreal from '../pictures/New_Montreal.jpeg';

const CoverPage = () => {
  const handleMouseMove = (event) => {
    const { clientX } = event;
    const { innerWidth } = window;
    const overlay = document.querySelector('.overlay');
    const percentage = clientX / innerWidth;
    overlay.style.width = `${percentage * 100}%`;
  };

  return (
    <div className="cover-container" onMouseMove={handleMouseMove}>
      <div className="background">
        <img src={OldMontreal} alt="Old Montreal" className="old-montreal" />
        <img src={NewMontreal} alt="New Montreal" className="new-montreal overlay" />
      </div>
      <div className="content">
        <img src={TeamLogo} alt="Team Logo" className="team-logo" />
        <Link to="/about" className="view-work">
          View Our Work
        </Link>
      </div>
    </div>
  );
};

export default CoverPage;
