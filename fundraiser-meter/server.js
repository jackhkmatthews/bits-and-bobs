const express      = require('express');
const morgan       = require('morgan');
const mongoose     = require('mongoose');

const app          = express();

const config       = require('./config/config');
const homeRouter   = require('./config/home-routes');
const fundRouter   = require('./config/fund-routes');

//connect to the database
mongoose.connect(config.db, function(){
  console.log(`connected to ${config.db}`);
});

//morgan for logging
app.use(morgan('dev'));

//when request made to '/api/fund' server should use fundRouter
app.use('/api/funds', fundRouter);

//when request made to '/' server should use the homeRouter
app.use('/', homeRouter);

//when static file (e.g JS) requested look for it in the route of repository
app.use(express.static(`${__dirname}`));

//make express server listen/run on selected port
app.listen(config.port, console.log(`server listening at port ${config.port}`));
