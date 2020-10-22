const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 5000;

const url = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(url, () => {
  console.log('Database is connecting');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
