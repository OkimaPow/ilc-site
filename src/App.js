import React, { useState } from 'react';

function App() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  const listDevices = async () => {
    try {
      const response = await fetch('/list-ports');
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setDevices(data);
      } else {
        setError('Unexpected data format received');
      }
    } catch (error) {
      console.error('Error fetching devices:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Arduino Serial Communication</h1>
      <button onClick={listDevices}>List Available Devices</button>
      {error && <p>Error: {error}</p>}
      <ul>
        {devices.map((device, index) => (
          <li key={index}>
            {device.path} - {device.manufacturer || 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
