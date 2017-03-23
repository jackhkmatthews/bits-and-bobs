const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, console.log('server listening at port 3000'));
