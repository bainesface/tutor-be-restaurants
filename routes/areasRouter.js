const areasRouter = require("express").Router();
const { getAreas, postArea } = require("../contollers/areasController");
const { getRestaurants } = require("../contollers/restaurantsController");

areasRouter.route("/").get(getAreas).post(postArea);

areasRouter.route("/:area_id/restaurants").get(getRestaurants);

module.exports = areasRouter;
