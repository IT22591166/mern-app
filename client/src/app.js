import React from 'react';
//import './app.css';
import HealthForm from './components/HealthForm';
import HealthDataTable from './components/HealthDataTable';
import HealthData from './components/HealthData';
import HealthReport from './components/HealthReport';

function App() {
  return (
    <div>
      <h1>Health Monitoring Dashboard</h1>
      <HealthData />
      <HealthReport />
    </div>
  );
}

export default App;

