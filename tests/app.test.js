const request = require('supertest');
const app = require('../app');

describe('SecureCart CRUD API Tests', () => {

    test('Retrieve products successfully', async () => {

        const response = await request(app).get('/products');

        expect(response.statusCode).toBe(200);
    });

    test('Create new product successfully', async () => {

        const response = await request(app)
            .post('/products')
            .send({ name: 'Tablet' });

        expect(response.statusCode).toBe(201);
    });

    test('Update existing product successfully', async () => {

        const response = await request(app)
            .put('/products/1')
            .send({ name: 'Gaming Laptop' });

        expect(response.statusCode).toBe(200);
    });

    test('Delete product successfully', async () => {

        const response = await request(app)
            .delete('/products/1');

        expect(response.statusCode).toBe(200);
    });

    test('Edge Case - Invalid route returns 404', async () => {

        const response = await request(app)
            .get('/invalid');

        expect(response.statusCode).toBe(404);
    });

});