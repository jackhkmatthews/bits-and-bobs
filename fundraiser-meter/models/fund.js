const mongoose = require('mongoose');

const fundSchema = new mongoose.Schema({
  target: {type: Number, require: true},
  raised: {type: Number, require: true},
  required: {type: Number, require: true}
});

module.exports = mongoose.model('Fund', fundSchema);
