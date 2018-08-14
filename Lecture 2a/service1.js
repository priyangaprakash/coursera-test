(function(){
    'use strict';

    angular.module('service1',[])
    .controller('shoppingListAdd',itemList)
    .controller('shoppingListShow',showItem)
    .service('shoppingListService1',serviceOne);

    function serviceOne()
    {
        var service = this;
        var items = [];
       service.addItem = function(name,qty)
        {
            var item = {name:name,
            qty:qty
        };
        items.push(item);
       };

      service.show = function()
       {
           return items;
       };

       service.removeItem = function(itemindex)
       {
            items.splice(itemindex,1);
       };
    
    }

    itemList.$inject = ['shoppingListService1'];
    function itemList(shoppingListService1)
    {
        var itemAdder = this;
        itemAdder.itemN = " ";
        itemAdder.itemQ = " ";
        itemAdder.addItem = function(){
           shoppingListService1.addItem(itemAdder.itemN,itemAdder.itemQ);
        };
    }

    showItem.$inject = ['shoppingListService1'];
    function showItem(shoppingListService1)
    {
        var showList = this;
        showList.items = shoppingListService1.show();

        showList.removeItem = function(itemindex)
        {
            shoppingListService1.removeItem(itemindex);
        };
    }
})();