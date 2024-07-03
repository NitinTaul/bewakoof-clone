const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { sendOtp, verifyOtp } = require('./otpService');

app.use(bodyParser.json());

app.post('/request-otp', (req, res) => {
  const { phoneNumber } = req.body;
  sendOtp(phoneNumber)
    .then(() => res.status(200).send({ message: 'OTP sent successfully' }))
    .catch(err => res.status(500).send({ error: err.message }));
});

app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;
  verifyOtp(phoneNumber, otp)
    .then(() => res.status(200).send({ message: 'OTP verified successfully' }))
    .catch(err => res.status(400).send({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
