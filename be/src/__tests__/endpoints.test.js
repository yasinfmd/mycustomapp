const request = require('supertest');
const app = require('../server'); 

describe('GET /api/inventory', () => {
  it('should return inventory list', async () => {
    const response = await request(app).get('/api/inventory');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(-1);
  });
});


describe('POST /api/inventory', () => {
    it('should create a new inventory with valid data', async () => {
      const data = {
        "name":"İsim 1",
        "inventoryType":"6430667deea7876e048a6a03",
        "number":5
      };
      const response = await request(app)
        .post('/api/inventory')
        .send(data);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
    });
  
    it('should return a validation error with invalid data', async () => {
      const data = {
        "name":"İsim 1",
        "inventoryType":"6430667deea7876e048a6a03",
        "number":-10
      };
      const response = await request(app)
        .post('/api/inventory')
        .send(data);
      expect(response.status).toBe(422);
      expect(response.body.errors).toBeDefined();
    });
  });