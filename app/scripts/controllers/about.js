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
)
// 自定义过滤器
.filter('fromFrewToMuch', function() {
  return function(input) {
    return input.sort((a, b) => {
      return a >= b ? 1 : -1
    })
  }
})

function getAdj($scope) {
  $scope.adj = {
    presonality: 'strong',
  };
  $scope.date = new Date(),
  console.log($scope);
  $scope.num = [23, 21, 43, 69, 55, 28, 12];
  $scope.findLuckNum = function(num) {
    return num % 3 === 0
  }
}
