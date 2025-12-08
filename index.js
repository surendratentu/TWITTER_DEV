const express = require('express');
const connectDB = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('Server started');
    await connectDB();
    console.log('Mongo DB connected');
    // const tweet =  await Tweet.create({
    //     content: 'second tweet'
    // });
    // const tweets = await Tweet.find({});
    // console.log(tweets);

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(0, 4);
    console.log(tweet[0].contentWithEmail);
});