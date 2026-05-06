# DegentrifAI – Predicting Gentrification Risk with Machine Learning

🔗 **Live Tool:** [degentrifai.netlify.app](https://degentrifai.netlify.app/)  
🔗 **Full Documentation:** [Project Website](https://degentrifai.netlify.app/about)

Interactive tool predicting neighborhood gentrification risk across Montreal using 25 years of census data and machine learning.

---

## Overview

Built during the **AI4Good Lab** at **Mila – Quebec AI Institute** (7-week competitive program, 25 participants selected). Our team created the first ML-based gentrification prediction model specifically for Montreal, consulting urban researchers, policymakers, and community organizations to ensure responsible model design.

**Team:** Emily Hong, Nastaran Alizade, Luth Gallemaso, Yutong Quan, Emilie Nuyttens

---

## Approach

### Data & Features
- **Statistics Canada Census data (1996–2021)** across 6 cycles
- Montreal Census Tracts analyzed for: demographics, housing costs, income, mobility, education, cultural indicators, dwelling types
- Consulted with GENUINE team, Prof. Kevin Manaugh (McGill), and Marie Sterlin (Montreal Borough Councillor) for feature selection

### Gentrification Measure
Implemented the **Ding et al. measure** to classify neighborhoods as:
- Gentrifiable
- Gentrified (Weak / Moderate / Intense severity)

### Model
Three **XGBoost classifiers** trained on historical data to predict gentrification status.

**2021 Validation Accuracy:**
- Gentrifiable: **0.97**
- Gentrified: **0.85**
- Severity: **0.79**

Model forecasts neighborhood risk for **2026**.

---

## Interactive Map

React-based web application displaying:
- Census tract boundaries
- Predicted gentrification classifications
- Interactive exploration of Montreal neighborhoods

**Tech Stack:**
- ML: XGBoost, scikit-learn
- Geospatial: geopandas, shapely
- Frontend: React, Leaflet
- Deployment: Netlify

---

## Impact

Addressing a research gap: **no predictive gentrification model existed for Montreal** despite extensive international work. This tool enables:
- Policymakers to identify at-risk neighborhoods early
- Community organizations to target intervention efforts
- Researchers to study urban displacement patterns

We are currently working with urban studies researchers to expand this into a **peer-reviewed publication** and scale to other Canadian cities.

---

## Key Insights

From our research and stakeholder consultations:
- Gentrification is a **complex socio-economic process**, not reducible to simple housing price increases
- **Feature selection matters**: chose indicators reflecting displacement mechanisms (income change, housing affordability, demographic shifts) rather than proxies
- **Model interpretability is critical**: urban planners need to understand *why* a neighborhood is flagged, not just *that* it is

---

## Data Sources

- **Statistics Canada Census (1996–2021)**: [StatCan Catalogue](https://www150.statcan.gc.ca/n1/en/catalogue/82-003-X202100500002)
- **Gentrification measures & preprocessing** by Benoit Thierry (GENUINE team), used with permission
- Literature review spanning global gentrification ML studies (Sydney, Mexico City, London, Ottawa, US cities)

Full citations and methodology available on the [project website](https://degentrifai.netlify.app/about).

---

## Acknowledgements

Created during **AI4Good Lab (Mila, 2024)** with guidance from:
- **GENUINE Team** – gentrification measurement methodology
- **Prof. Kevin Manaugh** (McGill) – urban planning context
- **Marie Sterlin** (Montreal Borough Councillor) – community & policy perspectives

---

## Academic Context

This project demonstrates:
- Responsible AI development through stakeholder engagement
- Geospatial ML and time-series census analysis
- Deployment of interactive data tools for public use
- Collaboration across ML, urban studies, and policy domains

Developed as part of the AI4Good Lab Fellowship at Mila – Quebec Artificial Intelligence Institute.
