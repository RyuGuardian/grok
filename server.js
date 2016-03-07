const express = require('express');
const app = express();
const mongoose = require('mongoose');
const businessRouter = require(__dirname + '/routes/business_router');
// const reviewRouter = require(__dirname + '/routes/reviews_router');

var PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/grok_dev');

app.use(express.static(__dirname + '/build'));

app.use('/api', businessRouter);
// app.use('/api', reviewRouter);

app.listen(PORT, () => console.log('Server started on port: ' + PORT));