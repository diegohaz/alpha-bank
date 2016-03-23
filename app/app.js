(function() {
'use strict';

angular.module('app', [
  'ngComponentRouter',
  'app.dashboard',
  'app.page2'
])

.config(function($locationProvider) {
  // $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'abApp')

.component('abApp', {
  templateUrl: 'app/app.html',
  $routeConfig: [
    {path: '/dashboard', name: 'Dashboard', component: 'abDashboard', useAsDefault: true},
    {path: '/page2', name: 'Page2', component: 'abPage2'}
  ]
});
})();