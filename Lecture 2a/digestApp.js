(function(){
    'use strict';
    angular.module('digestApp',[])
    .controller('digestController',digestFunction);

    digestFunction.$inject = ['$scope','$timeout'];
    function digestFunction($scope,$timeout){
         $scope.numberOfWatchers = function(){
             console.log($scope); //1) It will provides many properties, in that we need only $$watchersCount
             console.log(" Number of Watchers: ",$scope.$$watchersCount);
         };

         $scope.countOnce = 0;
         $scope.counter = 0;
         $scope.name = "priya";
         $scope.onceCount = function(){
             $scope.countOnce = 1; // 2) only updating once
         };
          //5) creating another function for watching updated counter everytime
         $scope.upOnceCount = function(){
             $scope.counter++;
         };
         //3) to see the difference we will set a watch for countOnce variable
         //first way of creating watcher
        //  $scope.$watch('countOnce',function(newvalue,oldvalue){
        //     console.log('OldValue:',oldvalue);
        //     console.log('NewValue:',newvalue); 
        //     // 4) the above console statements will display once with watcher count as '1' 
        //     //because the function onceCount() is updating the 'countOnce' value only once.
        //  });
        
        //  //6) watch function to see the updation on counter
        //  $scope.$watch('counter',function(newvalue,oldvalue){
        //     console.log('CounterOldValue:',oldvalue);
        //     console.log('CounterNewValue:',newvalue); 
        //     //7)The above console stmts will displays the incremented value for counter every time
        //  });

         //8) by defining 2 watch functions, the number of watchers is 2 here.

         //9) Now iam commenting both watches for next experiment and place {{}} in html file
         //second way of creating watcher
           $scope.$watch(function(){
               console.log("Digest loop executed");
           });

        //10) detailed output
        //   # of watchers will be : 3 (2 for countOnce and counter and 1 for newly created watch)
        //   once the browser opened: Digest loop will be 2 (initially)[because the onceCount and counter is reflected in {{}} in html]
        //   onceCount clicked: Digest loop will be 2[1 for changing the value and another for checking if there is any change after changing the
        //   value (commonly called dirty check)] [after this every time, it will do only dirty check]
        // counter clicked: Digest loop will be 2 (initially) and after that it will increment twice everytime (change value and dirty check)


        //11) Let's see the third way of creating watcher in html page


        //12) use of $digest

        $scope.cntr = 0;

        //commenting this for another experiment

        // $scope.myCounter = function(){
        //     setTimeout(function(){ 
        //         $scope.cntr++;
        //         console.log("counter incremented!");
        //         $scope.$digest(); // to kickoff our specified timeout manually
        //     },2000);
        //     //this timeout is put into the event queue which is completely seperable from 
        //     //myCounter event. So to kick off the digest loop we will give $digest
        //  };



        //   $scope.myCounter = function(){
        //     setTimeout(function(){ 
        //         $scope.$apply(function(){ //$apply to catch the exceptions
        //             $scope.cntr++;
        //             console.log("counter incremented!");
        //         });                
        //     },2000);
            //this timeout is put into the event queue which is completely seperable from 
            //myCounter event. So to kick off the digest loop we will give $digest
         //};

         $scope.myCounter = function(){
             $timeout(function(){
                 $scope.cntr++;
                 console.log("counter incremented!");
             },2000);
         };
    };
})();