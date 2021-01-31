const router = require("express").Router();
const express = require('express');
const bodyParser = require('body-parser');

const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

// this is our get method
// this method fetches all available data in our database
router.post('/sendAlert', (req, res) => {
    
  
    const { message } = req.body;

    if (!message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
  
  
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: message,
      body: `Your car alarm has been set! Tampering noticed near vehicle! Access control panel at Google.com`
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
  
  
// this is our Welcome  Method
// this method sends a text to the user with their information
  router.post('/welcomeAlert', (req, res) => {
    
  
    const { id, phoneNumber, email, displayName, password } = req.body;
  
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
      body: `Profile Created! Welcome ${displayName} \n Username: ${email} \n Registered Phone Number: ${phoneNumber} \n Password: ${password}`
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  
  });

  module.exports = router;