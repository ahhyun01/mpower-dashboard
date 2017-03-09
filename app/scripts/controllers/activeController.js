'use strict';
/**
 * @ngdoc function
 * @name mpowerDashboard.controller:TableCtrl
 * @author ahhyun01@cs.washington.edu
 * @description
 * # MainCtrl
 * Controller of the mpowerDashboard
 */
angular.module('mpowerDashboard')
  .controller('ActiveController', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {
    $scope.stories = [];

    // Sorts Pivotal API results in descending order of the date of created_at.
    function compare(a,b) {
      if (a.created_at > b.created_at)
        return -1;
      if (a.created_at < b.created_at)
        return 1;
      return 0;
    }

    // Get stories with tag: started, in sorted order by created_date descending.
    $http({
      method: 'GET',
      url: 'https://www.pivotaltracker.com/services/v5/projects/861879/stories?with_state=started'
    }).then(function (response) {

      $scope.stories = response.data;
      $scope.stories.sort(compare);
      if ($scope.stories.length == 0) {
        $('.dataTable_wrapper').html("<div class='text-danger'> The search result was empty. </div>");
      }
    }).catch (function () {
      $('.dataTable_wrapper').html("<div class='text-danger'> There was an error in the API getter. </div>");
    })
}]);
