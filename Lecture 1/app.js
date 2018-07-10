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


(function(){
    'use strict';
    angular.module('nameCalculatorApp',[])
    .controller('nameCalcController',function($scope){
       $scope.name = "";
       $scope.totalValue = 0;
       $scope.displayNumeric = function(){
           var totalStringValue = calculateTotal($scope.name);
           $scope.totalValue = totalStringValue;
       };

       function calculateTotal(string)
       {
           var stringTotal = 0;
           for(var i=0;i<string.length;i++)
           {
              stringTotal += string.charCodeAt(i);
           }
           return stringTotal;
       }
    });
})();