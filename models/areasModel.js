const db = require("../db/index");

const fetchAreas = () => {
  return db.query("SELECT * FROM areas;").then((areas) => {
    return areas.rows;
  });
};

const addArea = (area_name) => {
  return db
    .query("INSERT INTO areas(area_name) VALUES($1) RETURNING *;", [area_name])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = { fetchAreas, addArea };
