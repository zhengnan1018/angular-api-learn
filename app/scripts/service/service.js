angular.module('learnAngularApp')
  .factory('greeter', function() {
    return {
      greet: function(msg) {
        console.log(msg);
      }
    }
  })
  .service('GithubService', GithubService);

  var GithubService = function($timeout) {
    var timeRender = $timeout(function() {
      return new Date();
    }, 1000)
    this.getTime = timeRender
  }
