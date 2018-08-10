(function(){
    'use strict';
    angular.module('myfilterApp',[])
    .controller('filterController',filterControllerFunction)
     .controller('cFilterController',cFilterControllerFunction) // 6) creating ctrl for custom filter
     .filter('custom',myCustomFilterFactoryFunction) //10) registering custom filter factory function to the module
     .filter('truth',truthFunction); //14)registering custom filter with arguments (Go to html for applying filters directly in html)

    filterControllerFunction.$inject = ['$scope','$filter']; // 1) inject a filter service
    cFilterControllerFunction.$inject = ['$scope','customFilter']; //7) custom filter injection //11)inject our custom filter by appending "Filter" keyword at the end
    function filterControllerFunction($scope,$filter) // 2)inject a filter service
    {
       $scope.name = "priya";
       $scope.cost = 4.1838;
       $scope.capsname = $filter('uppercase')($scope.name); // 3) using inbuilt filter function i.e. using filters in javascript
       $scope.sayMessage = function(){
           var msg = "I like to eat healthy snack";
           var output = $filter('uppercase')(msg); // 4)using inbuilt filter function i.e. using filters in javascript
           return output;
           // 5) go for html page (using filters in html page)
       }
    }
   
    //8) function for custom filter controller
     function cFilterControllerFunction($scope,customFilter){
        $scope.check = "priyanga";
        // 12) use the custom filter directly on the html page but with the exact registered filter name "here it is 'custom'"
        $scope.res = "He likes me very much";
        $scope.sayCustomMessage = function(){
            var msg = "I likes to eat healthy snacks";
            var output = customFilter(msg);
            return output;
        };
    }

    //9) creating a custom filter factory function
    function myCustomFilterFactoryFunction(){
        return function(input)
        {
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        };
    }

    // 13)creating custom filters with many user specified arguments
    function truthFunction(){
        return function(input,target,replace)
        {
            input = input || " ";
            input = input.replace(target,replace); //ignore single quotes while giving arguments as parameter
            return input;

        };
    }
})();