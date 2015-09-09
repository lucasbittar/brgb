/**
 * Project Name: B/RGB | App
 * Author: Lucas Bittar Magnani
 * Created: 20150901
 */

(function() {

  'use strict';

  /**
   * Angular setup
   */

  angular
      .module('app', [

        'ngAnimate',
        'ngRoute'

      ])
      .filter('getById', function() {
        return function(input, id) {
          var i = 0;
          var len = input.length;
          for (; i < len; i++) {
            if (+input[i].id == +id) {
              return input[i];
            }
          }
          return null;
        };
      })
      .config(['$routeProvider',
        function($routeProvider) {
        $routeProvider
          .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'SitesHightlightCtrl'
          })
          .when('/sites/:id', {
            templateUrl: 'templates/sites.html',
            controller: 'SitesHightlightCtrl',
            reloadOnSearch: true
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
            redirectTo: '/home'
          });

        // $locationProvider.html5Mode(false);
        // $locationProvider.hashPrefix("!");

      }]);

})();
