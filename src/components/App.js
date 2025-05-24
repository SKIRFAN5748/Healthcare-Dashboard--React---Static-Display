import React from 'react';
import Header from './Header'; // Corrected path
import Sidebar from './Sidebar'; // Corrected path
import DashboardMainContent from './DashboardMainContent'; // Corrected path
import '../styles/App.css'; // Corrected path

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
