// import React, { useState } from 'react';
// import '../styles/Team.scss'; 

// // Import images
// import EmilyHong from '../pictures/Emily_Hong.JPG';
// import TheresaQuan from '../pictures/Theresa_Quan.JPG';
// import EmilieNuyttens from '../pictures/Emilie.JPG';
// import Luth from '../pictures/luth.jpg'
// import Ali from '../pictures/Ali.png'

// const Team = () => {
//   const [activeMember, setActiveMember] = useState(null);

//   const toggleInfo = (index) => {
//     setActiveMember(activeMember === index ? null : index);
//   };

//   const teamMembers = [
//     {
//       name: 'Emily Hong',
//       imgSrc: EmilyHong,
//       email: 'emily.hong@example.com',
//       linkedIn: 'https://www.linkedin.com/in/emilyhong',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//     {
//       name: 'Yutong(Theresa) Quan',
//       imgSrc: TheresaQuan,
//       email: 'ytquan@umich.edu',
//       linkedIn: 'www.linkedin.com/in/yutong-quan-41b0a9268',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//     {
//       name: 'Emilie Nuyttens',
//       imgSrc: EmilieNuyttens,
//       email: 'emilienuyttens@gmail.com',
//       linkedIn: 'http://linkedin.com/in/emilienuyttens',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//     {
//       name: 'Luth Gallemaso',
//       imgSrc: Luth, 
//       email: 'luth.villafuerte@gmail.com',
//       linkedIn: 'https://www.linkedin.com/in/luthgallemaso',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//     {
//       name: 'Nastaran Alizade',
//       imgSrc: '', 
//       email: 'nastaran.alizade@example.com',
//       linkedIn: 'https://www.linkedin.com/in/nastaranalizade',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//     {
//       name: 'Ali Saheb Pasand',
//       imgSrc: Ali, 
//       email: 'nastaran.alizade@example.com',
//       linkedIn: 'https://www.linkedin.com/in/nastaranalizade',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     },
//   ];

//   return (
//     <div className="leadership-team">
//       <h1>Our Team</h1>
//       <div className="team-members">
//         {teamMembers.map((member, index) => (
//           <div
//             className={`team-member ${activeMember === index ? 'active' : ''}`}
//             key={index}
//             onClick={() => toggleInfo(index)}
//           >
//             {member.imgSrc ? (
//               <img src={member.imgSrc} alt={member.name} className="member-photo" />
//             ) : (
//               <div className="member-photo-placeholder">
//                 <h2>{member.name}</h2>
//               </div>
//             )}
//             <div className="member-info">
//               <h2>{member.name}</h2>
//               <p>{member.description}</p>
//               <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
//               <p>LinkedIn: <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">{member.name}</a></p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React, { useState } from 'react';
import '../styles/Team.scss'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import images
import EmilyHong from '../pictures/Emily_Hong.JPG';
import TheresaQuan from '../pictures/Theresa_Quan.JPG';
import EmilieNuyttens from '../pictures/Emilie.JPG';
import Luth from '../pictures/luth.jpg';
import Ali from '../pictures/Ali.png';

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
      email: 'ytquan@umich.edu',
      linkedIn: 'https://www.linkedin.com/in/yutong-quan-41b0a9268',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Emilie Nuyttens',
      imgSrc: EmilieNuyttens,
      email: 'emilienuyttens@gmail.com',
      linkedIn: 'http://linkedin.com/in/emilienuyttens',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Luth Gallemaso',
      imgSrc: Luth,
      email: 'luth.villafuerte@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/luthgallemaso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Nastaran Alizade',
      imgSrc: '', 
      email: 'nastaran.alizade@example.com',
      linkedIn: 'https://www.linkedin.com/in/nastaranalizade',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Ali Saheb Pasand',
      imgSrc: Ali, 
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




