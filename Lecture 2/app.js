(function(){
    'use strict';
    angular.module('filterApp',[])
    .controller('filterController',myFunction)
    .filter('custom',myFilter)
    .filter('param',argFilter);
    myFunction.$inject = ['$scope','$filter','customFilter'];
    function myFunction($scope,$filter,customFilter)
    {
        $scope.msg = "hello world";
        $scope.oup = $filter('uppercase')($scope.msg); //applying filter in javascript
        $scope.cost = 45;
        $scope.price = $filter('currency')($scope.cost,'$',0.10);
        $scope.customMgs = function(){
            var m = "I likes tamil novel";
            m = customFilter(m);
            return m;
        };
    };

    //creation of custom filter factory
    function myFilter()
    {
        return function(input)
        {
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        }
    }

    //creation of custom filter with arguments...here we want the user to specify the "replace string" so
    //filter registration alone is needed (because we are going to use this filter directly on html tag)
    function argFilter(){
        return function(input,target,replace)
        {
            input = input || "";
            input = input.replace(target,replace);
            return input;
        }
    };

})();

