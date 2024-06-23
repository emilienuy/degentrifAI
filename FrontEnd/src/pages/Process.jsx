// import React, { useState } from 'react';
// import '../styles/Process.scss';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import OutDatabaseIcon from '@mui/icons-material/Storage';
// import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GlobeIcon from '@mui/icons-material/Public';

// const Process = () => {
//   const [selectedStep, setSelectedStep] = useState(null);

//   const steps = [
//     { id: 1, title: 'Literature Review', description: `
//       In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).

//       The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].

//       Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city.

//       //Click here to have a glimpse of our literature review.
//     `, icon: <FindInPageIcon /> },
//     { id: 2, title: 'Expert Consultation', description: 'Detailed information about Expert Consultation', icon: <HandshakeIcon /> },
//     { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon /> },
//     { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <OutManufacturingIcon /> },
//     { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
//     { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <GlobeIcon /> },
//   ];

//   const handleIconClick = (step) => {
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container"> {/* New container for controlling padding */}
//       <div className="container">
//         <div className="row text-center justify-content-center mb-5">
//           <div className="col-xl-6 col-lg-8">
//             <h2 className="font-weight-bold">Our process</h2>
//             <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col">
//             <div className="timeline-steps" data-aos="fade-up">
//               {steps.map((step) => (
//                 <div className="timeline-step" key={step.id}>
//                   <div
//                     className="timeline-content"
//                     data-toggle="popover"
//                     data-trigger="hover"
//                     data-placement="top"
//                     title=""
//                     data-content="And here's some amazing content. It's very engaging. Right?"
//                     data-original-title="2003"
//                     onClick={() => handleIconClick(step)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <div className="icon-container">{step.icon}</div>
//                     <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                     <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedStep && (
//           <div className="row mt-5 justify-content-center">
//             <div className="col-lg-8 info-box">
//               <div className="info-title">
//                 <h4>{selectedStep.title}</h4>
//               </div>
//               <div className="info-description">
//                 <p>{selectedStep.description}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Process;

// import React, { useState } from 'react';
// import '../styles/Process.scss';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import OutDatabaseIcon from '@mui/icons-material/Storage';
// import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GlobeIcon from '@mui/icons-material/Public';

// const Process = () => {
//   const [selectedStep, setSelectedStep] = useState(null);

//   const steps = [
//     { id: 1, title: 'Literature Review', description: `
//       In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).

//       The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].

//       Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city.

//       //Click here to have a glimpse of our literature review.
//     `, icon: <FindInPageIcon /> },
//     { id: 2, title: 'Expert Consultation', description: 'Detailed information about Expert Consultation', icon: <HandshakeIcon /> },
//     { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon /> },
//     { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <OutManufacturingIcon /> },
//     { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
//     { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <GlobeIcon /> },
//   ];

//   const handleIconClick = (step) => {
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container"> {/* New container for controlling padding */}
//       <div className="container">
//         <div className="row text-center justify-content-center mb-5">
//           <div className="col-xl-6 col-lg-8">
//             <h2 className="font-weight-bold">Our process</h2>
//             <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col">
//             <div className="timeline-steps" data-aos="fade-up">
//               {steps.map((step) => (
//                 <div className="timeline-step" key={step.id}>
//                   <div
//                     className="timeline-content"
//                     data-toggle="popover"
//                     data-trigger="hover"
//                     data-placement="top"
//                     title=""
//                     data-content="And here's some amazing content. It's very engaging. Right?"
//                     data-original-title="2003"
//                     onClick={() => handleIconClick(step)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <div className="icon-container">{step.icon}</div>
//                     <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                     <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedStep && (
//           <div className="row mt-5 justify-content-center">
//             <div className="col-lg-8 mission-box"> {/* Changed to mission-box */}
//               <p><strong>{selectedStep.title}</strong><br />
//               {selectedStep.description}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Process;

import React, { useState } from 'react';
import '../styles/Process.scss';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HandshakeIcon from '@mui/icons-material/Handshake';
import OutDatabaseIcon from '@mui/icons-material/Storage';
import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GlobeIcon from '@mui/icons-material/Public';

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    { id: 1, title: 'Literature Review', description: `
      In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).

      The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].

      Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city.

      //Click here to have a glimpse of our literature review.
    `, icon: <FindInPageIcon /> },
    { id: 2, title: 'Expert Consultation', description: 'Detailed information about Expert Consultation', icon: <HandshakeIcon /> },
    { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon /> },
    { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <OutManufacturingIcon /> },
    { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
    { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <GlobeIcon /> },
  ];

  const handleIconClick = (step) => {
    console.log("Icon clicked:", step); // Debug log
    setSelectedStep(step);
  };

  return (
    <div className="process-container">
      <div className="container">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold">Our process</h2>
            <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="timeline-steps" data-aos="fade-up">
              {steps.map((step) => (
                <div className="timeline-step" key={step.id}>
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2003"
                    onClick={() => handleIconClick(step)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="icon-container">{step.icon}</div>
                    <p className="h6 mt-3 mb-1">Step {step.id}</p>
                    <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedStep && (
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-8 mission-box">
              <p><strong>{selectedStep.title}</strong><br />
              {selectedStep.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;



      






