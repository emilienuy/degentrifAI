const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

app.use(cors());

const loadGeoJsonForYear = (year) => {
  const geoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.geojson'), 'utf8'));
  const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);
  return {
    type: 'FeatureCollection',
    features: filteredFeatures
  };
};

app.get('/data/:year', (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`Received request for year ${year}`);
  const data = loadGeoJsonForYear(year);
  res.json(data);
  console.log(`Sent data for year ${year}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
