// import React, { useEffect, useState } from 'react';
// import '../styles/Process.scss';
// import { useInView } from 'react-intersection-observer';

// const Section = ({ title, children }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className={`section ${isVisible ? 'animate' : ''}`}>
//       <h2>{title}</h2>
//       {children}
//     </div>
//   );
// };

// const Process = () => {
//   return (
//     <div className="process-container">
//       <Section title="LITERATURE REVIEW">
//         <p>
//           Provide an overview summary here...
//           In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).
//           ...
//         </p>
//       </Section>

//       <Section title="EXPERT CONSULTATION">
//         <div className="expert-consultation-section">
//           <div className="expert-card">
//             <img src="path/to/image1.jpg" alt="GENUINE Team" />
//             <div className="expert-card-text">
//               <h3>GENUINE Team</h3>
//               <p>
//                 Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based gentrification tool designed specifically for Canadian metropolitan areas (Kestens et al., 2021)...
//               </p>
//             </div>
//           </div>
//           <div className="expert-card">
//             <img src="path/to/image2.jpg" alt="Kevin Manaugh" />
//             <div className="expert-card-text">
//               <h3>Curbcut Team, Kevin Manaugh, PhD</h3>
//               <p>
//                 Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography...
//               </p>
//             </div>
//           </div>
//           <div className="expert-card">
//             <img src="path/to/image3.jpg" alt="Marie Sterlin" />
//             <div className="expert-card-text">
//               <h3>Marie Sterlin</h3>
//               <p>
//                 Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development and Montreal Diversity...
//               </p>
//             </div>
//           </div>
//         </div>
//       </Section>

//       <Section title="DATA COLLECTION AND CLEANING">
//         <p>Details about data collection and cleaning...</p>
//       </Section>

//       <Section title="MODEL TRAINING">
//         <div className="model-content">
//           <div className="model-text">
//             <p>Details about model training...</p>
//           </div>
//           <div className="model-images">
//             <img src="path/to/image3.jpg" alt="Model Training" />
//           </div>
//         </div>
//       </Section>

//       <Section title="FINAL PROTOTYPE">
//         <div className="prototype-content">
//           <div className="prototype-text">
//             <p>Details about the final prototype...</p>
//           </div>
//           <div className="prototype-images">
//             <img src="path/to/image4.jpg" alt="Final Prototype" />
//           </div>
//         </div>
//       </Section>

//       <Section title="FUTURE APPLICATIONS">
//         <p>Details about future applications...</p>
//       </Section>

//       <Section title="REFERENCES">
//         <ul>
//           <li>Alejandro, Y., & Palafox, L. (2019). Gentrification Prediction Using Machine Learning...</li>
//           <li>Bekkerman, R., Warde, D., & Cohen, M. C. (2023). Measuring Gentrification...</li>
          
//         </ul>
//       </Section>
//     </div>
//   );
// };

// export default Process;

// ORIGINAL
// import React from 'react';
// import '../styles/Process.scss';

// const Process = () => {
//   return (
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">A Company Evolution</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 1</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Literature Review</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 2</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Expert Consultation</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 3</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Data Collection and Cleaning</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 4</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Model Training</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 5</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Final Prototype</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2021">
//                 <div className="inner-circle"></div>
//                 <p className="h6 mt-3 mb-1">Step 6</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Future Applications</p>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;

// import React from 'react';
// import '../styles/Process.scss';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import DatabaseIcon from '@mui/icons-material/Storage';
// import ManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GlobeIcon from '@mui/icons-material/Public';

// const Process = () => {
//   return (
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">Our process</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
//                 <div className="icon-container"><FindInPageIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 1</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Literature Review</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
//                 <div className="icon-container"><HandshakeIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 2</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Expert Consultation</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
//                 <div className="icon-container"><DatabaseIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 3</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Data Collection and Cleaning</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
//                 <div className="icon-container"><ManufacturingIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 4</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Model Training</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
//                 <div className="icon-container"><RocketLaunchIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 5</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Final Prototype</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2021">
//                 <div className="icon-container"><GlobeIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 6</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Future Applications</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;

// import React from 'react';
// import '../styles/Process.scss';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import OutDatabaseIcon from '@mui/icons-material/Storage';
// import OutManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GlobeIcon from '@mui/icons-material/Public';

// const Process = () => {
//   return (
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">Our process</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
//                 <div className="icon-container"><FindInPageIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 1</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Literature Review</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
//                 <div className="icon-container"><HandshakeIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 2</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Expert Consultation</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
//                 <div className="icon-container"><OutDatabaseIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 3</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Data Collection and Cleaning</p>
//               </div>
//             </div>
//             <div className="timeline-step">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
//                 <div className="icon-container"><OutManufacturingIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 4</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Model Training</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
//                 <div className="icon-container"><RocketLaunchIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 5</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Final Prototype</p>
//               </div>
//             </div>
//             <div className="timeline-step mb-0">
//               <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2021">
//                 <div className="icon-container"><GlobeIcon /></div>
//                 <p className="h6 mt-3 mb-1">Step 6</p>
//                 <p className="h6 text-muted mb-0 mb-lg-0">Future Applications</p>
//               </div>
//             </div>
//           </div>
//         </div>
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
//     { id: 1, title: 'Literature Review', description: "", icon: <FindInPageIcon /> },
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
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">Our process</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             {steps.map((step) => (
//               <div className="timeline-step" key={step.id}>
//                 <div
//                   className="timeline-content"
//                   data-toggle="popover"
//                   data-trigger="hover"
//                   data-placement="top"
//                   title=""
//                   data-content="And here's some amazing content. It's very engaging. Right?"
//                   data-original-title="2003"
//                   onClick={() => handleIconClick(step)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div className="icon-container">{step.icon}</div>
//                   <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                   <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {selectedStep && (
//         <div className="row mt-5">
//           <div className="col text-center">
//             <h4>{selectedStep.title}</h4>
//             <p>{selectedStep.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Process;

//01
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
//     { id: 1, title: 'Literature Review', description: "", icon: <FindInPageIcon /> },
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
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">Our process</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             {steps.map((step) => (
//               <div className="timeline-step" key={step.id}>
//                 <div
//                   className="timeline-content"
//                   data-toggle="popover"
//                   data-trigger="hover"
//                   data-placement="top"
//                   title=""
//                   data-content="And here's some amazing content. It's very engaging. Right?"
//                   data-original-title="2003"
//                   onClick={() => handleIconClick(step)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div className="icon-container">{step.icon}</div>
//                   <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                   <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {selectedStep && (
//         <div className="row mt-5 justify-content-center">
//           <div className="col-lg-8 info-box">
//             <div className="info-title">
//               <h4>{selectedStep.title}</h4>
//             </div>
//             <div className="info-description">
//               <p>{selectedStep.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
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
//     <div className="container">
//       <div className="row text-center justify-content-center mb-5">
//         <div className="col-xl-6 col-lg-8">
//           <h2 className="font-weight-bold">Our process</h2>
//           <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="timeline-steps" data-aos="fade-up">
//             {steps.map((step) => (
//               <div className="timeline-step" key={step.id}>
//                 <div
//                   className="timeline-content"
//                   data-toggle="popover"
//                   data-trigger="hover"
//                   data-placement="top"
//                   title=""
//                   data-content="And here's some amazing content. It's very engaging. Right?"
//                   data-original-title="2003"
//                   onClick={() => handleIconClick(step)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div className="icon-container">{step.icon}</div>
//                   <p className="h6 mt-3 mb-1">Step {step.id}</p>
//                   <p className="h6 text-muted mb-0 mb-lg-0">{step.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {selectedStep && (
//         <div className="row mt-5 justify-content-center">
//           <div className="col-lg-8 info-box">
//             <div className="info-title">
//               <h4>{selectedStep.title}</h4>
//             </div>
//             <div className="info-description">
//               <p>{selectedStep.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
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
    setSelectedStep(step);
  };

  return (
    <div className="process-container"> {/* New container for controlling padding */}
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
            <div className="col-lg-8 info-box">
              <div className="info-title">
                <h4>{selectedStep.title}</h4>
              </div>
              <div className="info-description">
                <p>{selectedStep.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;


      






