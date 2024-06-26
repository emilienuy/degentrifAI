import React, { useState } from 'react';
import '../styles/Team.scss'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import images
import EmilyHong from '../pictures/Emily_Hong.JPG';
import TheresaQuan from '../pictures/Theresa_Quan.JPG';
import EmilieNuyttens from '../pictures/Emilie.jpg';
import Luth from '../pictures/luth.jpg';
import Ali from '../pictures/Ali.png';
import Nas from '../pictures/Nas.jpg'
import anna from '../pictures/anna.jpg'

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);

  const toggleInfo = (index) => {
    setActiveMember(activeMember === index ? null : index);
  };

  const teamMembers = [
    {
      name: 'Emily Hong',
      imgSrc: EmilyHong,
      email: 'emilylihong77@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/emilylihong',
      description: 'Inspired by an urban geography course she took at Marianopolis College, Emily pitched the rough idea of degentrifAI with the goal of drawing attention to a systemic issue prevalent in Montreal. As a computer science and international & public affairs student at Brown University, she is passionate about leveraging technology for social good. In her free time, she loves to watch video essays on YouTube, play golf with her friends, and experiment in the kitchen. Emily will enter a gap semester before studying abroad in Paris next spring.',
    },
    {
      name: 'Yutong(Theresa) Quan',
      imgSrc: TheresaQuan,
      email: 'ytquan@umich.edu',
      linkedIn: 'https://www.linkedin.com/in/yutong-quan-41b0a9268',
      description: `Yutong Quan is originally from Wuhan, China. She recently completed her second year as a Computer Science and Economics student at McGill University. This fall, she will be starting a new journey as a Data Science student at the University of Michigan, Ann Arbor. Outside of academics, Yutong is passionate about street photography (you can follow her Instagram @theresas_photogarllery), mixology, and playing tennis.`,
    },
    {
      name: 'Emilie Nuyttens',
      imgSrc: EmilieNuyttens,
      email: 'emilienuyttens@gmail.com',
      linkedIn: 'http://linkedin.com/in/emilienuyttens',
      description: 'Emilie grew up in New York to Belgian parents, and recently graduated with a Bachelor of Science in Neuroscience from McGill University in May 2024. Fascinated by the convergence of Neuroscience and AI during her studies, she eagerly joined the AI4Good lab to explore her newfound passion for AI-driven solutions. In her free time, you can find Emilie hitting the ski slopes with friends, painting in the park on a sunny day, or exploring new destinations, fueled by her love for travel and adventure.',
    },
    {
      name: 'Luth Gallemaso',
      imgSrc: Luth,
      email: 'luth.villafuerte@gmail.com',
      //linkedIn: 'https://www.linkedin.com/in/luthgallemaso',
      description: 'Studies Computer Science at Concordia University. Originally from Calgary, Alberta. My interests are films, collecting records, playing chess, active living, film photography.',
    },
    {
      name: 'Nastaran Alizade',
      imgSrc: Nas, 
      email: 'Nastaran.alizadeh@mail.mcgill.ca',
      linkedIn: 'https://www.linkedin.com/in/nastaran-alizade-833048153?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Ali Saheb Pasand',
      imgSrc: Ali, 
      //email: 'nastaran.alizade@example.com',
      //linkedIn: 'https://www.linkedin.com/in/nastaranalizade',
      description: 'Ali is our group TA. We greatly appreciate all the support and encouragement he has provided!',
    },
    {
      name: 'Anna Richter',
      imgSrc: anna, 
      //email: 'nastaran.alizade@example.com',
      linkedIn: 'https://www.linkedin.com/in/anna-richter-25847a1b6/',
      description: 'Ali is our group mentor. We greatly appreciate all the support and encouragement she has provided!',
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
              <div className="ft-social">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;




