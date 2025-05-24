import React from 'react';
import './styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-card">
      <p>{appointment.title}</p>
      <p>{appointment.time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
