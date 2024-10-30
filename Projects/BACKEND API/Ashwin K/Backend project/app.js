var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('./db/db.js');
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  const upload = multer({ storage: storage })

var indexRouter = require('./routes/admin');//
var usersRouter = require('./routes/users');
const { log } = require('console');
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', indexRouter);
app.use('/users', usersRouter);
app.post('/profile', upload.single('avatar'), (req, res) => {
    res.json("uploaded succesfully")
})
module.exports = app;
