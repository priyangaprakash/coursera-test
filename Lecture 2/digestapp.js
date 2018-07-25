//Understanding $digest
(function(){
    'use strict';
    angular.module('digestApp',[])
    .controller('digestController',showNumber);
    showNumber.$inject = ['$scope'];
    function showNumber($scope)
    {
        $scope.onceCount = 0;
        $scope.counter = 0;
        $scope.myWatcher = function(){
            console.log($scope);
            console.log("# of watchers",$scope.$$watchersCount);
        };
        $scope.countOnce = function(){
            $scope.onceCount = 1;
        };
         $scope.countUp = function(){
            $scope.counter++;
        };
        // $scope.$watch('onceCount',function(newvalue,oldvalue){
        //     console.log("Once counter old value:",oldvalue);
        //     console.log("Once counter  New value:",newvalue);
        // });
        //  $scope.$watch('counter',function(newvalue,oldvalue){
        //     console.log("Up counter old value:",oldvalue);
        //     console.log("Up counter New value:",newvalue);
        // });
        //now even if we remove all this watch scope we will get the required output
        //below this just try removing this scope watch and print the counter and onceCount value in html though {{}}
    };
})();