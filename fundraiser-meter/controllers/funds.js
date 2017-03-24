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

function fundsUpdate(req, res){
  console.log('fundsUpdate');
  const id = req.params.id;
  console.log(id);
  Fund.findByIdAndUpdate(id, req.body, (err, fund) => {
    if (err) return res.status(500).json({message: err});
    if (!fund) return res.status(404).json({message: 'no fund found'});
    return res.status(200).json({
      message: 'fund updated',
      fund
    });
  });
}

module.exports = {
  show: fundsShow,
  update: fundsUpdate
};
