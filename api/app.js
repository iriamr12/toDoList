var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dayRouter = require('./routes/day');
var forTomorrowRouter = require('./routes/forTomorrow');
var weekRouter = require('./routes/week');
var monthRouter = require('./routes/month');


var app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
      } catch (error) {
        throw error;
      }
    
    }

    connect();
    
    mongoose.connection.on("disconnected",  () => {
        console.log("mongoDB disconnected")
    })

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/day', dayRouter);
app.use('/api/forTomorrow', forTomorrowRouter);
app.use('/api/week', weekRouter);
app.use('/api/month', monthRouter);

module.exports = app;
