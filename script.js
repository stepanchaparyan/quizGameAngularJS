	var flagApp = angular.module('flagApp', ['ngRoute']);
	flagApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/flag1', {
				templateUrl : 'pages/flag1.html',
				controller  : 'flag1Controller'
			})
			.when('/flag2', {
				templateUrl : 'pages/flag2.html',
				controller  : 'flag2Controller'
			});
	});

	flagApp.controller('mainController', function($scope) {
		$scope.message = 'Everyooone come and see how good I look!';
	});

	flagApp.controller('flag1Controller', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	flagApp.controller('flag2Controller', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
