const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('SecureCart Application Running Successfully');
});

// Export app for testing
module.exports = app;

// Start server only when running normally
if (require.main === module) {
    app.listen(3000, () => {
        console.log('SecureCart server running on port 3000');
    });
}