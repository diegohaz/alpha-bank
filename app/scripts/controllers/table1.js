'use strict';

/**
 * @ngdoc function
 * @name alphaBankApp.controller:Table1Ctrl
 * @description
 * # Table1Ctrl
 * Controller of the alphaBankApp
 */
angular.module('alphaBankApp')
  .controller('Table1Ctrl', function($scope) {
    $scope.title = 'Table 1';
    $scope.price = 43241.4356;
    $scope.items = [
      {id: 'GR4102313210381093', price1: 10232.22, price2: 15333.6421},
      {id: 'GR4102313210381093', price1: 10132.22, price2: 11333.6421},
      {id: 'GR4102313210381093', price1: 15232.22, price2: 5333.6421},
      {id: 'GR4102313210381093', price1: 11232.22, price2: 15783.6421},
      {id: 'GR4102313210381093', price1: 14232.22, price2: 13277.6421},
      {id: 'GR4102313210381093', price1: 11232.22, price2: 13345.6421},
      {id: 'GR4102313210381093', price1: 12202.22, price2: 12205.6421},
      {id: 'GR4102313210381093', price1: 9232.22, price2: 14463.6421}
    ];
  });
