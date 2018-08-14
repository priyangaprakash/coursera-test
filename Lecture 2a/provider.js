(function(){
    'use strict';

    angular.module('provider',[])
    .controller('shoppingListCtrl',shoppingList)
    .provider('shoppingListService',shoppingListServiceProvider);

    shoppingList.$inject = ['shoppingListService'];
    function shoppingList(shoppingListService)
    {
       var vm = this; 

        vm.items = shoppingListService.getItem();
        vm.name = "";
        vm.qty = "";
        vm.addItem = function(){
            try{
                  shoppingListService.addItem(vm.name,vm.qty);
            }
            catch(error){
                  vm.errorMessage = error.message;
            }
        };

        vm.removeItem = function(itemindex)
        {
            shoppingListService.removeItem(itemindex);
        }
    };

    function shoppingListService(maxItems)
    {
        var service = this;
        var items = [];
        
            service.addItem = function(name,qty)
            {
                if((maxItems === undefined)||(maxItems!==undefined)&&(items.length<maxItems))
              {
                    var item = {name:name,qty:qty};
                     items.push(item);
              }
              else{
                  throw new Error("Maxitems ("+ maxItems +") reached!!");
                  }
            };

            service.getItem = function(){
                return items;
            };

            service.removeItem = function(itemindex){
                items.splice(itemindex,1);
            };

    };

    function shoppingListServiceProvider(){
        var provider = this;
        provider.default = {maxitem:10};
        provider.$get = function(){
            var list = new shoppingListService(provider.default.maxitem);
        return list;
        };
       
    };
})();