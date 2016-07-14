'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    getAdj($scope)
  }
);

function getAdj($scope) {
  $scope.adj = {
    presonality: 'strong'
  };
  console.log($scope);
}
