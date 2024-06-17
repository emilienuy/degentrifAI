import "../styles/Demo.scss";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Slider from "@mui/material/Slider";

const Demo = () => {
  const [year, setYear] = useState(2024);
  const [geoData, setGeoData] = useState(null);
  const geoJsonLayerRef = useRef(null); // Create a ref for the GeoJSON layer

  useEffect(() => {
    axios
      .get(`http://localhost:8000/data/${year}`)
      .then((response) => {
        console.log(response.data); // Log the response data
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
    const risk = feature.properties?.gentrification_risk; // Use optional chaining
    console.log('Feature:', feature); 
    if (risk === undefined) {
      console.error("gentrification_risk is undefined for feature", feature);
      return {
        fillColor: "#FFEDA0", // Default color for undefined risk
        weight: 2,
        opacity: 0.5,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.2,
      };
    }

    return {
      fillColor: getColor(risk),
      weight: 2,
      opacity: 0.5,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.5,
    };
  };

  useEffect(() => {
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.clearLayers(); // Clear the existing layers
      geoJsonLayerRef.current.addData(geoData); // Add new data
    }
  }, [geoData]); // Update whenever geoData changes

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
        {geoData && (
          <GeoJSON 
            data={geoData} 
            style={style} 
            onEachFeature={(feature, layer) => {
              layer.bindPopup(`<strong>Tract ID:</strong> ${feature.properties.tract_id}<br><strong>Risk:</strong> ${feature.properties.gentrification_risk}`);
            }} 
            ref={geoJsonLayerRef} // Attach the ref to the GeoJSON layer
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Demo;
