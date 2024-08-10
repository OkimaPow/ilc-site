const express = require('express');
const SerialPort = require('serialport');
const app = express();
const port = 3001;

// List available serial ports
app.get('/list-ports', async (req, res) => {
  try {
    const ports = await SerialPort.list();
    res.json(ports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other routes and serial communication code...

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
