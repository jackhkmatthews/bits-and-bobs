const path = require('path');

//home controller simply serves index.html file
function homeController(req, res){
  console.log('homeController');
  return res.sendFile(path.join(__dirname, '../index.html'));
}

//export to make accessible to rest of node app
module.exports = {
  home: homeController
};
