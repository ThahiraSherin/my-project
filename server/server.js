const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config.js');
const app = require('./app.js');


mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
