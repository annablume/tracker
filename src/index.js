const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb+srv://admin:anna3000@cluster0.2myb0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
    console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});