const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, id) => {
  if (id * 1 > tours.length - 1) {
    return res.status(400).json({
      status: 'fail',
      message: 'Tours not exist'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(tours);

  return res.status(200).json({
    status: 'success',
    data: {
      tours
    }
  });
};

exports.getOneTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find(item => item.id === id);
  return res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};
