(function(){
    'use strict';

    var shoppingList1 = ["book","pen","pencil","eraser","sharpner","note"];

    var shoppingList2 = [
        {
            name:"book",
            qty:4
        },{
            name:"pen",
            qty:3
        },{
            name:"pencil",
            qty:2
        },{
            name:"note",
            qty:8
        }
    ];
    angular.module('shoppingApp',[])
    .controller('shoppingController',shoppingFunction);
    shoppingFunction.$inject = ['$scope'];

    function shoppingFunction($scope)
    {
       $scope.shoppingList1 = shoppingList1;
       $scope.shoppingList2 = shoppingList2;

       $scope.addItem = function(){
           var newItem = {
               name: $scope.newItemName,
               qty:$scope.newItemQty
            };
            $scope.shoppingList2.push(newItem);
       };
    };
})();