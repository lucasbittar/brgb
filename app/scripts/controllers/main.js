/**
 * Project Name: B/RGB | Main Controller
 * Author: Lucas Bittar Magnani
 * Created: 20150901
 */

(function() {

  'use strict';

  /**
   * AngularJS Setup
   */

  angular
      .module('app')
      .controller('MainCtrl', [
        '$scope',
        '$location',
        mainCtrl
      ]);

  /**
   * Home Controller
   * @param {dependency} $scope, $location
   */

  function mainCtrl($s, $location) {

    $s.navigation = function(targetLink) {

      $s.navTitle = targetLink;
      $location.path('/' + targetLink, false);

    };

    $s.navTitle = $location.path();
    $s.navTitle = $s.navTitle.substring(1);

  }

})();
