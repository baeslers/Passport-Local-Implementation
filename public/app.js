var app = angular.module('app', ['ui.router', 'MainCtrl']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signin', {
            url: '/signin',
            templateUrl: 'views/signin.html',
            controller: 'MainController'
        });
        
});