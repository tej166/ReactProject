const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.log('MongoDB Connection Error: ', err);
  });
