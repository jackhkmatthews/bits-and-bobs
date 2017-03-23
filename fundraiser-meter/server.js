const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, console.log('server listening at port 3000'));
