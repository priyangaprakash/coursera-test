(function(){
    'use strict';
    angular.module('bindingApp',[])
    .controller('bindingController',bindingFunction);

    bindingFunction.$inject = ['$scope'];
    function bindingFunction($scope)
    {
        $scope.firstName = "pandi";
       // $scope.fullName = " ";
        $scope.setFullName = function(){
            $scope.fullName = $scope.firstName +' '+"priyanga";
        };
        $scope.showNumberOfWatchers = function(){
            console.log("# of watchers",$scope.$$watchersCount);
        };
        $scope.logFirstName = function(){
            console.log("FirstName",$scope.firstName);
        };
        $scope.logFullName = function(){
            console.log("fullName",$scope.fullName);
        };
    }
})();
//detailed output
//initially , a single watcher is set for <input> element and all the log value will reflect correctly
//however the 1-time binding won't display any value as watcher is not set automatically for 1-time binding
//so initial output is "# of watchers : 1,log of full name and firstname will display and 
//1-time binding output won't get displayed"

//the reason is if the property is As I've told you before, the second the property that is 1-time bound gets initialized, that's when the Angular digest cycle goes ahead and loops over all the watchers and outputs this value to the browser and then removes the watcher for it. That means that the HTML template that has this property 1-time bound to it will never get updated again because the watcher is no longer there.

//So the way we can fix this is simply by commenting this line out. And that means that the very first time that this property will get initialized 
//will be Inside of our setFullName function, which gets triggered by us pressing the button

//  So let's go ahead and save that. Let's go back to our browser. Let's click # of Watchers and now things look much better. Now there's 2 watchers. If we log the first name, it's Yaakov, log the full name, it's undefined, which is exactly how we want it at this point. Because if it was defined already, it would have been too late, the watcher would have been removed. So now if we click Set Full Name, you'll see it will appear right here, but if we click log # of Watchers again, it's no longer 2, it's 1. Because once we bounded 1-time bounded to our HTML template, we no longer need that watcher. We could save that performance and remove the watcher from our watchers list. So therefore, that is why we only have 1 here. Meanwhile, the 2-way binding will continue to work. So for example, if I log the full name right now, it's Yaakov Chaikin. But if I update the name, let's say, put AAA in here, that means that the firstName property in the scope would have gotten updated with an extra three letter As at the end. Which means that if I execute setFullName right now, it will make the fullName property be Yaakov with triple As, and then my last name Chaikin. That will not change what is displayed in our HTML template because that was a 1-time binding. However, the full name, if we reset the full name, as you can see here, the fullName property will actually contain the updated first name. Because that is something that we manually updated inside of our setFullName function, making the outside scope that full name the new value of the first name which was updated plus the string the last name. 