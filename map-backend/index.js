const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

// Mock data loading function
const loadGeoJsonForYear = (year) => {
  // Load or generate your GeoJSON data here
  return {
    type: "FeatureCollection",
    features: [
      // Mock feature
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.5815, 45.523],
              [-73.5815, 45.5275],
              [-73.576, 45.5275],
              [-73.576, 45.523],
              [-73.5815, 45.523],
            ],
          ],
        },
        properties: {
          tract_id: "123456",
          year: 2005,
          gentrification_risk: 1.0, // Random risk value for demonstration
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.5815, 45.523],
              [-73.5815, 45.5275],
              [-73.576, 45.5275],
              [-73.576, 45.523],
              [-73.5815, 45.523],
            ],
          ],
        },
        properties: {
          tract_id: "123456",
          year: 2010,
          gentrification_risk: 0., // Random risk value for demonstration
        },
      }
    ],
  };
};

app.get("/data/:year", (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`Received request for year ${year}`);
  const data = loadGeoJsonForYear(year);
  const gen = parseInt(req.params.gentrification_risk)
  console.log(`index collected ${gen}}`);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
