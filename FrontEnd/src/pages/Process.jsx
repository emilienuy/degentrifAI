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

import React from 'react';
import '../styles/Process.scss';

const Process = () => {
  return (
    <div className="container">
      <div className="row text-center justify-content-center mb-5">
        <div className="col-xl-6 col-lg-8">
          <h2 className="font-weight-bold">Our Process</h2>
          <p className="text-muted">Lorem ipsum</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="timeline-steps" data-aos="fade-up">
            <div className="timeline-step">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 1</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Literature Review</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 2</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Expert Consultation</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 3</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Data Collection and Cleaning</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 4</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Model Training</p>
              </div>
            </div>
            <div className="timeline-step mb-0">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 5</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Final Prototype</p>
              </div>
            </div>
            <div className="timeline-step mb-0">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2021">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">Step 6</p>
                <p className="h6 text-muted mb-0 mb-lg-0">Future Applications</p>
              </div>
            {/* </div> */}
            {/* <div className="timeline-step mb-0">
              <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2022">
                <div className="inner-circle"></div>
                <p className="h6 mt-3 mb-1">+</p>
                <p className="h6 text-muted mb-0 mb-lg-0">References</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

