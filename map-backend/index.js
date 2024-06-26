// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 8000;

// app.use(cors());

// const loadGeoJsonForYear = (year) => {
//   const filePath = path.resolve('/Users/luthgallemaso/data.geojson');
//   console.log(`Loading GeoJSON data from: ${filePath}`);
//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File not found: ${filePath}`);
//   }
//   const geoData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//   const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);
//   return {
//     type: 'FeatureCollection',
//     features: filteredFeatures
//   };
// };

// app.get('/data/:year', (req, res) => {
//   const year = parseInt(req.params.year);
//   console.log(`Received request for year ${year}`);
//   try {
//     const data = loadGeoJsonForYear(year);
//     res.json(data);
//     console.log(`Sent data for year ${year}`);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

//-------------------------------------------------

//undefined neighbourhood
// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const csv = require('csv-parser');
// const app = express();
// const port = 8000;

// app.use(cors());

// let neighborhoodMapping = {};

// // Load CSV and create mapping
// const loadCsvData = () => {
//   const csvFilePath = path.resolve('/path/to/combineddata.csv');
//   return new Promise((resolve, reject) => {
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         neighborhoodMapping[row.CTUID] = row.name_1;
//       })
//       .on('end', () => {
//         console.log('CSV file successfully processed');
//         resolve();
//       })
//       .on('error', (error) => {
//         console.error('Error reading CSV file:', error);
//         reject(error);
//       });
//   });
// };

// const loadGeoJsonForYear = (year) => {
//   const filePath = path.resolve('/path/to/data.geojson');
//   console.log(`Loading GeoJSON data from: ${filePath}`);
//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File not found: ${filePath}`);
//   }
//   const geoData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//   const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);

//   // Add neighborhood names from CSV mapping
//   filteredFeatures.forEach(feature => {
//     const ctuid = feature.properties.tract_id;
//     feature.properties.neighborhood_name = neighborhoodMapping[ctuid] || 'Unknown';
//   });

//   return {
//     type: 'FeatureCollection',
//     features: filteredFeatures
//   };
// };

// app.get('/data/:year', async (req, res) => {
//   const year = parseInt(req.params.year);
//   console.log(`Received request for year ${year}`);
//   try {
//     await loadCsvData();
//     const data = loadGeoJsonForYear(year);
//     res.json(data);
//     console.log(`Sent data for year ${year}`);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

//--------------------------------------------------------------
// works
//-------------------------------------------------
// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const csv = require('csv-parser');
// const app = express();
// const port = 8000;

// app.use(cors());

// let neighborhoodMapping = {};

// // Load CSV and create mapping
// const loadCsvData = () => {
//   const csvFilePath = path.resolve('/path/to/combineddata.csv');
//   return new Promise((resolve, reject) => {
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         neighborhoodMapping[row.CTUID] = row.name_1;
//       })
//       .on('end', () => {
//         console.log('CSV file successfully processed');
//         resolve();
//       })
//       .on('error', (error) => {
//         console.error('Error reading CSV file:', error);
//         reject(error);
//       });
//   });
// };

// // Load GeoJSON data and merge with neighborhood names
// const loadGeoJsonForYear = (year) => {
//   const filePath = path.resolve('/path/to/data.geojson');
//   console.log(`Loading GeoJSON data from: ${filePath}`);
//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File not found: ${filePath}`);
//   }
//   const geoData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//   const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);

//   // Add neighborhood names from CSV mapping
//   filteredFeatures.forEach(feature => {
//     const ctuid = feature.properties.tract_id;
//     feature.properties.neighborhood_name = neighborhoodMapping[ctuid] || 'Unknown';
//   });

//   return {
//     type: 'FeatureCollection',
//     features: filteredFeatures
//   };
// };

// app.get('/data/:year', async (req, res) => {
//   const year = parseInt(req.params.year);
//   console.log(`Received request for year ${year}`);
//   try {
//     await loadCsvData(); // Ensure CSV data is loaded
//     const data = loadGeoJsonForYear(year);
//     res.json(data);
//     console.log(`Sent data for year ${year}`);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const fetch = require('node-fetch');
const app = express();
const port = 8000;

app.use(cors());

let neighborhoodMapping = {};

// Load CSV and create mapping
const loadCsvData = () => {
  const csvFilePath = path.resolve('/path/to/combineddata.csv');
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        neighborhoodMapping[row.CTUID] = row.name_1;
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        console.error('Error reading CSV file:', error);
        reject(error);
      });
  });
};

// Load GeoJSON data from DigitalOcean Space and merge with neighborhood names
const loadGeoJsonForYear = async (year) => {
  const geoJsonUrl = 'https://nuynuy.nyc3.digitaloceanspaces.com/data.geojson';
  console.log(`Loading GeoJSON data from: ${geoJsonUrl}`);
  
  const response = await fetch(geoJsonUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch GeoJSON data: ${response.statusText}`);
  }
  const geoData = await response.json();
  const filteredFeatures = geoData.features.filter(feature => feature.properties.year === year);

  // Add neighborhood names from CSV mapping
  filteredFeatures.forEach(feature => {
    const ctuid = feature.properties.tract_id;
    feature.properties.neighborhood_name = neighborhoodMapping[ctuid] || 'Unknown';
  });

  return {
    type: 'FeatureCollection',
    features: filteredFeatures
  };
};

app.get('/data/:year', async (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`Received request for year ${year}`);
  try {
    await loadCsvData(); // Ensure CSV data is loaded
    const data = await loadGeoJsonForYear(year);
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

