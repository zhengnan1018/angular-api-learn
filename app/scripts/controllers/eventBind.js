'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:EventBindCtrl
 * @description
 * # EventBindCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('EventBindCtrl', function ($scope, $interpolate) {
    console.log($interpolate);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.counter = 10;
    $scope.addIt = function() {
      if ($scope.counter >= 0 && $scope.counter <= 19) {
        $scope.counter ++
      } else {
        alert('can\'exceed 20')
      }
    };
    $scope.minusIt = function() {
      if ($scope.counter > 0 && $scope.counter <= 20) {
        $scope.counter --
      } else {
        alert('can\'under 0')
      }
    };
    $scope.$watch('emailBody', function(body) {
      if (body) {
        let template = $interpolate(body)
        console.log(template);
        $scope.previewText = template({to: $scope.to})
      }
    })
  });
