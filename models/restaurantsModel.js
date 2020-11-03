const db = require('../db/index');

const fetchRestaurantsByAreaID = (id, query) => {
  const { cuisine } = query;
  //console.log(cuisine);

  return db
    .query('SELECT * FROM restaurants WHERE area_id = $1 AND cuisine = $2', [
      id,
      cuisine,
    ])
    .then((response) => {
      return response.rows;
    });
};

module.exports = { fetchRestaurantsByAreaID };
