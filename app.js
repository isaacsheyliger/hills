var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => res.send('three.js Node Environment'));
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });

module.exports = app;
