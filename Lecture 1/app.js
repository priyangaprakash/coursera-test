(function(){
    'use strict'; //this feature is to capture any errors inside the function
    var x = "hello"; //without this var keyword, 'use strict' will throw an error in the console
    angular.module('myFirstApp',[])
    .controller('myFirstController',function($scope){
        
        $scope.name = "Priyanga";
        $scope.sayHello = function(){
            return "Hello Priya!!";
        };
    });
})();