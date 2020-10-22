const fs = require('fs');
const Tour = require('../models/toursModel');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const url = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(url, () => {
  console.log('Database is connecting');
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

async function createTours() {
  await Tour.create(tours);
}

createTours();
