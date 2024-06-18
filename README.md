# degentrificAItion

- Files to move outside frontEnd and backEnd:
.gitignore
README.md (deleted)
docker-compose.yml

- Look at Files (Consensus Data)

- Revert to first push on Backend branch



June 18:
Files to fill out manually:

Backend
1. data/merged_census_data.csv
Description: This is the merged dataset containing census data from 2001, 2006, 2011, 2016, and 2021.
Folder: data
Purpose: Used for preprocessing and model prediction.
2. models/xgboost_model.pkl
Description: This is the trained XGBoost model saved using joblib.
Folder: models
Purpose: Used to make predictions based on the input data.
3. data/heatmap_data.geojson
Description: This GeoJSON file contains geographical data for visualizing the heatmap.
Folder: data
Purpose: Provides the geographical data needed for the heatmap visualization.
Frontend
1. src/components/PredictionForm.jsx
Description: The component that includes the form for users to input data for prediction.
Folder: src/components
Dependencies: The input fields should match the features expected by the backend for prediction.
2. src/components/Heatmap.jsx
Description: The component that renders the heatmap using data fetched from the backend.
Folder: src/components
Dependencies: Fetches data from the /heatmap-data endpoint and renders it on the map.
3. src/pages/Demo.jsx
Description: The page that combines the PredictionForm and Heatmap components.
Folder: src/pages
Dependencies: Integrates both components for the demo page.