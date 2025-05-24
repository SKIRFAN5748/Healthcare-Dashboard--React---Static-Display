import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { healthData } from '../data/healthData';
import { appointments, upcomingSchedule } from '../data/appointments';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards healthData={healthData} />
      <CalendarView appointments={appointments} />
      <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
      <ActivityFeed />
    </div>
  );
};

export default DashboardOverview;
