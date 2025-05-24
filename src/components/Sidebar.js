import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Health care.</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>History</li>
          <li>Calendar</li>
          <li>Appointments</li>
          <li>Statistics</li>
          <li>Chat</li>
          <li>Support</li>
          <li>Setting</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
