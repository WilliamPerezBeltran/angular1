var app=angular.module("myApp",[]);

app.controller("maincontroller",function($scope){
	$scope.nuevocomentario={};
	$scope.comentarios=[
		{
			comentario:"buen dia",
			username:"williamperez ",
		},
		{
			comentario:"buena tarde",
			username:"sebas ",
		}
	];
	$scope.agregarcomentario=function(){
		$scope.comentarios.push($scope.nuevocomentario);
		$scope.nuevocomentario={};
	};


});