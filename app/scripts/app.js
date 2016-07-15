'use strict';

/**
 * @ngdoc overview
 * @name learnAngularApp
 * @description
 * # learnAngularApp
 *
 * Main module of the application.
 */
angular
  .module('learnAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/eventBind', {
        templateUrl: 'views/eventBind.html',
        controller: 'EventBindCtrl',
        controllerAs: 'eventBind'
      })
      .when('/form_example', {
        templateUrl: 'views/form_example.html',
        controller: 'formExampleCtrl',
        controllerAs: 'form_example'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
