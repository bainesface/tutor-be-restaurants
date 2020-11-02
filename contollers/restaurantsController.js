const { fetchRestaurantsByAreaID } = require("../models/restaurantsModel");

const getRestaurants = (req, res, next) => {
  const { area_id } = req.params;
  fetchRestaurantsByAreaID(area_id)
    .then((restaurants) => {
      res.status(200).send({ restaurants });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getRestaurants };
