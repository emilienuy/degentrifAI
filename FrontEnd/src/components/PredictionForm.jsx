// src/components/PredictionForm.jsx
import React, { useState } from 'react';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    year: '',
    feature1: '',
    feature2: '',
    // Add more features as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/predict", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Prediction:", data);
        // Handle the prediction response
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" required />
      <input type="number" name="feature1" value={formData.feature1} onChange={handleChange} placeholder="Feature 1" required />
      <input type="number" name="feature2" value={formData.feature2} onChange={handleChange} placeholder="Feature 2" required />
      {/* Add more input fields as needed */}
      <button type="submit">Predict</button>
    </form>
  );
};

export default PredictionForm;
