import { useEffect, useState } from 'react';
import { getReports } from '../services/api';

const DataDisplay = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await getReports();
      setReports(response.data);
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Personalized Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
