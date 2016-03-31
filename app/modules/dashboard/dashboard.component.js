define(function(require) {
  'use strict';

  return function(module) {
    module.component('abDashboard', {
      templateUrl: 'app/modules/dashboard/dashboard.component.html',
      controller: DashboardController
    });
  }

  function DashboardController() {

  }
});
