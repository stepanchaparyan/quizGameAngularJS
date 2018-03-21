var flagApp = angular.module('flagCtrl', ['ui.router']);

flagApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
  	.state ("home", {
    		url: '/',
    		templateUrl: 'pages/home.html',
				controller: "homeCtrl"
  	})
		.state ("flag1", {
				url: '/flag1',
				templateUrl: 'pages/flag1.html',
				controller: "flag1Ctrl"
			})
		.state ("flag2", {
				url: '/flag2',
				templateUrl: 'pages/flag2.html',
				controller: "flag2Ctrl"
		})
		$urlRouterProvider.otherwise('/');
//		$locationProvider.html5Mode(true);
});

flagApp.controller("homeCtrl", function ($scope) {
		$scope.message = "home";
})

flagApp.controller("flag2Ctrl", function ($scope) {
		$scope.message = "flag2";
})
