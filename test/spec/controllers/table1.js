'use strict';

describe('Controller: Table1Ctrl', function () {

  // load the controller's module
  beforeEach(module('alphaBankApp'));

  var Table1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Table1Ctrl = $controller('Table1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Table1Ctrl.awesomeThings.length).toBe(3);
  });
});
