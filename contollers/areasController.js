const { fetchAreas, addArea } = require("../models/areasModel");

const getAreas = (req, res, next) => {
  fetchAreas()
    .then((areas) => {
      res.status(200).send({ areas });
    })
    .catch((err) => {
      next(err);
    });
};

const postArea = (req, res, next) => {
  const { area_name } = req.body;
  addArea(area_name)
    .then((addedArea) => {
      res.status(201).send({ addedArea });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getAreas, postArea };
