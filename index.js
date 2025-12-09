const express = require('express');
const connectDB = require('./config/database');
const app = express();

app.listen(3000, async () => {
    console.log('Server started');
    await connectDB();
    console.log('Mongo DB connected');
});