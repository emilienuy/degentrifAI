// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 8000;

// app.use(cors());

// const loadGeoJsonForYear = (year) => {
//   const geoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.geojson'), 'utf8'));
//   const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);
//   return {
//     type: 'FeatureCollection',
//     features: filteredFeatures
//   };
// };

// app.get('/data/:year', (req, res) => {
//   const year = parseInt(req.params.year);
//   console.log(`Received request for year ${year}`);
//   const data = loadGeoJsonForYear(year);
//   res.json(data);
//   console.log(`Sent data for year ${year}`);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 8000;

// app.use(cors());

// const loadGeoJsonForYear = (year) => {
//   const geoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.geojson'), 'utf8'));
//   const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);
//   return {
//     type: 'FeatureCollection',
//     features: filteredFeatures
//   };
// };

// app.get('/data/:year', (req, res) => {
//   const year = parseInt(req.params.year);
//   console.log(`Received request for year ${year}`);
//   const data = loadGeoJsonForYear(year);
//   res.json(data);
//   console.log(`Sent data for year ${year}`);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

app.use(cors());

const loadGeoJsonForYear = (year) => {
  // Specify the absolute path to the data.geojson file
  const filePath = path.resolve('/Users/luthgallemaso/data.geojson');
  console.log(`Loading GeoJSON data from: ${filePath}`);
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  
  const geoData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);
  return {
    type: 'FeatureCollection',
    features: filteredFeatures
  };
};

app.get('/data/:year', (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`Received request for year ${year}`);
  try {
    const data = loadGeoJsonForYear(year);
    res.json(data);
    console.log(`Sent data for year ${year}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
