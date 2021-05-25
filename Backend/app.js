const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Database
const DB = require('./Database/database')

// DB Models
const Book = require('./models/Book')
const Admin = require('./models/Admin')

// Routes
const indexRouter = require('./routes/index')
const booksRouter = require('./routes/book')
const authRouter = require('./routes/Auth')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const errMessage = err.message
  // render the error page
  res.status(err.status || 500);
  res.json(errMessage);
});

// Connect Database
// { force: true }
DB.sync()
  .then(() => {
    console.log("Database is connected")
  })
  .catch(err => {
    console.log(err)
  })

module.exports = app;
