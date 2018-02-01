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

        Services.getJson().then(function (response) {
            $scope.Cities = angular.fromJson(response.data);
        });

    });
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
//# sourceMappingURL=cwa.js.map
