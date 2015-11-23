var app = angular.module('app', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html'
    })
    .otherwise({redirectTo: '/'});
}]);
