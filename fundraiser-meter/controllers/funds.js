function fundsShow(req, res){
  console.log('fundsShow');
  return res.status(200).json({message: 'hi'});
}

module.exports = {
  show: fundsShow
};
