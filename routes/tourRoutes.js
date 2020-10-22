const express = require('express');
const router = express.Router();

const tourControllers = require('../controllers/toursController');

// router.param('id', tourControllers.checkID);

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.postATour);

router
  .route('/:id')
  .get(tourControllers.getOneTour)
  .put(tourControllers.updateATour)
  .delete(tourControllers.deleteOneTour)
  .patch(tourControllers.updateTourContent);

module.exports = router;
