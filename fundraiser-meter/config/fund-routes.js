const express        = require('express');
const router         = express.Router();
const funds          = require('../controllers/funds');

router.route('/')
  .get(funds.show);

router.route('/:id')
  .put(funds.update);

module.exports = router;
