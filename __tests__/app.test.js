process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const db = require("../db/index");

describe("restaurants", () => {
  afterAll(() => {
    return db.end();
  });
  describe("/api/areas", () => {
    describe("GET", () => {
      test("returns status code 200 and the response in the correct format", () => {
        return request(app)
          .get("/api/areas")
          .expect(200)
          .then(({ body }) => {
            expect(body).toMatchObject({
              total_areas: expect.any(Number),
              areas: expect.any(Array),
            });
          });
      });
    });
    describe("POST", () => {
      test("returns status code 201 and the area added as a response in the correct format", () => {
        return request(app)
          .post("/api/areas")
          .send({ area_name: "Melbourne" })
          .expect(201)
          .then(({ body }) => {
            expect(body).toHaveProperty("addedArea");
            expect(body.addedArea).toHaveProperty("area_id");
            expect(body.addedArea).toHaveProperty("area_name");
          });
      });
    });
  });
  describe("/api/areas/:area_id/restaurants", () => {
    describe("GET", () => {
      test("returns status code 200 and the correct restaurant(s) formatted correctly", () => {
        return request(app)
          .get("/api/areas/1/restaurants")
          .expect(200)
          .then(({ body }) => {
            expect(body).toMatchObject({ restaurants: expect.any(Array) });
          });
      });
      test("returns a status code 200 and the correct restaurants filtered by cuisine when a query is added to the endpoint", () => {
        return request(app)
          .get("/api/areas/1/restaurants?cuisine=turkish")
          .expect(200)
          .then(({ body }) => {
            console.log(body);
            body.restaurants.forEach((restaurant) => {
              expect(restaurant.cuisine).toBe("turkish");
            });
          });
      });
    });
  });
});
