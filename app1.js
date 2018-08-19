(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MatchSearchService',MatchSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



 NarrowItDownController.$inject = ['MatchSearchService'];
function NarrowItDownController(MatchSearchService) {
    var menu = this;
    var items = [];
    var check = [];
    menu.desc = " chicken ";
    //var citems = [];
    var promise = MatchSearchService.getMenuItems();
    promise.then(function (response) {
      menu.items = response.data.menu_items;
      console.log(menu.items[0]);  
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  
    
}

MatchSearchService.$inject = ['$http', 'ApiBasePath'];
function MatchSearchService($http, ApiBasePath)
{
    var service = this;
    var items = [];
    service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")       
    });
   
    service.items = response.$$state;
    console.log("response",service.items.value);
    return response;
    
  };

}
})();