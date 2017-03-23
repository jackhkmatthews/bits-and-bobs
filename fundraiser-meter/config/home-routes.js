const express           = require('express');
const router            = express.Router();
const homeController = require('../controllers/home');

//if url matches '/' then use homeController.home
router.route('/')
  .get(homeController.home);

//export to make available to rest of node app
module.exports = router;
