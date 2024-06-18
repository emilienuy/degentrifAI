// src/pages/Demo.jsx
import React from 'react';
import Heatmap from '../components/Heatmap';
import PredictionForm from '../components/PredictionForm';
import '../styles/Demo.scss'; 

const Demo = () => {
  return (
    <div>
      <h1>Gentrification Prediction Demo</h1>
      <PredictionForm />
      <Heatmap />
    </div>
  );
};

export default Demo;

