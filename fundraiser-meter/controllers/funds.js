const Fund = require('../models/fund');

function fundsShow(req, res){
  console.log('fundsShow');
  Fund.find({}, (err, funds) => {
    if (err) return res.status(500).json({message: err});
    return res.status(200).json({
      message: 'fund!',
      fund: funds[0]
    });
  });
}

module.exports = {
  show: fundsShow
};
