define(function(require) {
  'use strict';

  var angular = require('angular');
  var finance = require('../finance/finance');

  var module = angular.module('app.accounts', [
    'app.finance'
  ]);

  require('./account-list.component')(module);

  return module;
});