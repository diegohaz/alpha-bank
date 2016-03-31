define(function(require) {
  'use strict';

  var angular = require('angular');
  var finance = require('../finance/finance');

  var module = angular.module('app.exchanges', [
    'app.finance'
  ]);

  require('./exchange-list.component')(module);

  return module;
});