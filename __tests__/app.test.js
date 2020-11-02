const request = require('supertest');
const app = require('../app');
const db = require('../db/index');

describe('restaurants', () => {
  afterAll(() => {
    return db.end();
  });
  describe('./api/areas', () => {
    describe('GET', () => {
      test('returns status code 200 and  ', () => {
        return request(app)
          .get('/api/areas')
          .expect(200)
          .then(({ body }) => {
            expect(body).toMatchObject({
              total_areas: expect.any(Number),
              areas: expect.any(Array),
            });
          });
      });
    });
  });
});
