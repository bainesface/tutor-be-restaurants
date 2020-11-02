const db = require("../db/index");

const fetchRestaurantsByAreaID = (id) => {
  return db
    .query("SELECT * FROM restaurants WHERE area_id = $1", [id])
    .then((response) => {
      return response.rows;
    });
};

module.exports = { fetchRestaurantsByAreaID };
