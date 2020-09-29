const express = require('express');
const router = express.Router();

const tourControllers = require('../controllers/toursController');

router.param('id', tourControllers.checkID);

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.checkBody, tourControllers.postATour);

router.route('/:id').get(tourControllers.getOneTour);

module.exports = router;
