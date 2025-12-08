const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');

};

module.exports = connectDB; 