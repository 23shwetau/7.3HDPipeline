const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Temporary in-memory product storage
let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
];

// Home route
app.get('/', (req, res) => {
    res.send('SecureCart CRUD API Running Successfully');
});

// CREATE
app.post('/products', (req, res) => {

    // Adds new product into application storage
    const product = {
        id: products.length + 1,
        name: req.body.name
    };

    products.push(product);

    res.status(201).json(product);
});

// RETRIEVE
app.get('/products', (req, res) => {

    // Retrieves all stored products
    res.json(products);
});

// UPDATE
app.put('/products/:id', (req, res) => {

    // Updates existing product information
    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).send('Product not found');
    }

    product.name = req.body.name;

    res.json(product);
});

// DELETE
app.delete('/products/:id', (req, res) => {

    // Removes product from application storage
    const productIndex = products.findIndex(
        p => p.id === parseInt(req.params.id)
    );

    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }

    products.splice(productIndex, 1);

    res.send('Product deleted successfully');
});

module.exports = app;

// Starts application server
if (require.main === module) {

    app.listen(3000, () => {
        console.log('SecureCart server running on port 3000');
    });
}