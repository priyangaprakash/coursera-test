//Inital Angular JS application set up
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

//Appliaction for name calculation
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

//Appliaction for explaining dependency injection
(function(){
   
   angular.module('depInjApp',[])
   .controller('depInjCtrl',depInjFunc); //the reason for using arrays is to avoid minification of
   //injector variable
   depInjFunc.$inject = ['$scope','$filter'];
   function depInjFunc($scope,$filter){
       $scope.name = "priya";
       $scope.upper = function(){
        var upCase = $filter('uppercase'); //upcase filter function
        $scope.name = upCase($scope.name);
       };
       
   };
   
})();
/*
*we can inject paramteres in any of the following way
1) .controller('ctrlname',['$scope','$filter',funcname) or 
2) funcname.$inject = ['$scope','$filter'] //this way is good for good code readability

*/
