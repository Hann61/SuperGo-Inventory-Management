const express = require('express');
const mongoose = require ('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const app = express();
const apiPort = process.env.PORT || 4000
const mongoString = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.jcoyqgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', cardRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
mongoose.connect(mongoString, {useNewUrlParser: true})
mongoose.connection.on("error", function(error) {
    console.log(error)
})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
})

module.exports = app;
// cannot commit