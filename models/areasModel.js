const db = require('../db/index');

const fetchAreas = () => {
  return db.query('SELECT * FROM areas;').then((areas) => {
    return areas.rows;
  });
};

const addArea = (area_name) => {
  return db
    .query('INSERT INTO areas(area_name) VALUES($1) RETURNING *;', [area_name])
    .then((response) => {
      console.log(!response.rows[0].area_name);
      if (!response.rows[0].area_name) {
        return Promise.reject({ status: 400, msg: 'Sozzles, bad request' });
      }
      return response.rows[0];
    });
};

module.exports = { fetchAreas, addArea };
