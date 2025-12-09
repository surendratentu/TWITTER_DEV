const express = require('express');
const connectDB = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('Server started');
    await connectDB();
    console.log('Mongo DB connected');
    const tweets = await Tweet.find({
        content: ["First tweet", "second tweet"]
    });
    console.log(tweets);
});
