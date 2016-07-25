'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:formExampleCtrl
 * @description
 * # formExampleCtrl
 * Controller of the learnAngularApp
 */

 var usernameArr = [
   {
     _id: 'ncirnro',
     username: 'zhengnan'
   },
   {
     _id: 'ncirncnriovr',
     username: 'liupeng'
   },
   {
     _id: 'vniotro',
     username: 'xuhongcan'
   }
 ]

angular.module('learnAngularApp')
  .controller('formExampleCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submitted = false;
    $scope.checkUsername = function(arr, name) {
      var flag = true
      arr.forEach(function(item) {
        if (item.username === name) {
          flag = false
          return
        }
      })
      return flag
    };
    $scope.signupForm = function() {
      $scope.signup_form.submitted = true
      console.log($scope);
    };
    // $scope.errorMsgDir =
  })
  // ensure-unique directive
  .directive('ensureUnique', function() {
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, c) {
        scope.$watch(attrs.ngModel, function(context) {
          if (!context) return
          if (scope.checkUsername(usernameArr, context)) {
            c.$setValidity('unique', true)
          } else {
            c.$setValidity('unique', false)
          }
        })
      }
    }
  })
