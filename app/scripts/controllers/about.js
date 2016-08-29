'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('AboutCtrl', function ($scope, greeter) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    getAdj($scope);
    $scope.people = [
      {name: 'Ari', city: 'Beijing'},
      {name: 'Jessy', city: 'Shanghai'},
      {name: 'Hongcan', city: 'Shanghai'},
      {name: 'Kate', city: 'Nanjing'}
    ];
    $scope.equation = {}
    $scope.change = function() {
      $scope.equation.output = parseInt($scope.equation.x) + 2
    };
    $scope.fields = [
      {placeholder: 'Username', isRequired: true},
      {placeholder: 'Password', isRequired: true},
      {placeholder: 'Email (optional)', isRequired: false}
    ];
    $scope.decrement = function() {
      $scope.count -- ;
    };
    $scope.cities = [
      {name: 'Shanghai'},
      {name: 'Nanjing'},
      {name: 'Suzhou'},
      {name: 'New York'},
      {name: 'Chicago'}
    ];
    $scope.student = {
      name: null
    };
    $scope.students = [];
    $scope.submitEg = function() {
      if ($scope.student.name) {
        $scope.students.push({name: $scope.student.name});
        $scope.student = "";
      }
    };
    $scope.generateNumber = function() {
      return $scope.x = Math.floor(Math.random() * 10 + 1)
    };
    $scope.sayHello = function() {
      greeter.greet($scope.info);
    }
    $scope.renderTimer = function() {
      return '22'
      // console.log(333);
      // console.log(GithubService.getTime());
      // return GithubService.getTime()
    }
    // $scope.renderTimer = 'test'
  }
)
// 自定义过滤器
.filter('fromFrewToMuch', function() {
  return function(input) {
    return input.sort((a, b) => {
      return a >= b ? 1 : -1;
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
.directive('myScopedriective', function() {
  return {
    restrict: 'AE',
    // 创建隔离作用域
    scope: {
      myProperty: '@',
    },
    template: 'Inside myScopedriective: {{ myProperty }}'
  }
})
.directive('sideBox', function() {
  return {
    restrict: 'AE',
    scope: {
      title: '@'
    },
    transclude: true,
    template: '<div class="sideBox">'
            + '<div class="content">'
            + '<h2 class="header">{{ title }}</h2>'
            + '<span ng-transclude class="content"></span>'
            + '</div>'
            + '</div>',

  }
})
.directive('linking', function() {
  return {
    restrict: 'AE',
    transclude: true,
    controller: function ($scope, $element, $transclude, $log) {
      $transclude(function(clone) {
        console.log(clone);
        var a = angular.element('<a>');
        a.attr('href', "www.aaa.com");
        a.text(clone.text());
        $log.info('Created new a tag in link directive');
        $element.append(a);
        var b = angular.element('<div>');
        b.text("abc");
        $element.append(b);
      })
    }
  }
})
.directive('testDir', function() {
  return {
    restrict: 'AE',
    controller: function($scope) {
      console.log(this);
      console.log($scope);
      this.fun1 = function() {
        console.log(22);
      }
    }
  }
})
.directive('innerTestdir', function() {
  return {
    restrict: 'AE',
    require: '^testDir',
    scope: {},
    link: function(scope, ele, attr, testDirCtrl) {
      // console.log(testDirCtrl.fun1);
      testDirCtrl.fun1();
    }
  }
})
.directive('test-ngmodel', function() {
  return {
    require: '?ngModel',
    link: function(scope, ele, attr, ngModelCtrl) {
      if (!ngModelCtrl) return;

    }
  }
})
.run(function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.googleLogo = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    // $scope.renderTimer = 
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
  $scope.date = new Date();
  console.log($scope);
  $scope.num = [23, 21, 43, 69, 55, 28, 12];
  $scope.findLuckNum = function(num) {
    return num % 3 === 0;
  }
}
