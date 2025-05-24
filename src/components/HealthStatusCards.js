import React from 'react';
import '../styles/HealthStatusCards.css';

const HealthStatusCards = ({ healthData }) => {
  return (
    <div className="health-status-cards">
      {healthData.map((data, index) => (
        <div key={index} className="health-card">
          <h3>{data.title}</h3>
          <p>Date: {data.date}</p>
          <div className="status-bar" style={{ width: data.status, backgroundColor: data.color }}></div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
