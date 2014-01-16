'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies']);

var myNileModule = angular.module("myNileModule",[]);

eventsApp.factory('myCache', function($cacheFactory) {
	return $cacheFactory('myCache', {capacity:3});
});