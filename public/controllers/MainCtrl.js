angular.module('MainCtrl', []).controller('MainController', [
'$scope',
'$http',
'$location',
'User',
function($scope, $http, $location, User){
  $scope.signin = function(form){
    var user = User.login(form.username, form.password);
    console.log(user);
  };

  $scope.logout = function(){
  	$http.post('http://localhost:3000/logout', {}).
  	  success(function(data, status, headers, config){
  	  	console.log(data+status+headers+config);
  	  	$location.path('/');
  	  }).

  	  error(function(data, status, headers, config){
  	  	console.log('ERROR!!');
  	  	console.log(data+status+headers+config);
  	  	$location.path('/');
  	  })
  }



}]);