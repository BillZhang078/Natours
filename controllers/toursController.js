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

exports.checkBody = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Name must be included in the body'
    });
  }

  next();
};

exports.getAllTours = (req, res) => {
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

exports.postATour = (req, res) => {
  const id = tours.length;
  const data = req.body;
  const newTour = { id, ...data };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(200).json({
        status: 'success',
        data: {
          tours
        }
      });
    }
  );
};
