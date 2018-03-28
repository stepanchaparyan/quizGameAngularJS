var flagApp = angular.module('flagCtrl', ['ui.router']);

flagApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
  	.state ("home", {
    		url: '/',
    		templateUrl: 'pages/home.html'
  	})
		.state ("flag1", {
				url: '/flag1',
				templateUrl: 'pages/flag1.html'
		})
		.state ("flag2", {
				url: '/flag2',
				templateUrl: 'pages/flag2.html'
		})
		.state ("flag3", {
				url: '/flag3',
				templateUrl: 'pages/flag3.html'
		})
		$urlRouterProvider.otherwise('/');
//		$locationProvider.html5Mode(true);
});
