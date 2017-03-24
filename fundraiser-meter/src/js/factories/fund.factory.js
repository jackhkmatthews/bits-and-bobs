angular
  .module('fundraiser')
  .factory('Fund', fundFactory);

//Shortcut for making requests to funds database
//untilising angulars $resource code
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

fundFactory.$inject = ['API', '$resource'];
function fundFactory(API, $resource){
  return $resource(`${API}/funds/:id`, {id: '@_id'}, {
    'update': {method: 'PUT'},
    'query': {method: 'GET', isArray: false}
  });
}
