const express = require('express');
const { SerialPort } = require('serialport');  // Ensure you import SerialPort correctly

const app = express();
const port = 3001;

app.get('/list-ports', async (req, res) => {
  try {
    const ports = await SerialPort.list();  // Static method call for listing ports
    console.log('Available ports:', ports);
    res.json(ports);
  } catch (error) {
    console.error('Error listing ports:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
