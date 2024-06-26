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

  const overviewSummary = [
    "DegentrifAI was built by a group of 5 machine learning fellows in the AI4Good Lab at Mila. The AI4Good Lab is a 7-week program that equips women and gender diverse people with the skills to build their own machine learning projects.",
    "Spanning from a diverse set of educational backgrounds, we, the DegentrifAI team, conceptualized and built our project prototype within the span of 3 weeks. To accomplish this, we engaged in insightful ethical discussions, collaborated with field experts, and leveraged our teammate, TA, and mentor’s skill sets in the following manner."
  ];

  const steps = [
    {
      id: 1, title: 'Literature Review', description: [
        "In the initial phase of our project, we embarked on a comprehensive literature review encompassing studies on gentrification, urban renewal, and prior initiatives integrating machine learning with gentrification analysis. Our aim was to acquire a thorough understanding of the social, geographical, economic, and political dimensions of gentrification and its interface with artificial intelligence (AI).",
        "The use of machine learning techniques for gentrification prediction has been documented in various global contexts, including Sydney [1], Mexico City [2], London [3], Ottawa [4], numerous cities across the US [5], [6], [7], [8], [9]. Each study we surveyed employed distinct data measures for prediction, ranging from analyzing housing price trends [9] to harnessing Google Earth satellite imagery [6]. Additionally, a variety of machine learning models were employed, such as logistic regression to classify neighborhoods [7] and Natural Language Processing (NLP) for classifying Airbnb reviews [10].",
        "Through our review, we identified an opportunity to develop a novel predictive model tailored to the unique dynamics of gentrification in Montreal, a venture not previously undertaken in the city."
      ],
      icon: <FindInPageIcon />
    },
    { id: 2, title: 'Expert Consultation', description: '', icon: <HandshakeIcon />, content: (
      <section className="expert-consultation-section horizontal">
        <ExpertCard
          image={require('../pictures/statistics.png')}
          title="GENUINE Team"
          description="Our decision-making process was further informed by insights from the GENUINE paper, which offers a map-based gentrification tool designed specifically for Canadian metropolitan areas [11]. Drawing on Canadian census data, the authors evaluated various gentrification metrics to determine their efficacy in capturing observed gentrification patterns in Canadian urban centers. Our team met with the authors to discuss the census data sets and gentrification measures that would be crucial for predicting gentrification in Montreal, which we discuss in the next section “Data collection and cleaning”."
          animationDelay="0s"
        />
        <ExpertCard
          image={require('../pictures/Kevin.jpeg')}
          title="Curbcut Team, Kevin Manaugh, PhD"
          description="Impressed by his website, Curbcut, we reached out to Professor Kevin Manaugh, a McGill Professor in Geography. Curbcut presents interactive maps of multiple cities in Canada, offering an in-depth and interactive understanding of urban sustainability. Our vision for our predictive map was inspired by the visual and interactive elements of Curbcut. We met with Professor Manaugh to discuss the specific features of his website and how we could incorporate similar elements into our project."
          animationDelay="0.5s"
        />
        <ExpertCard
          image={require('../pictures/marie.jpeg')}
          title="Marie Sterlin"
          description="Marie Sterlin works for the city of Montreal as a Borough Councillor and a member of the Commission on Social Development and Montreal Diversity. She is also the author of Gentriville, which highlights the negative impacts of gentrification within Montreal. We met with her to discuss the social, political, and economic impacts of gentrification and to explore how our tool could be used to mitigate these impacts."
          animationDelay="1s"
        />
        <TeamPhoto
          image={require('../pictures/TeamPic.JPG')}
          animationDelay="1.5s"
        />
      </section>
    )},
    {
      id: 3,
      title: 'Data Collection and Cleaning',
      description: [
        "DegentrifAI relies on Census data provided by Statistics Canada[13], spanning the years 1996 to 2021. Census data is compiled every five years, and for our analysis, we've gathered data from the following years: 1996, 2001, 2006, 2011, 2016, and 2021.",
        "<b>Census Data Overview:</b>",
        "Census data encompasses a wide range of statistical insights about the population, including demographics such as age, sex at birth, and gender identity, as well as details about dwelling types, familial structures, marital statuses, military service, income distribution, linguistic diversity, Indigenous communities, housing conditions, immigration patterns, citizenship status, ethnic and religious demographics, mobility trends, educational attainment, employment statistics, and commuting behaviors. These metrics are systematically collected through the Census Program[14].",
        "<b>Level of Analysis: Census Tracts</b>",
        "DegentrifAI focuses its analysis on the Montreal Census Metropolitan Area (CMA) and utilizes Census tracts as the primary unit of examination. A Census Metropolitan Area, or CMA, comprises one or more adjacent municipalities with a collective population exceeding 100,000, with at least 50,000 residents residing in the core area[15]. Census tracts are relatively small and consistent geographical zones, typically accommodating populations ranging from 2,500 to 8,000 individuals[16]. Their delineations are established through collaboration between local stakeholders and Statistics Canada, ensuring alignment with enduring physical features and, whenever possible, conforming to established neighborhood boundaries[16].",
        "<b>Ding Gentrification Measures:</b>",
        "Gentrification is often measured through changes in neighborhood features, in housing, and in the composition of residents over time [11]. The GENUINE team evaluated four different gentrification measures to determine their effectiveness in capturing observed gentrification patterns in Canadian cities. DegentrifAI met with the authors to decide which measure to use for training our model. After consultation, we chose the Ding measure, as we have found it to most accurately reflect observed gentrification in Canadian cities [11].",
        "<b>The Ding gentrification index is defined by the following three measures [16]:</b>",
        "1. <b>Gentrifiable:</b> A neighborhood is gentrifiable if the median household income is below that of the city.",
        "2. <b>Gentrified:</b> A neighborhood is gentrified if:",
        "   a. The increase in median gross rent or median home value since the previous census is greater than the citywide increase.",
        "   b. The increase in proportion of university-educated residents since the previous census is greater than the citywide increase.",
        "3. <b>Gentrification Severity:</b>",
        "   a. <b>Weak:</b> Rent or housing values increased below the 25th percentile since the previous census.",
        "   b. <b>Moderate:</b> Rent or housing values increased to between the 25th and 75th percentile.",
        "   c. <b>Intense:</b> Rent or housing values increased above the 75th percentile."
      ],
      icon: <StorageIcon />
    },
    {
      id: 4,
      title: 'Model Training',
      description: [
        "After conducting our literature review, engaging in expert consultation, and performing census data analysis, the DegentrifAI team employed XGBoost, an optimized distributed gradient boosting library, to predict gentrification patterns [17]. XGBoost is a powerful classification algorithm designed for handling large datasets with high predictive accuracy [17]. To develop our classifier, we focused on predicting the classification of each neighborhood within Montreal according to the three Ding measures: gentrifiable, gentrified, and the severity of gentrification by 2026. The training process involved several key steps:",
        "<b>Important Feature Selection:</b> We first used XGBoost to select the important features needed to train our model accurately for predicting gentrification in 2026. Initially, we trained the XGBoost model to classify census tracts into the three Ding measures for 2021. We used all the census data we collected, excluding the specific features that directly influenced the Ding measure being predicted (e.g., housing income when the target predictor was the gentrifiable Ding measure). This process helped us identify the key features for predicting each Ding measure, allowing us to narrow down our dataset. We then selected the most significant variables that influence gentrification, such as housing costs, education levels, income distribution, and demographic changes. Ultimately, we reduced our dataset to 29 variables per year. This feature selection process ensured the model was trained on the most relevant data points. Additionally, since census questions can vary slightly each year, this approach ensured that equivalent important features were consistently used across all years.",
        '<img src="' + require('../pictures/graph_1.png') + '" alt="Graph 1" />',
        '<img src="' + require('../pictures/graph_2.png') + '" alt="Graph 2" />',
        '<img src="' + require('../pictures/graph_3.png') + '" alt="Graph 3" />',
        "<b>Model Training:</b> Using the features identified in step 2, we trained our model with data from 2001 to 2016 to predict Ding measures for 2021. Three XGBoost models were trained to classify census tracts into the three Ding measures: gentrifiable, gentrified, and gentrification severity/level (weak, moderate, or intense).",
        "Below are the model’s accuracy scores for 2021 predictions:",
        "<b>Gentrifiable:</b> 0.97",
        "<b>Gentrified:</b> 0.85",
        "<b>Level:</b> 0.79",
        "<b>Prediction:</b> Using the trained model, we predicted the gentrification status of neighborhoods in Montreal for the year 2026. To do so, we now utilized census data from 2006 to 2021 exclusively, mimicking the same number of years used in the initial model training step."
      ],
      icon: <PrecisionManufacturingIcon />
    },
    {
      id: 5,
      title: 'Final Prototype',
      description: [
        `We obtained Montreal Census Metropolitan Area (2021) census tract coordinates and shapes through Statistics Canada’s census boundary files. Using geopandas and shapely.geometry libraries in Python, we extracted census ArcGIS geodatabase polygons and transformed the geographical data into longitude and latitude coordinates for each tract. We then merged each corresponding census tract ID (CTUID) with its corresponding coordinates and three Ding classification measures (gentrifiable, gentrified, and gentrification severity). This finalized data ws packaged into a geojson file and visualized onto our web application, which was built and tested on a local server using React, HTML and CSS before being deployed as the prototype you are currently viewing.`
      ],
      icon: <RocketLaunchIcon /> 
    },
    {
      id: 6,
      title: 'Future Applications',
      description: [
        'At DegentrifAI, we are committed to expanding our impact and enhancing our tool to better serve the communities of Montreal and beyond. Our prototype represents a first step in the right direction, driving data-informed awareness on gentrification. Degentrify is founded on the philosophy of engaged activism and social good. Here are some key areas we aim to focus on for future growth:',
        '<b>(1) Stakeholder Collaboration:</b>',
        '<b>Strengthening Community Relationships:</b> We intend on engaging more directly and intimately with local community organizations and NGOs to better understand their needs and integrate their feedback into our tool. Doing so will ensure that we are directly catering to the evolving needs of Montreal neighborhoods. In addition to consulting co-op associations from the FHCQ in montreal, some organizations we hope to reach out to in our next phase of development include:',
        '<b>Centraide of Greater Montreal:</b>Centraide raises and invests funds locally to break the cycle of poverty and social exclusion in Montreal. They collaborate directly with Montreal’s community organizations to address poverty and exclusion in neighborhoods, cities, and villages across Greater Montreal [18]. ',
        '<b>Neighborhood Tables (Tables de Quartier):</b>We hope to work with Montreal’s Neighborhood Tables, particularly in areas vulnerable to gentrification such as Parc-Extension and Saint-Michel. These neighbourhood specialized non-profit organizations bring together local stakeholders to reduce inequalities, poverty, and social exclusion, improving the quality of life in their communities [19].',
        '<b>Parc-Ex Contre La Gentrification:</b>Known as one of Montreal’s most active and prolific activist organizations fighting gentrification and unjust evictions, Parc-Ex Contre La Gentrification (Parc-Ex dans la rue) are a grassroots movement deeply ingrained in Parc-Extension’s community. Currenty in the process of outreach, we hope to collaborate and integrate their expert input into degentrifAI, identifying how our platform can help activists.',
        '<b>Policy Development:</b> Continue fostering relationships with local government representatives such as Marie Sterlin, exploring how DegentrifAI can help inform housing and development legislation. Engage in discussions with the City of Montreal on utilizing our tool to mitigate the negative effects of gentrification in their neighborhoods, helping to inform policy decisions and urban planning strategies.',
        '<b>Research and Innovation:</b> work with universities, researchers, and professors in Montreal investigating urban renewal to improve our understanding of gentrification.',
        '<b>GENUINE Team and Statistics Canada:</b> Partner with these organizations to enhance the accuracy and scope of our data, potentially expanding DegentrifAI to a national scale encompassing other large cities in Canada.',
        '<b>Mila (Quebec Artificial Intelligence Institute):</b> Collaborate on the AI component of our project, further increasing our model’s accuracy and inclusivity.',
        '<b>Urban Renewal Researchers:</b> Continue working with experts such as Professor Kevin Manaugh at McGill and organizations such as Curbcut to deepen our understanding of gentrification measures.',
        '<b>(2) Improving Website Accessibility:</b> Enhance degentrifAI’s user interface accessibility, specifically for the visually impaired or colorblind by integrating area labels into our front end navigation system. Make our platform available in French and other languages to reach a broader and more inclusive audience, expanding from the initial development under the AI4Good program.',
        '<b>(3) Advanced Technologies:</b> Enrich our data: incorporate more varied and granular data that serves as novel indicators for gentrification, such as satellite imagery, Airbnb reviews, business locations, educational and hospital facilities, as well as transportation information (e.g., bike lanes, bus routes). Model Improvements: Develop a multimodal model for enhanced accuracy.',
        '<b>CNNs for Satellite Data:</b> Utilize Convolutional Neural Networks (CNNs) to analyze satellite imagery, providing detailed information on green spaces, construction activities, and other relevant features. This data could help us understand the physical changes occurring in neighborhoods and their potential impact on gentrification.',
        '<b>NLP for Reviews:</b> Implement Natural Language Processing (NLPs) to analyze Airbnb reviews, extracting insights on word trends and sentiments associated with gentrified neighborhoods. This analysis can reveal how residents and visitors perceive changes in the area, adding a qualitative dimension to our understanding of gentrification.'
      ],
      icon: <PublicIcon /> 
    },
  ];

  useEffect(() => {
    setLoaded(true);
    setSelectedStep({ title: 'Overview Summary', description: overviewSummary });
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
                <div className="animated fadeIn">
                  <strong>{selectedStep.title}</strong>
                  {selectedStep.description.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
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
