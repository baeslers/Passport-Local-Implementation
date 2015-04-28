angular.module('MainCtrl', []).controller('MainController', [
'$scope',
function($scope){
  $scope.test = 'oy!'; 

  $scope.signIn = function(username, password){
  	console.log('hello world!');
  }



}]);