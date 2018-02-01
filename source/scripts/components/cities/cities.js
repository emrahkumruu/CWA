/**
 * @author Emrah Kumru
 */

'use strict';

angular.module('cwa.cities', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cities', {
            templateUrl: 'templates/cities.html',
            controller: 'citiesCtrl'
        });
    }])

    .controller('citiesCtrl', function($scope,Services) {

        $scope.title = 'Welcome to Cities Weather App';

        Services.getJson().then(function (response) {
            $scope.Cities = angular.fromJson(response.data);
        });

    });