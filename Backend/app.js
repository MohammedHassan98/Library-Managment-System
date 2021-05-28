const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
var compression = require('compression')

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

// Handle Image Upload 
const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString() + '-' + file.originalname);
    console.log(file)
  }
});

const fileFiltration = (req, file, callback) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(multer({ storage: fileStorage, fileFilter: fileFiltration }).single('CoverImageUrl'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(logger('dev'));
app.use(cookieParser());

// Routes
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
