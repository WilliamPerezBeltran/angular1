app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'hola william perezTop Sellers in Books'; 
  $scope.prueba = 'hola willafafsfassssssssssssssssssssssiam perezTop Sellers in Books'; 
  $scope.promo = 'hola promo'; 
  $scope.product={ 
      name: 'The Book of Trees', 
      price: 19,
    pubdate: new Date('2014', '03', '08')
    };
  
}]);