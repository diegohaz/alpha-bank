define(function(require) {
  'use strict';

  return function(module) {
    module.component('abSidebar', {
      templateUrl: 'app/modules/layout/sidebar.component.html',
      controller: SidebarController,
      replace: true
    });
  }

  function SidebarController($rootRouter) {
    this.nav = [
      {label: 'Dashboard', name: 'Dashboard', icon: 'glyphicon-th-large', active: true},
      {label: 'Page 2', name: 'Page2', icon: 'glyphicon-home'}
    ];
  }
});
