const request = require('supertest');
const app = require('../app');

describe('SecureCart Application Tests', () => {

    test('Unit Test - Application should respond successfully', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('Edge Case Test - Invalid route should return 404', async () => {
        const response = await request(app).get('/invalid');
        expect(response.statusCode).toBe(404);
    });

    test('Integration Test - Server response validation', async () => {
        const response = await request(app).get('/');
        expect(response.text).toContain('SecureCart');
    });

});