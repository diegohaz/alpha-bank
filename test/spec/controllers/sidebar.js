'use strict';

describe('Controller: SidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('alphaBankApp'));

  var SidebarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarCtrl = $controller('SidebarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(SidebarCtrl.awesomeThings.length).toBe(3);
  });
});
