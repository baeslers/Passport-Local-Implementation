angular.module('MainService', []).factory('User', ['$rootScope', '$http', function($http){
  var user = {
  	model: {
  	  username: String,
  	  password: String,
  	  roles: [{type: String, default: 'user'}]
    },
      login: function(username, password){
        $http.post('http://localhost:3000/signin', {username: username, password: password}).
          success(function(data, status, headers, config){
		    if(data){
		    	return data;
		    }
		    $scope.error = 'Bad username/password';
          }).
          error(function(data, status, headers, config){
      	    console.log('ERROR!!! :(');
      	    console.log(data+status+headers+config);
          });  	
    }
  };
  return user;
}]);