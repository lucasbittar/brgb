/**
 * Project Name: B/RGB | Sites Controller
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
      .controller('SitesHightlightCtrl', [
        '$scope',
        '$location',
        '$routeParams',
        '$filter',
        'Sites',
        sitesHightlightCtrl
      ]);

  /**
   * sites Controller
   * @param {Object} $scope
   */

  function sitesHightlightCtrl($s, $location, $routeParams, $filter, Sites) {

    console.log('sites controller');

    var sitesSites = Sites.getSites();

    sitesSites.then(function(response) {
      $s.sites = response.data.sites;
    });

    $s.detailSite = function(siteId, siteTaxonomy) {
      $location.path('/sites/' + siteTaxonomy, false);
      $s.targetSite = $routeParams.id;

      var found = $filter('getById')($s.sites, siteId);
      $s.selectedSite = found;
      console.log('obj: ' + $s.selectedSite);
    };

    $s.targetSite = $routeParams.id;

  }

})();
