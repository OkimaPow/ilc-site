const express = require('express');
const SerialPort = require('serialport');
const app = express();
const port = 3001;

// Adjust the serial port path and baud rate according to your Arduino setup
const serialPort = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600,
});

serialPort.on('open', () => {
  console.log('Serial port opened');
});

serialPort.on('data', (data) => {
  console.log('Received data from Arduino:', data.toString());
});

app.get('/send', (req, res) => {
  const message = req.query.message;
  serialPort.write(message, (err) => {
    if (err) {
      return res.status(500).send('Error writing to serial port');
    }
    res.send('Message sent to Arduino');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});