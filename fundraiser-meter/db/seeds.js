const mongoose = require('mongoose');

const config   = require('../config/config');
const Fund     = require('../models/fund');

mongoose.connect(config.db, function(){
  console.log(`connected to ${config.db}`);
});

Fund.collection.drop();

const fund = new Fund({
  target: 100,
  raised: 22,
  remaining: 78
});

fund.save((err, doc) => {
  if (err) return console.log(err);
  return;
});
