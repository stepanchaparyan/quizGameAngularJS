var flagApp = angular.module('flagCtrl', ['ngRoute', 'ngMessages']);

flagApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
  	.when ("/", {
    		templateUrl: 'pages/home.html',
				controller: "homeCtrl"
  	})
		.when ("/flag1", {
    		templateUrl: 'pages/flag1.html',
				controller: "flag1Ctrl"
  	})
		.when ("/flag2", {
    		templateUrl: 'pages/flag2.html',
				controller: "flag2Ctrl"
  	})
		.when ("/flag3", {
    		templateUrl: 'pages/flag3.html',
				controller: "flag3Ctrl"
  	})
		.otherwise({
				redirectTo: '/'
		});
		$locationProvider.html5Mode(true);

});
