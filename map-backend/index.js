import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 8000;

// Convert __dirname to work in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

// Load the coordinates data once
const coordinatesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'COORDS_data.geojson'), 'utf8'));

const loadYearlyData = (year) => {
  const yearlyData = JSON.parse(fs.readFileSync(path.join(__dirname, 'DING_data.geojson'), 'utf8'));
  const filteredFeatures = yearlyData.features.filter(feature => feature.properties.year === year);
  return {
    type: 'FeatureCollection',
    features: filteredFeatures
  };
};

app.get('/coordinates', (req, res) => {
  res.json(coordinatesData);
  console.log('Sent coordinates data');
});

app.get('/data/:year', (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`Received request for year ${year}`);
  const data = loadYearlyData(year);
  res.json(data);
  console.log(`Sent data for year ${year}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
