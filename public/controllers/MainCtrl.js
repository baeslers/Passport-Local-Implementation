angular.module('MainCtrl', []).controller('MainController', [
'$scope',
'$http',
'$location',
'User',
function($scope, $http, $location){
  $scope.signin = function(form){
    $http.post('http://localhost:3000/signin', {username: form.username, password: form.password}).
      success(function(data, status, headers, config){
		if(data){
			$scope.user = data;
			$location.path('/');
		}
		$scope.error = 'Bad username/password';
      }).
      error(function(data, status, headers, config){
      	console.log('ERROR!!! :(');
      	console.log(data+status+headers+config);
      });
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