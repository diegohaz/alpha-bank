'use strict';

/**
 * @ngdoc function
 * @name alphaBankApp.controller:Table2Ctrl
 * @description
 * # Table2Ctrl
 * Controller of the alphaBankApp
 */
angular.module('alphaBankApp')
  .controller('Table2Ctrl', function ($scope) {
    $scope.title = 'Table 2';
    $scope.points = [
      {label: 'Membership Reward Points', value: 13000},
      {label: 'Bonus Points', value: 36000}
    ];
    $scope.items = [
      {
        image: 'images/card1.png',
        title: 'Platinum Luxury Card American Express',
        id: 'GR4102313210381093',
        price1: 79.50,
        price2: 15333.6421
      },{
        image: 'images/card2.png',
        title: 'Enter Bonus American Express',
        id: 'GR4102313210381093',
        price1: 79.50,
        price2: 11333.6421
      }
    ];
  });
