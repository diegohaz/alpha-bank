define(function(require) {
  'use strict';

  var angular   = require('angular');
  var layout    = require('../layout/layout');
  var exchanges = require('../exchanges/exchanges');
  var accounts  = require('../accounts/accounts');

  var module = angular.module('app.dashboard', [
    'app.layout',
    'app.exchanges',
    'app.accounts'
  ]);

  require('./dashboard.component')(module);

  return module;
});