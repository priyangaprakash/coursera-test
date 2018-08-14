(function(){
    'use strict';
    angular.module('scopeInher',[])
    .controller('parentController1',parentController1)
    .controller('childController1',childController1)
    .controller('parentController2',parentController2)
    .controller('childController2',childController2);

    parentController1.$inject = ['$scope'];
    function parentController1($scope)
    {
        $scope.parentvalue = 1;
        $scope.pc = this; //it is the instance of the parentController1
        $scope.pc.parentvalue = 1;
    };

    childController1.$inject = ['$scope'];
    function childController1($scope)
    {
       console.log("$scope.parentvalue",$scope.parentvalue);
       console.log("Child $scope",$scope);

       $scope.parentvalue = 5;
       console.log("parent value changed");
        console.log("$scope.parentvalue",$scope.parentvalue);
       console.log("Child $scope",$scope);

        console.log("$scope.pc.parentvalue",$scope.pc.parentvalue);
        $scope.pc.parentvalue = 5; //it will also change the value in the root (parentController1) because .controller will treat 
        //this as a function constructor
       console.log("parent pc value changed");
        console.log("$scope.pc.parentvalue",$scope.pc.parentvalue);
       console.log("Child $scope",$scope);

       //to revert the original parent value
       console.log("$scope.$parent.parentvalue",$scope.$parent.parentvalue);
    };

    //controller as a syntax
    function parentController2()
    {
        var vm = this;
        vm.value = 1;
    }

    childController2.$inject = ['$scope'];
    function childController2($scope)
    {
        var vm = this;
        vm.value = 5;
        console.log("$Scope.child",$scope);
    }

})();