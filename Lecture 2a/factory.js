(function(){
    'use strict';

    angular.module('factory',[])
    .controller('shoppingList1Ctrl',shoppingList1)
    .controller('shoppingList2Ctrl',shoppingList2)
    .factory('myFactory',myfactory);

    function myService(maxItems)
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
        //}
        

    }


    function myfactory(){
      var factory = function(maxitems)
      {
          return new myService(maxitems);
      }
      return factory;
    };


    shoppingList1.$inject = ['myFactory'];

    function shoppingList1(myFactory)
    {
        var vm = this;
        var list1 = myFactory();

        vm.items = list1.getItem();
        vm.name = "";
        vm.qty = "";
        vm.addItem = function(){
            list1.addItem(vm.name,vm.qty);
        };

        vm.removeItem = function(itemindex)
        {
            list1.removeItem(itemindex);
        }
    }

     shoppingList2.$inject = ['myFactory'];
      function shoppingList2(myFactory)
      {
         var vm = this;
        var list2 = myFactory(3);

        vm.items = list2.getItem();
        vm.name = "";
        vm.qty = "";
        vm.addItem = function(){
            try{
                  list2.addItem(vm.name,vm.qty);
            }
            catch(error){
                  vm.errorMessage = error.message;
            }
            
        };

        vm.removeItem = function(itemindex)
        {
            list2.removeItem(itemindex);
        }
      };
})();