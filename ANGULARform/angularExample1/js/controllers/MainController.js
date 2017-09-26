app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
    { 
      icon: 'img/1.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'img/1.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    },
    {
      icon: 'img/1.jpg', 
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'img/1.jpg', 
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ];
}]);