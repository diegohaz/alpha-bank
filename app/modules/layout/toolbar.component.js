define(function(require) {
  'use strict';

  return function(module) {
    module.component('abToolbar', {
      templateUrl: 'app/modules/layout/toolbar.component.html',
      controller: ToolbarController
    });
  }

  function ToolbarController() {

  }
});
