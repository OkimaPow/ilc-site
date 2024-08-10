import React, { useState } from 'react';

function App() {
  const [devices, setDevices] = useState([]);

  const listDevices = async () => {
    try {
      const response = await fetch('/list-ports');
      const data = await response.json();
      setDevices(data);
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  return (
    <div>
      <h1>Arduino Serial Communication</h1>
      <button onClick={listDevices}>List Available Devices</button>
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
