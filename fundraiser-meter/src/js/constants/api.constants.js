//not necessarily required
//allows api to be reference throughout app
angular
  .module('fundraiser')
  .constant('API', `${window.location.origin}/api`);
