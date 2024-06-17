// src/pages/Demo.jsx
import "../styles/Demo.scss";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Slider from "@mui/material/Slider";

const Demo = () => {
  const [year, setYear] = useState(2024);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/data/${year}`)
      .then((response) => {
        setGeoData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [year]);

  const handleYearChange = (event, newValue) => {
    setYear(newValue);
  };

  const getColor = (risk) => {
    return risk > 0.75
      ? "#800026"
      : risk > 0.5
      ? "#BD0026"
      : risk > 0.25
      ? "#E31A1C"
      : "#FFEDA0";
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.gentrification_risk),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  return (
    <div>
      <Slider
        value={year}
        min={2001}
        max={2034}
        onChange={handleYearChange}
        valueLabelDisplay="auto"
      />
      <MapContainer
        center={[45.5017, -73.5673]}
        zoom={12}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {geoData && <GeoJSON data={geoData} style={style} />}
      </MapContainer>
    </div>
  );
};

export default Demo;
