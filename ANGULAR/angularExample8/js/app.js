var app = angular.module('ForecastApp', []);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/', { 
      controller: 'PhotoController', 
      templateUrl: '/photos/:id' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});