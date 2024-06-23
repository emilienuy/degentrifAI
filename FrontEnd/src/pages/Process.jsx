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
//     console.log("Icon clicked:", step); // Debug log
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container">
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
//             <div className="col-lg-8 mission-box">
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
//     { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
//       <section className="expert-consultation-section">
//         <div className="expert-card">
//           <img src="path/to/image1.jpg" alt="GENUINE Team" />
//           <div className="expert-card-text">
//             <h3>GENUINE Team</h3>
//             <p>
//               Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based gentrification tool designed specifically for Canadian metropolitan areas (Kestens et al., 2021)...
//             </p>
//           </div>
//         </div>
//         <div className="expert-card">
//           <img src="path/to/image2.jpg" alt="Kevin Manaugh" />
//           <div className="expert-card-text">
//             <h3>Curbcut Team, Kevin Manaugh, PhD</h3>
//             <p>
//               Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography...
//             </p>
//           </div>
//         </div>
//         <div className="expert-card">
//           <img src="path/to/image3.jpg" alt="Marie Sterlin" />
//           <div className="expert-card-text">
//             <h3>Marie Sterlin</h3>
//             <p>
//               Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development and Montreal Diversity...
//             </p>
//           </div>
//         </div>
//       </section>
//     )},
//     { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon /> },
//     { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <OutManufacturingIcon /> },
//     { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
//     { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <GlobeIcon /> },
//   ];

//   const handleIconClick = (step) => {
//     console.log("Icon clicked:", step); // Debug log
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container">
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
//             <div className="col-lg-8 mission-box">
//               {selectedStep.content ? selectedStep.content : (
//                 <p><strong>{selectedStep.title}</strong><br />
//                 {selectedStep.description}</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Process;
//---------------------------------------------
import React, { useState } from 'react';
import '../styles/Process.scss';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HandshakeIcon from '@mui/icons-material/Handshake';
import OutDatabaseIcon from '@mui/icons-material/Storage';
import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GlobeIcon from '@mui/icons-material/Public';

import CurbCut from '../pictures/curbcut.png'

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    { id: 1, title: 'Literature Review', description: `
      In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).

      The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].

      Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city.

      //Click here to have a glimpse of our literature review.
    `, icon: <FindInPageIcon /> },
    { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
      <section className="expert-consultation-section">
        <div className="expert-card">
          <img src="path/to/image1.jpg" alt="GENUINE Team" />
          <div className="expert-card-text">
            <h3>GENUINE Team</h3>
            <p>
              Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based gentrification tool designed specifically for Canadian metropolitan areas (Kestens et al., 2021)...
            </p>
          </div>
        </div>
        <div className="expert-card">
          <img src= "../pictures/curbcut.jpg" alt="Kevin Manaugh" />
          <div className="expert-card-text">
            <h3>Curbcut Team, Kevin Manaugh, PhD</h3>
            <p>
              Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography...
            </p>
          </div>
        </div>
        <div className="expert-card">
          <img src="path/to/image3.jpg" alt="Marie Sterlin" />
          <div className="expert-card-text">
            <h3>Marie Sterlin</h3>
            <p>
              Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development and Montreal Diversity...
            </p>
          </div>
        </div>
      </section>
    )},
    { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon />, content: (
      <>
        <p><strong>Data collection and cleaning</strong></p>
        <p>
          DegentrifAI relies on Census data provided by Statistics Canada[13], spanning the years 1996 to 2021. Census data is compiled every five years, and for our analysis, we've gathered data from the following years: 1996, 2001, 2006, 2011, 2016, and 2021.
        </p>
        <div className="row">
          <div className="col-md-4">
            <h5>Census Data Overview:</h5>
            <p>
              Census data encompasses a wide range of statistical insights about the population, including demographics such as age, sex at birth, and gender identity, as well as details about dwelling types, familial structures, marital statuses, military service, income distribution, linguistic diversity, Indigenous communities, housing conditions, immigration patterns, citizenship status, ethnic and religious demographics, mobility trends, educational attainment, employment statistics, and commuting behaviors. These metrics are systematically collected through the Census Program[14].
            </p>
          </div>
          <div className="col-md-4">
            <h5>Level of Analysis: Census Tracts</h5>
            <p>
              DegentrifAI focuses its analysis on the Montreal Census Metropolitan Area (CMA) and utilizes Census tracts as the primary unit of examination. A Census Metropolitan Area, or CMA, comprises one or more adjacent municipalities with a collective population exceeding 100,000, with at least 50,000 residents residing in the core area[15]. Census tracts are relatively small and consistent geographical zones, typically accommodating populations ranging from 2,500 to 8,000 individuals[16]. Their delineations are established through collaboration between local stakeholders and Statistics Canada, ensuring alignment with enduring physical features and, whenever possible, conforming to established neighborhood boundaries[16].
            </p>
          </div>
          <div className="col-md-4">
            <h5>Gentrification measures:</h5>
            <p>
              Drawing on Canadian census data, the authors evaluated various gentrification metrics to determine their efficacy in capturing observed gentrification patterns in Canadian urban centers. Our team met with the authors to discuss the census data sets and gentrification measures that we should use. After consultation, we decided to use the Ding measure, as it most accurately captures observed gentrification in Canadian cities [12].
              <br />
              Ding measures: Gentrifiable, Gentrified, Gentrification Level
            </p>
          </div>
        </div>
      </>
    )},
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
              {selectedStep.content ? selectedStep.content : (
                <p><strong>{selectedStep.title}</strong><br />
                {selectedStep.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Process;

//---------------------------------------

// import React, { useState } from 'react';
// import '../styles/Process.scss';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import OutDatabaseIcon from '@mui/icons-material/Storage';
// import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GlobeIcon from '@mui/icons-material/Public';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const Process = () => {
//   const [selectedStep, setSelectedStep] = useState(null);
//   const [viewedSteps, setViewedSteps] = useState([]);

//   const steps = [
//     { id: 1, title: 'Literature Review', description: `In the initial phase...`, icon: <FindInPageIcon /> },
//     { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
//       <section className="expert-consultation-section">
//         {/* Expert consultation content */}
//       </section>
//     ) },
//     { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information...', icon: <OutDatabaseIcon />, content: (
//       <>
//         {/* Data collection and cleaning content */}
//       </>
//     ) },
//     { id: 4, title: 'Model Training', description: 'Detailed information...', icon: <OutManufacturingIcon /> },
//     { id: 5, title: 'Final Prototype', description: 'Detailed information...', icon: <RocketLaunchIcon /> },
//     { id: 6, title: 'Future Applications', description: 'Detailed information...', icon: <GlobeIcon /> },
//   ];

//   const handleIconClick = (step) => {
//     if (!viewedSteps.includes(step.id)) {
//       setViewedSteps([...viewedSteps, step.id]);
//     }
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container">
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
//               {steps.map((step, index) => (
//                 <div className="timeline-step" key={step.id}>
//                   <div
//                     className={`timeline-content ${viewedSteps.includes(step.id) ? 'viewed' : ''}`}
//                     onClick={() => handleIconClick(step)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <div className="icon-container">{step.icon}</div>
//                     <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                     <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <ArrowForwardIcon className="arrow-icon" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedStep && (
//           <div className="row mt-5 justify-content-center">
//             <div className="col-lg-8 mission-box">
//               {selectedStep.content ? selectedStep.content : (
//                 <p><strong>{selectedStep.title}</strong><br />
//                 {selectedStep.description}</p>
//               )}
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
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import CurbCut from '../pictures/curbcut.png';

// const Process = () => {
//   const [selectedStep, setSelectedStep] = useState(null);

//   const steps = [
//     { id: 1, title: 'Literature Review', description: `
//       In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).

//       The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].

//       Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city.

//       //Click here to have a glimpse of our literature review.
//     `, icon: <FindInPageIcon /> },
//     { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
//       <section className="expert-consultation-section">
//         <div className="expert-card">
//           <img src="path/to/image1.jpg" alt="GENUINE Team" />
//           <div className="expert-card-text">
//             <h3>GENUINE Team</h3>
//             <p>
//               Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based gentrification tool designed specifically for Canadian metropolitan areas (Kestens et al., 2021)...
//             </p>
//           </div>
//         </div>
//         <div className="expert-card">
//           <img src= "../pictures/curbcut.jpg" alt="Kevin Manaugh" />
//           <div className="expert-card-text">
//             <h3>Curbcut Team, Kevin Manaugh, PhD</h3>
//             <p>
//               Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography...
//             </p>
//           </div>
//         </div>
//         <div className="expert-card">
//           <img src="path/to/image3.jpg" alt="Marie Sterlin" />
//           <div className="expert-card-text">
//             <h3>Marie Sterlin</h3>
//             <p>
//               Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development and Montreal Diversity...
//             </p>
//           </div>
//         </div>
//       </section>
//     )},
//     { id: 3, title: 'Data Collection and Cleaning', description: 'Detailed information about Data Collection and Cleaning', icon: <OutDatabaseIcon />, content: (
//       <>
//         <p><strong>Data collection and cleaning</strong></p>
//         <p>
//           DegentrifAI relies on Census data provided by Statistics Canada[13], spanning the years 1996 to 2021. Census data is compiled every five years, and for our analysis, we've gathered data from the following years: 1996, 2001, 2006, 2011, 2016, and 2021.
//         </p>
//         <div className="row">
//           <div className="col-md-4">
//             <h5>Census Data Overview:</h5>
//             <p>
//               Census data encompasses a wide range of statistical insights about the population, including demographics such as age, sex at birth, and gender identity, as well as details about dwelling types, familial structures, marital statuses, military service, income distribution, linguistic diversity, Indigenous communities, housing conditions, immigration patterns, citizenship status, ethnic and religious demographics, mobility trends, educational attainment, employment statistics, and commuting behaviors. These metrics are systematically collected through the Census Program[14].
//             </p>
//           </div>
//           <div className="col-md-4">
//             <h5>Level of Analysis: Census Tracts</h5>
//             <p>
//               DegentrifAI focuses its analysis on the Montreal Census Metropolitan Area (CMA) and utilizes Census tracts as the primary unit of examination. A Census Metropolitan Area, or CMA, comprises one or more adjacent municipalities with a collective population exceeding 100,000, with at least 50,000 residents residing in the core area[15]. Census tracts are relatively small and consistent geographical zones, typically accommodating populations ranging from 2,500 to 8,000 individuals[16]. Their delineations are established through collaboration between local stakeholders and Statistics Canada, ensuring alignment with enduring physical features and, whenever possible, conforming to established neighborhood boundaries[16].
//             </p>
//           </div>
//           <div className="col-md-4">
//             <h5>Gentrification measures:</h5>
//             <p>
//               Drawing on Canadian census data, the authors evaluated various gentrification metrics to determine their efficacy in capturing observed gentrification patterns in Canadian urban centers. Our team met with the authors to discuss the census data sets and gentrification measures that we should use. After consultation, we decided to use the Ding measure, as it most accurately captures observed gentrification in Canadian cities [12].
//               <br />
//               Ding measures: Gentrifiable, Gentrified, Gentrification Level
//             </p>
//           </div>
//         </div>
//       </>
//     )},
//     { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <OutManufacturingIcon /> },
//     { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
//     { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <GlobeIcon /> },
//   ];

//   const handleIconClick = (step) => {
//     console.log("Icon clicked:", step); // Debug log
//     setSelectedStep(step);
//   };

//   return (
//     <div className="process-container">
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
//               {steps.map((step, index) => (
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
//                     <p className="h6 text-muted mb-0 mb-lg-0 title">{step.title}</p>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <ArrowForwardIcon className="arrow-icon" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedStep && (
//           <div className="row mt-5 justify-content-center">
//             <div className="col-lg-8 mission-box">
//               {selectedStep.content ? selectedStep.content : (
//                 <p><strong>{selectedStep.title}</strong><br />
//                 {selectedStep.description}</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Process;





      






