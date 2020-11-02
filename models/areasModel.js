const db = require("../db/index");

const fetchAreas = () => {
  return db.query("SELECT * FROM areas;").then((areas) => {
    return areas.rows;
  });
  //   console.log("in fetch model");
};

const addArea = (area_name) => {
  console.log("post model");
  return db
    .query("INSERT INTO areas(area_name) VALUES($1) RETURNING *;", [area_name])
    .then((response) => {
      return response.rows;
    });
};

module.exports = { fetchAreas, addArea };
