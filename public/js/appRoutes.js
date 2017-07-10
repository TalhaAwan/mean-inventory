angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/items.html',
			controller: 'ItemController'
		})

        .when('/items', {
            templateUrl: 'views/items.html',
            controller: 'ItemController'
        })



        .otherwise({
            redirectTo: '/'
        });

	$locationProvider.html5Mode(true);

}]);