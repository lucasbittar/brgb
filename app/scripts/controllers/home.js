/**
 * Project Name: B/RGB | Home Controller
 * Author: Lucas Bittar Magnani
 * Created: 20150901
 */

(function() {

  /**
   * AngularJS Setup
   */

  angular
      .module('app.homeController', [])
      .controller('HomeHightlightCtrl', [
        '$scope',
        homeHightlightCtrl,
      ]);

  /**
   * Home Controller
   * @param {object} $scope
   */

  function homeHightlightCtrl($scope) {

    // home controller
    console.log('home controller');
  }

})();
