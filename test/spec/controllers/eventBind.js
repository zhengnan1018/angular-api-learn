'use strict';

describe('Controller: EventBindCtrl', function () {

  // load the controller's module
  beforeEach(module('learnAngularApp'));

  var EventBindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventBindCtrl = $controller('EventBindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventBindCtrl.awesomeThings.length).toBe(3);
  });
});
