import { useState } from 'react';
import { sendHealthData } from '../services/api';

const HealthForm = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const healthData = { bloodPressure, sugarLevel, heartRate };
    await sendHealthData(healthData);
    alert('Health data sent successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Blood Pressure" onChange={(e) => setBloodPressure(e.target.value)} />
      <input type="text" placeholder="Sugar Level" onChange={(e) => setSugarLevel(e.target.value)} />
      <input type="text" placeholder="Heart Rate" onChange={(e) => setHeartRate(e.target.value)} />
      <button type="submit">Submit Data</button>
    </form>
  );
};

export default HealthForm;
