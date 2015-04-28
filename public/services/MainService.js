angular.module('MainService', []).factory('User', ['$http', function($http){
  var user = {
  	username: String,
  	password: String,
  	roles: [{type: String, default: 'user'}]
  };
  return user;
}]);