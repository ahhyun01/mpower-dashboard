(function() {
  'use strict';

  angular.
    module('mpowerDashboard').
    factory('Configs', ['$resource',
      function($resource) {
        return $resource('apps/data/:data.json', {}, {
          query: {
            method: 'GET',
            params: {data: 'mpower-data'}
          }
        });
      }
    ]);
})();
