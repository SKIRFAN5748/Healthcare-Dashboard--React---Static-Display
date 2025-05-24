import React from 'react';
import anatomyImage from '../assets/anatomy.jpeg'; // Placeholder for anatomy image
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src={anatomyImage} alt="Anatomy" />
      <div className="health-indicators">
        <div className="indicator healthy-heart">Healthy Heart</div>
        <div className="indicator healthy-leg">Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
