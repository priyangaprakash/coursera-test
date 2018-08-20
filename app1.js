(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MatchSearchService',MatchSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



 NarrowItDownController.$inject = ['MatchSearchService'];
function NarrowItDownController(MatchSearchService) {
    var menu = this;
    var items = this;
    var check = [];
    menu.desc = "";
    menu.getSearchedMenuItems = function(desc)
    {
      var promise = MatchSearchService.getMenuItems(desc); 

   //single value
   /*
    promise.then(function (success) 
    {
      menu.items = success;
      console.log("menu:",menu.items);  
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
    */

    //array of values
   promise.then(function (success) 
   {
     menu.check = success;
     console.log("menu:",menu.check[0].name); //its an array  
   })
   .catch(function (error) {
     console.log("Something went terribly wrong.");
   });
    }
   
  
    
}

MatchSearchService.$inject = ['$http', 'ApiBasePath'];
function MatchSearchService($http, ApiBasePath)
{
    var service = this;
    var items = [];
   // var desc = this;
    service.getMenuItems = function (desc) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")       
    });
    var d = desc;
    console.log("descr:",d);  
    return response.then(function(success)
    {
      //returning a single value
      /*
          desc = success.data.menu_items[0].description;
          console.log("desc:",desc);
          return desc;
      */


      //returning multiple value

      items = success.data.menu_items;
      console.log("Length:",items.length);
      console.log("desc list:",items[0].description);
     
      if(items[0].description.search(desc)!=-1)
      {
        console.log("descr: inside",desc);
        console.log("true");
      }
      else{
        console.log("false");
      }


      var c = new RegExp(desc);
      if(c.test(items[0].description)){
         console.log("tr");
      }
      else{
        console.log("fal");
      }
      return items;
    }); 
   
  };

}
})();