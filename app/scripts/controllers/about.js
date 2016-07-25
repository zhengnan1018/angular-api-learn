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
.directive('happy', function() {
  return {
    restrict: 'AE',
    scope: {
      myLinkUrl: '@', //@绑定策略
      myLinkText: '=someContext'
    },
    templateUrl: '../../views/templates/testTpl.html'
  }
})
.run(function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.googleLogo = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  }, 2000)
})
.controller('childController', function($scope) {
  $scope.innerText = 'I am inner Text'
})

function getAdj($scope) {
  $scope.adj = {
    presonality: 'strong',
  };
  $scope.linkText = 'Go to Google'
  $scope.date = new Date(),
  console.log($scope);
  $scope.num = [23, 21, 43, 69, 55, 28, 12];
  $scope.findLuckNum = function(num) {
    return num % 3 === 0
  }
}
