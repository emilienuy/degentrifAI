// import "../styles/Demo.scss";
// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import Slider from "@mui/material/Slider";

// const Demo = () => {
//   const [year, setYear] = useState(2021);
//   const [geoData, setGeoData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const geoJsonLayerRef = useRef(null);

//   useEffect(() => {
//     console.log(`Fetching data for year: ${year}`);
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
//     console.log(`Slider changed to year: ${newValue}`);
//     setYear(newValue);
//   };

//   const getColor = (gentrified, gentrifiable) => {
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
//     const gentrified = feature.properties?.gentrified;
//     const gentrifiable = feature.properties?.gentrifiable;

//     return {
//       fillColor: getColor(gentrified, gentrifiable),
//       weight: 2,
//       opacity: 1,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.7,
//     };
//   };

//   const createPopupContent = (tract, gentrified, gentrifiable, gentrification_level) => {
//     const defaultMessages = {
//       gentrified: "Gentrified status is not available",
//       gentrifiable: "Gentrifiability status is not available",
//       gentrification_level: "Gentrification level is not available",
//     };

//     const gentrifiedText = gentrified === true ? `was gentrified` : gentrified === false ? `was not gentrified` : null;
//     const gentrifiedMessage = gentrifiedText !== null ? `This neighbourhood (tract ${tract}) ${gentrifiedText}.` : defaultMessages.gentrified;
//     const gentrifiableMessage = gentrifiable !== null ? `It is also deemed ${gentrifiable ? "gentrifiable" : "not gentrifiable"}, meaning it ${gentrifiable ? "is likely to experience" : "is unlikely to experience"} gentrification in the future.` : defaultMessages.gentrifiable;
//     const gentrificationLevelMessage = gentrification_level !== null ? `The level of gentrification is ${gentrification_level}.` : defaultMessages.gentrification_level;

//     const popupContent = `
//       <div>
//         <p>${gentrifiedMessage}</p>
//         <p>${gentrifiableMessage}</p>
//         <p>${gentrificationLevelMessage}</p>
//       </div>
//     `;

//     return popupContent;
//   };

//   const onEachFeature = (feature, layer) => {
//     if (!feature.geometry || !feature.geometry.coordinates) {
//       console.warn("Invalid feature:", feature);
//       return;
//     }

//     const tract = feature.properties?.tract_id;
//     const gentrified = feature.properties?.gentrified;
//     const gentrifiable = feature.properties?.gentrifiable;
//     const gentrification_level = feature.properties?.gentrification_level;

//     const popupContent = createPopupContent(tract, gentrified, gentrifiable, gentrification_level);

//     layer.bindPopup(popupContent);
//   };

//   useEffect(() => {
//     if (geoJsonLayerRef.current && geoData && !loading) {
//       console.log("Updating GeoJSON layer with new data");
//       geoJsonLayerRef.current.clearLayers();
//       geoJsonLayerRef.current.addData(geoData);
//     }
//   }, [geoData, loading]);

//   const marks = [
//     { value: 2006, label: "2006" },
//     { value: 2011, label: "2011" },
//     { value: 2016, label: "2016" },
//     { value: 2021, label: "2021" },
//     { value: 2026, label: "2026" },
//   ];

//   return (
//     <div className="map-container">
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
//     </div>
//   );
// };

// export default Demo;



//-------------------------------------------------
//undefined neighbourhood
// import "../styles/Demo.scss";
// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import Slider from "@mui/material/Slider";

// const Demo = () => {
//   const [year, setYear] = useState(2021);
//   const [geoData, setGeoData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const geoJsonLayerRef = useRef(null);

//   useEffect(() => {
//     console.log(`Fetching data for year: ${year}`);
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
//     console.log(`Slider changed to year: ${newValue}`);
//     setYear(newValue);
//   };

//   const getColor = (gentrified, gentrifiable) => {
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
//     const gentrified = feature.properties?.gentrified;
//     const gentrifiable = feature.properties?.gentrifiable;

//     return {
//       fillColor: getColor(gentrified, gentrifiable),
//       weight: 2,
//       opacity: 1,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.7,
//     };
//   };

//   const createPopupContent = (tract, neighborhood, gentrified, gentrifiable, gentrification_level) => {
//     const defaultMessages = {
//       gentrified: "Gentrified status is not available",
//       gentrifiable: "Gentrifiability status is not available",
//       gentrification_level: "Gentrification level is not available",
//     };

//     const gentrifiedText = gentrified === true ? `was gentrified` : gentrified === false ? `was not gentrified` : null;
//     const gentrifiedMessage = gentrifiedText !== null ? `This neighbourhood (${neighborhood}, tract ${tract}) ${gentrifiedText}.` : defaultMessages.gentrified;
//     const gentrifiableMessage = gentrifiable !== null ? `It is also deemed ${gentrifiable ? "gentrifiable" : "not gentrifiable"}, meaning it ${gentrifiable ? "is likely to experience" : "is unlikely to experience"} gentrification in the future.` : defaultMessages.gentrifiable;
//     const gentrificationLevelMessage = gentrification_level !== null ? `The level of gentrification is ${gentrification_level}.` : defaultMessages.gentrification_level;

//     const popupContent = `
//       <div>
//         <p>${gentrifiedMessage}</p>
//         <p>${gentrifiableMessage}</p>
//         <p>${gentrificationLevelMessage}</p>
//       </div>
//     `;

//     return popupContent;
//   };

//   const onEachFeature = (feature, layer) => {
//     if (!feature.geometry || !feature.geometry.coordinates) {
//       console.warn("Invalid feature:", feature);
//       return;
//     }

//     const tract = feature.properties?.tract_id;
//     const neighborhood = feature.properties?.neighborhood_name; // Ensure correct property name
//     const gentrified = feature.properties?.gentrified;
//     const gentrifiable = feature.properties?.gentrifiable;
//     const gentrification_level = feature.properties?.gentrification_level;

//     const popupContent = createPopupContent(tract, neighborhood, gentrified, gentrifiable, gentrification_level);

//     layer.bindPopup(popupContent);
//   };

//   useEffect(() => {
//     if (geoJsonLayerRef.current && geoData && !loading) {
//       console.log("Updating GeoJSON layer with new data");
//       geoJsonLayerRef.current.clearLayers();
//       geoJsonLayerRef.current.addData(geoData);
//     }
//   }, [geoData, loading]);

//   const marks = [
//     { value: 2006, label: "2006" },
//     { value: 2011, label: "2011" },
//     { value: 2016, label: "2016" },
//     { value: 2021, label: "2021" },
//     { value: 2026, label: "2026" },
//   ];

//   return (
//     <div className="map-container">
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
//     </div>
//   );
// };

// export default Demo;

//------------------------------

import "../styles/Demo.scss";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Slider from "@mui/material/Slider";

const Demo = () => {
  const [year, setYear] = useState(2021);
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const geoJsonLayerRef = useRef(null);

  useEffect(() => {
    console.log(`Fetching data for year: ${year}`);
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
    console.log(`Slider changed to year: ${newValue}`);
    setYear(newValue);
  };

  const getColor = (gentrified, gentrifiable) => {
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
    const gentrified = feature.properties?.gentrified;
    const gentrifiable = feature.properties?.gentrifiable;

    return {
      fillColor: getColor(gentrified, gentrifiable),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  const createPopupContent = (tract, neighborhood, gentrified, gentrifiable, gentrification_level) => {
    const defaultMessages = {
      gentrified: "Gentrified status is not available",
      gentrifiable: "Gentrifiability status is not available",
      gentrification_level: "Gentrification level is not available",
    };

    const gentrifiedText = gentrified === true ? `was gentrified` : gentrified === false ? `was not gentrified` : null;
    const gentrifiedMessage = gentrifiedText !== null ? `This neighbourhood (${neighborhood}, tract ${tract}) ${gentrifiedText}.` : defaultMessages.gentrified;
    const gentrifiableMessage = gentrifiable !== null ? `It is also deemed ${gentrifiable ? "gentrifiable" : "not gentrifiable"}, meaning it ${gentrifiable ? "is likely to experience" : "is unlikely to experience"} gentrification in the future.` : defaultMessages.gentrifiable;
    const gentrificationLevelMessage = gentrification_level !== null ? `The level of gentrification is ${gentrification_level}.` : defaultMessages.gentrification_level;

    const popupContent = `
      <div>
        <p>${gentrifiedMessage}</p>
        <p>${gentrifiableMessage}</p>
        <p>${gentrificationLevelMessage}</p>
      </div>
    `;

    return popupContent;
  };

  const onEachFeature = (feature, layer) => {
    if (!feature.geometry || !feature.geometry.coordinates) {
      console.warn("Invalid feature:", feature);
      return;
    }

    const tract = feature.properties?.tract_id;
    const neighborhood = feature.properties?.neighborhood_name;
    const gentrified = feature.properties?.gentrified;
    const gentrifiable = feature.properties?.gentrifiable;
    const gentrification_level = feature.properties?.gentrification_level;

    const popupContent = createPopupContent(tract, neighborhood, gentrified, gentrifiable, gentrification_level);

    layer.bindPopup(popupContent);
  };

  useEffect(() => {
    if (geoJsonLayerRef.current && geoData && !loading) {
      console.log("Updating GeoJSON layer with new data");
      geoJsonLayerRef.current.clearLayers();
      geoJsonLayerRef.current.addData(geoData);
    }
  }, [geoData, loading]);

  const marks = [
    { value: 2006, label: "2006" },
    { value: 2011, label: "2011" },
    { value: 2016, label: "2016" },
    { value: 2021, label: "2021" },
    { value: 2026, label: "2026" },
  ];

  return (
    <div className="map-container">
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
    </div>
  );
};

export default Demo;

       








