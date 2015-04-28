var app = angular.module('app', ['ui.router', 'MainCtrl', 'MainService']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signin', {
            url: '/signin',
            templateUrl: 'views/signin.html',
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        });

});