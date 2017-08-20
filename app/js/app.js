var myApp = angular.module('myApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		}).
		when('/add', {
			templateUrl: 'views/add.html',
			controller: 'AddController'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);