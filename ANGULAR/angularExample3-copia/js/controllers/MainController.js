app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'hola william perezTop Sellers in Books'; 
  $scope.promo = 'hola promo'; 
  $scope.explication = 'We have used a few directives so far - ng-app, ng-controller, ng-repeat, and ng-src. What can we generalize about directives?Directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).'; 
  $scope.products=[ 
  { 
    name: 'la vida es bella ', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    imagen: 'img/1.jpg',
    likes:0 ,
    dislikes:0
  },
  { 
    name: 'hay que seguir en esto ', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    imagen: 'img/2.jpg',
    likes:0 ,
    dislikes:0 
  },
  { 
    name: 'nme gusta hacerlos me gusta', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    imagen: 'img/3.jpg',
    likes:0 ,
    dislikes:0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    imagen: 'img/4.jpg',
    likes:0 ,
    dislikes:0
  } 
];

$scope.plusOne=function(index) { 
  console.log(index);
  $scope.products[index].likes =$scope.products[index].likes+ 1; 
};
  

$scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };









  
}]);