# DegentrifAI – Predicting Gentrification Risk with Machine Learning
🔗 **Live interactive map:** https://degentrifai.netlify.app/  
🔗 **Project website (full methodology & documentation):** https://degentrifai.netlify.app/about  
🔗 **GitHub repository:** https://github.com/emilienuy/degentrificAItion

## Overview
DegentrifAI was developed during the **AI4Good Lab**, a competitive 7-week program at **Mila – Quebec AI Institute**, where I was one of 25 participants selected from Montreal. After four weeks of intensive ML workshops taught by researchers including **Dr. Doina Precup** (Google DeepMind), our team built an interactive tool that predicts **gentrification risk** across Montreal neighborhoods.

**Team:** Emily Hong, Nastaran Alizade, Luth Gallemaso, Yutong Quan, and Emilie Nuyttens

Our goal was to create a responsible, interpretable model grounded in social context, integrating academic research, census analysis, community perspectives, and machine learning.

## Methodology (High-Level)

### **1. Literature Review**
We surveyed global studies using ML for gentrification prediction (Sydney, Mexico City, London, Ottawa, US cities) and identified a gap:  
**no predictive ML model had ever been built for Montreal.**

### **2. Expert Consultation**
We met with:
- **GENUINE Team** (authors of Canada's gentrification mapping paper)  
- **Prof. Kevin Manaugh (McGill)** – creator of Curbcut  
- **Marie Sterlin** – Montreal Borough Councillor & author of *Gentriville*  
- Montreal community organizations & urban researchers  

These consultations guided our census feature selection and ethical considerations.

### **3. Data Collection & Processing**
DegentrifAI uses **Statistics Canada Census data (1996–2021)** across 6 census cycles.

We analyzed:
- demographics  
- housing  
- income  
- mobility & commuting  
- education  
- linguistic & cultural data  
- dwelling types  
- population changes  

**Geographic unit:** Census Tracts within the Montreal CMA.

### **4. Gentrification Measure (Ding Index)**
With guidance from the GENUINE team, we adopted the **Ding et al. measure**, defining:
- **Gentrifiable** neighborhoods  
- **Gentrified** neighborhoods  
- **Gentrification severity** (Weak / Moderate / Intense)

### **5. Model Training**
We trained three **XGBoost classifiers** to predict:
- gentrifiable  
- gentrified  
- severity level  

**Validation (2021 predictions):**
- Gentrifiable: **0.97**  
- Gentrified: **0.85**  
- Severity: **0.79**  

We then predicted gentrification outcomes for **2026**.

### **6. Interactive Map**
We used:
- **geopandas** & **shapely** for geospatial extraction  
- **React, HTML, CSS** for frontend  
- Deployed on **Netlify**

The map displays census tract boundaries with predicted classifications for 2026.

## Data Sources & Credits
- **Statistics Canada Census Data (1996–2021)**  
  https://www150.statcan.gc.ca/n1/en/catalogue/82-003-X202100500002
- **Gentrification Measures & Census Processing Code by Benoit Thierry**  
  Used with permission to compute gentrification indicators and preprocess census variables.
- Literature sources and global gentrification ML papers (full citations available on project website).

## Tech Stack
**Machine Learning:** XGBoost, scikit-learn  
**Data:** pandas, geopandas, shapely  
**Visualization:** React, Leaflet/folium  
**Deployment:** Netlify  
**Documentation:** HTML/CSS, React site

## Project Status
We are currently collaborating with urban studies researchers to expand DegentrifAI into a **peer-reviewed scientific publication**, and exploring opportunities to scale the tool to other Canadian cities.

## Acknowledgements
Created during the **AI4Good Lab (Mila, 2024)** by:  
**Emily Hong, Nastaran Alizade, Luth Gallemaso, Yutong Quan, and Emilie Nuyttens**

With guidance and support from:  
- Researchers, policymakers, and community partners  
- GENUINE team  
- Prof. Kevin Manaugh (McGill)  
- Marie Sterlin (Montreal City Councillor)
