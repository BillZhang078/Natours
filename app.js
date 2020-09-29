const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');

app.use(express.json());

//Routes

app.use('/api/v1/tours', tourRouter);
module.exports = app;
