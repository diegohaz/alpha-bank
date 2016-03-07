'use strict';

/**
 * @ngdoc overview
 * @name alphaBankApp
 * @description
 * # alphaBankApp
 *
 * Main module of the application.
 */
angular
  .module('alphaBankApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
