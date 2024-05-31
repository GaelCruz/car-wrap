const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.render('index', {
    apiKey: process.env.API_KEY,
    placeId: process.env.PLACE_ID
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


