const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('7.3HD Pipeline Running Successfully');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});