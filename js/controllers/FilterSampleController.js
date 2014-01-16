'use strict';

eventsApp.controller('FilterSampleController',
    function($scope, durationsFilter /* name of the filter followed by Filter */) {
        $scope.y = 'y';
        $scope.family = [
        	{name:"ahmed",age:30},
        	{name:"samar",age:23},
        	{name:"ayoub",age:60},
        	{name:"mama",age:46}
        ];

        

    }
);


eventsApp.controller("nile",function($scope,$filter){
	$scope.name = "ayoub";
	console.log($filter("date")("1288323623006"));
});



eventsApp.controller("firstCtrl",function($scope,$filter){
	$scope.name = "the scope name here";
	console.log($scope)
});