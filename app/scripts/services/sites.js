/**
 * Project Name: B/RGB | Sites Service
 * Author: Lucas Bittar Magnani
 * Created: 20151107
 */

(function() {

  'use strict';

  /**
   * AngularJS Setup
   */

  angular
      .module('app')
      .service('Sites', [
        '$q',
        '$http',
        sitesService
      ]);

  /**
   * Sites Service
   * @param {Object} $scope
   */

  function sitesService($q, $http) {

    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'api/sites.json'
    })
    .then(function(data) {
      deferred.resolve(data);
    });

    this.getSites = function() {
      return deferred.promise;
    };

  }

})();
