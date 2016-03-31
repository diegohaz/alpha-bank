define(function(require) {
  var angular   = require('angular');
  var router    = require('ngComponentRouter');
  var dashboard = require('modules/dashboard/dashboard');
  var page2     = require('modules/page2/page2');

  var app = angular.module('app', [
    'ngComponentRouter',
    'app.dashboard',
    'app.page2'
  ]);

  app.config(function($locationProvider) {
    // $locationProvider.html5Mode(true);
  });

  app.value('$routerRootComponent', 'abApp');

  app.component('abApp', {
    templateUrl: 'app/app.html',
    $routeConfig: [
      {path: '/dashboard', name: 'Dashboard', component: 'abDashboard', useAsDefault: true},
      {path: '/page2', name: 'Page2', component: 'abPage2'}
    ]
  });

  return app;
});
