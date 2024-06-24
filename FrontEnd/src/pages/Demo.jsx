// import "../styles/Demo.scss";
// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import Slider from "@mui/material/Slider";

// const Demo = () => {
//   const [year, setYear] = useState(2024);
//   const [geoData, setGeoData] = useState(null);
//   const geoJsonLayerRef = useRef(null); // Create a ref for the GeoJSON layer

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/data/${year}`)
//       .then((response) => {
//         console.log(response.data); // Log the response data
//         setGeoData(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, [year]);

//   const handleYearChange = (event, newValue) => {
//     setYear(newValue);
//   };

//   const getColor = (risk) => {
//     return risk > 0.75
//       ? "#800026"
//       : risk > 0.5
//       ? "#BD0026"
//       : risk > 0.25
//       ? "#E31A1C"
//       : "#FFEDA0";
//   };

//   const style = (feature) => {
//     const risk = feature.properties?.gentrification_risk; // Use optional chaining
//     console.log('Feature:', feature); 
//     if (risk === undefined) {
//       console.error("gentrification_risk is undefined for feature", feature);
//       return {
//         fillColor: "#FFEDA0", // Default color for undefined risk
//         weight: 2,
//         opacity: 0.5,
//         color: "white",
//         dashArray: "3",
//         fillOpacity: 0.2,
//       };
//     }

//     return {
//       fillColor: getColor(risk),
//       weight: 2,
//       opacity: 0.5,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.5,
//     };
//   };

//   useEffect(() => {
//     if (geoJsonLayerRef.current) {
//       geoJsonLayerRef.current.clearLayers(); // Clear the existing layers
//       geoJsonLayerRef.current.addData(geoData); // Add new data
//     }
//   }, [geoData]); // Update whenever geoData changes

//   return (
//     <div>
//       <Slider
//         value={year}
//         min={2001}
//         max={2034}
//         onChange={handleYearChange}
//         valueLabelDisplay="auto"
//       />
//       <MapContainer
//         center={[45.5017, -73.5673]}
//         zoom={12}
//         style={{ height: "600px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//         />
//         {geoData && (
//           <GeoJSON 
//             data={geoData} 
//             style={style} 
//             onEachFeature={(feature, layer) => {
//               layer.bindPopup(`<strong>Tract ID:</strong> ${feature.properties.tract_id}<br><strong>Risk:</strong> ${feature.properties.gentrification_risk}`);
//             }} 
//             ref={geoJsonLayerRef} // Attach the ref to the GeoJSON layer
//           />
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default Demo;

// import "../styles/Demo.scss";
// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import Slider from "@mui/material/Slider";

// const Demo = () => {
//   const [year, setYear] = useState(2021);
//   const [geoData, setGeoData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const geoJsonLayerRef = useRef(null);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:8000/data/${year}`)
//       .then((response) => {
//         console.log(`GeoJSON Data for ${year}:`, response.data);
//         setGeoData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(`There was an error fetching the data for ${year}!`, error);
//         setLoading(false);
//       });
//   }, [year]);

//   const handleYearChange = (event, newValue) => {
//     setYear(newValue);
//   };

//   const getColor = (gentrified, gentrifiable) => {
//     // Convert 1/0 to true/false if necessary
//     gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
//     gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;

//     if (gentrified === null || gentrifiable === null) {
//       return "#808080"; // Grey for null values
//     }
//     if (gentrified === true && gentrifiable === true) {
//       return "#BD0026"; // Darkest red
//     }
//     if (gentrified === false && gentrifiable === true) {
//       return "#fe901f"; // Second darkest shade of red
//     }
//     if (gentrified === true && gentrifiable === false) {
//       return "#fe901f"; // Third darkest shade of red
//     }
//     if (gentrified === false && gentrifiable === false) {
//       return "#FFEDA0"; // Lightest shade of red
//     }
//     return "#808080"; // Default grey
//   };

//   const style = (feature) => {
//     let gentrified = feature.properties?.gentrified;
//     let gentrifiable = feature.properties?.gentrifiable;

//     // Convert 1/0 to true/false if necessary
//     gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
//     gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;

//     return {
//       fillColor: getColor(gentrified, gentrifiable),
//       weight: 2,
//       opacity: 1,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.7,
//     };
//   };

//   const onEachFeature = (feature, layer) => {
//     if (!feature.geometry || !feature.geometry.coordinates) {
//       console.warn("Invalid feature:", feature);
//       return;
//     }

//     let gentrified = feature.properties?.gentrified;
//     let gentrifiable = feature.properties?.gentrifiable;
//     const gentrification_level = feature.properties?.gentrification_level;

//     // Convert 1/0 to true/false if necessary
//     gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
//     gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;

//     const popupContent = `
//       <div>
//         <p>Gentrified: ${gentrified !== null ? gentrified : "Gentrified is null"}</p>
//         <p>Gentrifiable: ${gentrifiable !== null ? gentrifiable : "Gentrifiable is null"}</p>
//         <p>Gentrification Level: ${gentrification_level !== null ? gentrification_level : "Gentrification level is null"}</p>
//       </div>
//     `;

//     layer.bindPopup(popupContent);
//   };

//   useEffect(() => {
//     if (geoJsonLayerRef.current && geoData && !loading) {
//       geoJsonLayerRef.current.clearLayers(); // Clear the existing layers
//       geoJsonLayerRef.current.addData(geoData); // Add new data
//     }
//   }, [geoData, loading]); // Update whenever geoData changes

//   const marks = [
//     { value: 2006, label: "2006" },
//     { value: 2011, label: "2011" },
//     { value: 2016, label: "2016" },
//     { value: 2021, label: "2021" },
//     { value: 2026, label: "2026" },
//   ];

//   return (
//     <div>
//       <div className="slider-container">
//         <Slider
//           className="time-slider"
//           value={year}
//           min={2006}
//           max={2026}
//           step={null}
//           marks={marks}
//           onChange={handleYearChange}
//           valueLabelDisplay="auto"
//         />
//       </div>
//       <MapContainer
//         center={[45.5017, -73.5673]}
//         zoom={12}
//         style={{ height: "600px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//         />
//         {!loading && geoData && (
//           <GeoJSON
//             data={geoData}
//             style={style}
//             onEachFeature={onEachFeature}
//             ref={geoJsonLayerRef}
//           />
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default Demo;

import "../styles/Demo.scss";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Slider from "@mui/material/Slider";


const Demo = () => {
 const [year, setYear] = useState(2021);
 const [geoData, setGeoData] = useState(null);
 const [loading, setLoading] = useState(false);
 const geoJsonLayerRef = useRef(null);


 useEffect(() => {
   setLoading(true);
   axios
     .get(`http://localhost:8000/data/${year}`)
     .then((response) => {
       console.log(`GeoJSON Data for ${year}:`, response.data);
       setGeoData(response.data);
       setLoading(false);
     })
     .catch((error) => {
       console.error(`There was an error fetching the data for ${year}!`, error);
       setLoading(false);
     });
 }, [year]);


 const handleYearChange = (event, newValue) => {
   setYear(newValue);
 };


 const getColor = (gentrified, gentrifiable) => {
   // Convert 1/0 to true/false if necessary
   gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
   gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;


   if (gentrified === null || gentrifiable === null) {
     return "#808080"; // Grey for null values
   }
   if (gentrified === true && gentrifiable === true) {
     return "#BD0026"; // Darkest red
   }
   if (gentrified === false && gentrifiable === true) {
     return "#fe901f"; // Second darkest shade of red
   }
   if (gentrified === true && gentrifiable === false) {
     return "#fe901f"; // Third darkest shade of red
   }
   if (gentrified === false && gentrifiable === false) {
     return "#FFEDA0"; // Lightest shade of red
   }
   return "#808080"; // Default grey
 };


 const style = (feature) => {
   let gentrified = feature.properties?.gentrified;
   let gentrifiable = feature.properties?.gentrifiable;


   // Convert 1/0 to true/false if necessary
   gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
   gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;


   return {
     fillColor: getColor(gentrified, gentrifiable),
     weight: 2,
     opacity: 1,
     color: "white",
     dashArray: "3",
     fillOpacity: 0.7,
   };
 };


 const onEachFeature = (feature, layer) => {
   if (!feature.geometry || !feature.geometry.coordinates) {
     console.warn("Invalid feature:", feature);
     return;
   }


   let gentrified = feature.properties?.gentrified;
   let gentrifiable = feature.properties?.gentrifiable;
   const gentrification_level = feature.properties?.gentrification_level;


   // Convert 1/0 to true/false if necessary
   gentrified = gentrified === 1 ? true : gentrified === 0 ? false : gentrified;
   gentrifiable = gentrifiable === 1 ? true : gentrifiable === 0 ? false : gentrifiable;


   const popupContent = `
     <div>
       <p>Gentrified: ${gentrified !== null ? gentrified : "Gentrified is null"}</p>
       <p>Gentrifiable: ${gentrifiable !== null ? gentrifiable : "Gentrifiable is null"}</p>
       <p>Gentrification Level: ${gentrification_level !== null ? gentrification_level : "Gentrification level is null"}</p>
     </div>
   `;


   layer.bindPopup(popupContent);
 };


 useEffect(() => {
   if (geoJsonLayerRef.current && geoData && !loading) {
     geoJsonLayerRef.current.clearLayers(); // Clear the existing layers
     geoJsonLayerRef.current.addData(geoData); // Add new data
   }
 }, [geoData, loading]); // Update whenever geoData changes


 const marks = [
   { value: 2006, label: "2006" },
   { value: 2011, label: "2011" },
   { value: 2016, label: "2016" },
   { value: 2021, label: "2021" },
   { value: 2026, label: "2026" },
 ];


 return (
   <div>
     <div className="slider-container">
       <Slider
         className="time-slider"
         value={year}
         min={2006}
         max={2026}
         step={null}
         marks={marks}
         onChange={handleYearChange}
         valueLabelDisplay="auto"
       />
     </div>
     <MapContainer
       center={[45.5017, -73.5673]}
       zoom={12}
       style={{ height: "600px", width: "100%" }}
     >
       <TileLayer
         url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
       />
       {!loading && geoData && (
         <GeoJSON
           data={geoData}
           style={style}
           onEachFeature={onEachFeature}
           ref={geoJsonLayerRef}
         />
       )}
     </MapContainer>
   </div>
 );
};


export default Demo;