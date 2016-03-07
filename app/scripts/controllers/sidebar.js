'use strict';

/**
 * @ngdoc function
 * @name alphaBankApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the alphaBankApp
 */
angular.module('alphaBankApp')
  .controller('SidebarCtrl', function($scope) {
    $scope.links = [
      {label: 'Dashboard', icon: 'glyphicon-th-large', active: true},
      {label: 'Page 2', icon: 'glyphicon-home'},
      {label: 'Page 3', icon: 'glyphicon-euro'},
      {label: 'Page 4', icon: 'glyphicon-transfer'},
      {label: 'Page 5', icon: 'glyphicon-calendar'}
    ];
  });
