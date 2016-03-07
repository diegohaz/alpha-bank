'use strict';

describe('Controller: Table2Ctrl', function () {

  // load the controller's module
  beforeEach(module('alphaBankApp'));

  var Table2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Table2Ctrl = $controller('Table2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});
