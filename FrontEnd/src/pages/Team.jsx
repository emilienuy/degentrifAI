import React, { useState } from 'react';
import '../styles/Team.scss'; // 确保路径正确

// Import images
import EmilyHong from '../pictures/Emily_Hong.JPG';
import TheresaQuan from '../pictures/Theresa_Quan.JPG';
import EmilieNuyttens from '../pictures/Emilie.jpg';

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);

  const toggleInfo = (index) => {
    setActiveMember(activeMember === index ? null : index);
  };

  const teamMembers = [
    {
      name: 'Emily Hong',
      imgSrc: EmilyHong,
      email: 'emily.hong@example.com',
      linkedIn: 'https://www.linkedin.com/in/emilyhong',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Yutong(Theresa) Quan',
      imgSrc: TheresaQuan,
      email: 'yutong.quan@example.com',
      linkedIn: 'https://www.linkedin.com/in/yutongquan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Emilie Nuyttens',
      imgSrc: EmilieNuyttens,
      email: 'emilie.nuyttens@example.com',
      linkedIn: 'https://www.linkedin.com/in/emilienuyttens',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Luth Gallemaso',
      imgSrc: '', // Placeholder, no image
      email: 'luth.gallemaso@example.com',
      linkedIn: 'https://www.linkedin.com/in/luthgallemaso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Nastaran Alizade',
      imgSrc: '', // Placeholder, no image
      email: 'nastaran.alizade@example.com',
      linkedIn: 'https://www.linkedin.com/in/nastaranalizade',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
  ];

  return (
    <div className="leadership-team">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className={`team-member ${activeMember === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleInfo(index)}
          >
            {member.imgSrc ? (
              <img src={member.imgSrc} alt={member.name} className="member-photo" />
            ) : (
              <div className="member-photo-placeholder">
                <h2>{member.name}</h2>
              </div>
            )}
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.description}</p>
              <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
              <p>LinkedIn: <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">{member.name}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
