/**
 * @author Emrah Kumru
 */

'use strict';

angular.module('cwa.cities', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cities', {
            templateUrl: 'templates/cities.html',
            controller: 'citiesCtrl'
        });
    }])

    .controller('citiesCtrl', function ($scope, Services) {

        $scope.title = 'Welcome to Cities Weather App';
        $scope.searchStatus = false;
        $scope.searchResult = [];


        Services.getJson().then(function (response) {
            $scope.Cities = angular.fromJson(response.data);
        });


    })
    .directive('citySearch', function () {

        return {
            restrict: 'A',
            scope: {
                Cities: '=',
                searchStatus: '=',
                searchResult: '='
            },
            link: function (scope, element, attrs) {

                scope.$watch(function () {

                    element.bind("keydown keypress", function (event) {


                        if (this.value.length <= 3) {
                            return true;
                        } else if (scope.$parent.searchStatus) {
                            scope.$parent.searchStatus = false;
                            scope.$parent.searchResult = [];

                        }
                        var _self = this;

                        var result = scope.$parent.Cities.filter(function (city) {
                            var cityName = city.name.toLowerCase(),
                                value = _self.value.toLowerCase();

                            return cityName.indexOf(value) > -1
                        });

                        if (result) {
                            scope.$parent.searchStatus = true;
                            scope.$parent.searchResult = result;

                        } else {
                            scope.$parent.searchStatus = false;
                            scope.$parent.searchResult = [];

                        }
                        scope.$apply();

                    });

                });

            }

        }
    });