'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:EventBindCtrl
 * @description
 * # EventBindCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('EventBindCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.name = 'wang'
  });
