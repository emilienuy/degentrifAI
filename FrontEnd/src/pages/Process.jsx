import React, { useEffect, useState } from 'react';
import '../styles/Process.scss';
import { useInView } from 'react-intersection-observer';

const Section = ({ title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`section ${isVisible ? 'animate' : ''}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const Process = () => {
  return (
    <div className="process-container">
      <Section title="LITERATURE REVIEW">
        <p>
          Provide an overview summary here...
          In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).
          ...
        </p>
      </Section>

      <Section title="EXPERT CONSULTATION">
        <div className="expert-consultation-section">
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
            <img src="path/to/image2.jpg" alt="Kevin Manaugh" />
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
        </div>
      </Section>

      <Section title="DATA COLLECTION AND CLEANING">
        <p>Details about data collection and cleaning...</p>
      </Section>

      <Section title="MODEL TRAINING">
        <div className="model-content">
          <div className="model-text">
            <p>Details about model training...</p>
          </div>
          <div className="model-images">
            <img src="path/to/image3.jpg" alt="Model Training" />
          </div>
        </div>
      </Section>

      <Section title="FINAL PROTOTYPE">
        <div className="prototype-content">
          <div className="prototype-text">
            <p>Details about the final prototype...</p>
          </div>
          <div className="prototype-images">
            <img src="path/to/image4.jpg" alt="Final Prototype" />
          </div>
        </div>
      </Section>

      <Section title="FUTURE APPLICATIONS">
        <p>Details about future applications...</p>
      </Section>

      <Section title="REFERENCES">
        <ul>
          <li>Alejandro, Y., & Palafox, L. (2019). Gentrification Prediction Using Machine Learning...</li>
          <li>Bekkerman, R., Warde, D., & Cohen, M. C. (2023). Measuring Gentrification...</li>
          
        </ul>
      </Section>
    </div>
  );
};

export default Process;
