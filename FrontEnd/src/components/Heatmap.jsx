// src/components/Heatmap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    fetch("/heatmap-data")
      .then(response => response.json())
      .then(data => setHeatmapData(data.heatmap_data));
  }, []);

  return (
    <MapContainer center={[45.523, -73.5815]} zoom={13} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {heatmapData.map((feature, idx) => (
        <Polygon key={idx} positions={feature.geometry.coordinates[0]} />
      ))}
    </MapContainer>
  );
};

export default Heatmap;
