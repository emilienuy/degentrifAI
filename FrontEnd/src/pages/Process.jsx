import React, { useState, useEffect } from 'react';
import '../styles/Process.scss';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StorageIcon from '@mui/icons-material/Storage';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const steps = [
    { id: 1, 
      title: 'Literature Review', 
      description: `In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification,
       urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding
        of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).\n

      The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1],
       Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct
        data measures for prediction, ranging from analyzing housing price [9] trends to harnessing Google Earth satellite imagery [6]. Additionally,
         a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing 
         (NLP) for classifying Airbnb reviews [10].\n

      Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, 
      a venture not previously undertaken in the city.`,
    icon: <FindInPageIcon /> },
    { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
      <section className="expert-consultation-section horizontal">
        <ExpertCard
          image={require('../pictures/statistics.png')}
          title="GENUINE Team"
          description="Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based
           gentrification tool designed specifically for Canadian metropolitan areas [11]. Drawing on Canadian census data, the authors 
           evaluated various gentrification metrics to determine their efficacy in capturing observed gentrification patterns in Canadian 
           urban centers. Our team met with the authors to discuss the census data sets and gentrification measures that would be crucial 
           for predicting gentrification in Montreal, which we discuss in the next section “Data collection and cleaning”.
          "
          animationDelay="0s"
        />
        <ExpertCard
          image={require('../pictures/Kevin.jpeg')}
          title="Curbcut Team, Kevin Manaugh, PhD"
          description="Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography. Curbcut 
          presents interactive maps of multiple cities in Canada, offering an in-depth and interactive understanding of urban sustainability.
           Our vision for our predictive map was inspired by the visual and interactive elements of Curbcut. We met with Professor Manaugh to
            discuss the specific features of his website and how we could incorporate similar elements into our project.
          "
          animationDelay="0.5s"
        />
        <ExpertCard
          image={require('../pictures/marie.jpeg')}
          title="Marie Sterlin"
          description="Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development
           and Montreal Diversity. She is also the author of Gentriville, which highlights the negative impacts of gentrification within Montreal.
            We met with her to discuss the social, political, and economic impacts of gentrification and to explore how our tool could be used to
           mitigate these impacts.
          "
          animationDelay="1s"
        />
        <TeamPhoto
          image={require('../pictures/TeamPic.JPG')}
          animationDelay="1.5s"
        />
      </section>
    )},
    { id: 3, 
      title: 'Data Collection and Cleaning', 
      description: `DegentrifAI relies on Census data provided by Statistics Canada[13], spanning the years 1996 to 2021. Census data is compiled
       every five years, and for our analysis, we've gathered data from the following years: 1996, 2001, 2006, 2011, 2016, and 2021.\n

      Census Data Overview:
      Census data encompasses a wide range of statistical insights about the population, including demographics such as age, sex at birth, and
       gender identity, as well as details about dwelling types, familial structures, marital statuses, military service, income distribution, 
       linguistic diversity, Indigenous communities, housing conditions, immigration patterns, citizenship status, ethnic and religious demographics, 
       mobility trends, educational attainment, employment statistics, and commuting behaviors. These metrics are systematically collected through the
        Census Program[14].\n
      
      Level of Analysis: Census Tracts
      DegentrifAI focuses its analysis on the Montreal Census Metropolitan Area (CMA) and utilizes Census tracts as the primary unit of examination.
       A Census Metropolitan Area, or CMA, comprises one or more adjacent municipalities with a collective population exceeding 100,000, with at least
        50,000 residents residing in the core area[15]. Census tracts are relatively small and consistent geographical zones, typically accommodating
         populations ranging from 2,500 to 8,000 individuals[16]. Their delineations are established through collaboration between local stakeholders
          and Statistics Canada, ensuring alignment with enduring physical features and, whenever possible, conforming to established neighborhood boundaries[16].\n
      
      Gentrification measures:
      Drawing on Canadian census data, the authors evaluated various gentrification metrics to determine their efficacy in capturing observed gentrification
       patterns in Canadian urban centers. Our team met with the authors to discuss the census data sets and gentrification measures that we should use.
        After consultation, we decided to use the Ding measure, as it most accurately captures observed gentrification in Canadian cities [12].
        After consulting the GENUINE team, who 
      Ding measures: Gentrifiable, Gentrified, Gentrification Level`, 
      icon: <StorageIcon /> },
    { id: 4, title: 'Model Training', description: 'Detailed information about Model Training', icon: <PrecisionManufacturingIcon /> },
    { id: 5, title: 'Final Prototype', description: 'Detailed information about Final Prototype', icon: <RocketLaunchIcon /> },
    { id: 6, title: 'Future Applications', description: 'Detailed information about Future Applications', icon: <PublicIcon /> },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleIconClick = (step) => {
    setSelectedStep(step);
  };

  return (
    <div className="process-container">
      <div className={`container ${loaded ? 'loaded' : ''}`}>
        <div className="row text-center justify-content-center mb-5"></div>

        <div className="row">
          <div className="col">
            <div className="timeline-steps" data-aos="fade-up">
              {steps.map((step, index) => (
                <TimelineStep
                  key={step.id}
                  step={step}
                  index={index}
                  isSelected={selectedStep && selectedStep.id === step.id}
                  onClick={() => handleIconClick(step)}
                />
              ))}
            </div>
          </div>
        </div>

        {selectedStep && (
          <div className="row mt-5 justify-content-center">
            <div className={`col-lg-8 mission-box animated ${selectedStep.id >= 3 ? 'slideInLeft' : 'slideInRight'}`}>
              {selectedStep.content ? selectedStep.content : (
                <p className="animated fadeIn"><strong>{selectedStep.title}</strong><br />
                {selectedStep.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TimelineStep = ({ step, index, isSelected, onClick }) => (
  <div
    className={`timeline-step animated fadeInUp`}
    style={{ animationDelay: `${index * 0.3}s` }}
    onClick={onClick}
    //style={{ cursor: 'pointer' }}
  >
    <div className={`timeline-content ${isSelected ? 'active' : ''}`}>
      <div className={`icon-container ${isSelected ? 'selected' : ''}`}>{step.icon}</div>
      <p className="h6 mt-3 mb-1 step-title">Step {step.id}</p>
      <p className="h6 text-muted mb-0 mb-lg-0 step-title">{step.title}</p>
    </div>
  </div>
);

const ExpertCard = ({ image, title, description, animationDelay }) => (
  <div className="expert-card animated fadeIn" style={{ animationDelay }}>
    <div className="expert-card-image">
      <img src={image} alt={title} />
    </div>
    {title && description && (
      <div className="expert-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )}
  </div>
);

const TeamPhoto = ({ image, animationDelay }) => (
  <div className="team-photo animated fadeIn" style={{ animationDelay }}>
    <img src={image} alt="Team" />
  </div>
);

export default Process;
