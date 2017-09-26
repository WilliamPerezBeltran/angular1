app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      
    }, 
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs) { 
    	console.log(attrs);
            scope.buttonText = "Install", 
            scope.installed = false, 

            scope.download = function() { 
              element.toggleClass('btn-active'); 
              if(scope.installed) { 
                scope.buttonText = "Install"; 
                scope.installed = false; 
              } else { 
                scope.buttonText = "Uninstall"; 
                scope.installed = true; 
              } 
            } 
          }

  }; 
});

SELECT * FROM 'datos_hoja_de_vida' WHERE  Nombre='rocio' OR Email='william@william';