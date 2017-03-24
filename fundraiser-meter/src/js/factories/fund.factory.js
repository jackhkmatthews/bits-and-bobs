angular
  .module('fundraiser')
  .factory('Fund', FundFactory);

//Shortcut for making requests to funds database
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

FundFactory.$inject = [];
function FundFactory(){
  console.log('hi');
}
