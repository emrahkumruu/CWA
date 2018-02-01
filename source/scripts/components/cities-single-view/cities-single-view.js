/**
 * @author Emrah Kumru
 */

'use strict';

angular.module('cwa.citySingleView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/city/:ID', {
            templateUrl: 'templates/city-single.html',
            controller: 'citySingleViewCtrl'
        });
    }])

    .controller('citySingleViewCtrl', function ($scope, $routeParams, Services) {

        var id = parseInt($routeParams.ID);

        Services.getJson().then(function (response) {
            var data = angular.fromJson(response.data);

            $scope.city = data.filter(function (city) {
                return city.id === id;
            })
        });

    });