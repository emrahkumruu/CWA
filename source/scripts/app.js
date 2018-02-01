/**
 * @author Emrah Kumru
 */

'use strict';

angular.module('cwa', [
    'ngRoute',
    'cwa.cities',
    'cwa.citySingleView'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/cities'});

}])
    .factory('Services', function ($http) {

        return {
            getJson: function () {
                return $http.get("data/data.json")
            }
        }
    });