const Tour = require('../models/toursModel');

exports.getAllTours = async (req, res) => {
  try {
    if (req.query) {
      let queryObj = { ...req.query };
      const excludedFiles = ['limit', 'page', 'sort', 'fields'];

      excludedFiles.forEach(el => delete queryObj[el]);

      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

      let query = Tour.find(JSON.parse(queryStr));

      if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
      }

      if (req.query.fields) {
        const fields = req.query.fields.split(',').join(' ');
        query = query.select(fields);
      }

      const tours = await query;

      // const tours = await query;
      return res.status(200).json({
        status: 'success',
        data: {
          tours
        }
      });
    }

    const tours = await Tour.find();
    return res.status(200).json({
      status: 'success',
      data: { tours }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getOneTour = (req, res) => {
  const tour = Tour.findById(req.params.id);
  return res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.deleteOneTour = (req, res) => {
  const tour = Tour.findOneAndDelete(req.params.id);
  return res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.postATour = async (req, res) => {
  const tour = await Tour.create(req.body);
  // const id = tours.length;
  // const data = req.body;
  // const newTour = { id, ...data };
  res.status(200).json({
    status: 'Success',
    data: {
      tour
    }
  });
};

exports.updateATour = async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  // const id = tours.length;
  // const data = req.body;
  // const newTour = { id, ...data };
  res.status(200).json({
    status: 'Success',
    data: {
      tour
    }
  });
};

exports.updateTourContent = async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  // const id = tours.length;
  // const data = req.body;
  // const newTour = { id, ...data };
  res.status(200).json({
    status: 'Success',
    data: {
      tour
    }
  });
};

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, id) => {
//   if (id * 1 > tours.length - 1) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Tours not exist'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Name must be included in the body'
//     });
//   }

//   next();
// };

// fs.writeFile(
//   `${__dirname}/../dev-data/data/tours-simple.json`,
//   JSON.stringify(tours),
//   err => {
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tours
//       }
//     });
//   }
// );
