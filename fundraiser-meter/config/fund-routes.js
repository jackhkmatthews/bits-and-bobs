const express        = require('express');
const router         = express.Router();
const funds          = require('../controllers/funds');

router.route('/')
  .get(funds.show);

module.exports = router;
