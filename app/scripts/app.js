/**
 * Project Name: B/RGB | App
 * Author: Lucas Bittar Magnani
 * Created: 20150901
 */

(function() {

  /**
   * Angular setup
   */

  angular
      .module('app', [

        'ngAnimate',
        'ngRoute',
        'app.homeController',
        'app.mainController'

      ])
      .config(['$routeProvider',
        function ($routeProvider) {
        $routeProvider
          .when('/sites', {
            templateUrl: 'templates/home.html',
            controller: 'HomeHightlightCtrl'
          })
          .when('/directory', {
            templateUrl: 'templates/directory.html'
            // controller: 'HomeHightlightCtrl'
          })
          .when('/about', {
            templateUrl: 'templates/404.html'
            // controller: 'HomeHightlightCtrl'
          })
          .when('/submit', {
            templateUrl: 'templates/404.html'
            // controller: 'HomeHightlightCtrl'
          })
          .otherwise({
            redirectTo: '/sites'
          });
          // .when('/', {
          //   redirectTo: '/'
          // });

          // $locationProvider.html5Mode(false);
          // $locationProvider.hashPrefix("!");

      }]);

})();
