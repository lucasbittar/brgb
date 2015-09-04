/**
 * Project Name: B/RGB | Main Controller
 * Author: Lucas Bittar Magnani
 * Created: 20150901
 */

(function() {

  /**
   * AngularJS Setup
   */

  angular
      .module('app.mainController', [])
      .controller('MainCtrl', [
        '$scope',
        '$location',
        MainCtrl
      ]);

  /**
   * Home Controller
   * @param {dependency} $scope, $location
   */

  function MainCtrl($s, $location) {
    // console.log('main');
    // $s.navTitle = $location.path();
    // console.log($s.navTitle);
    $s.navigation = function(targetLink) {

      $s.navTitle = targetLink;
      $location.path('/' + targetLink, false);

    };
  }

})();