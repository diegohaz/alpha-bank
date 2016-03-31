define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = angular.module('app.layout', []);

  require('./banner.component')(module);
  require('./sidebar.component')(module);
  require('./toolbar.component')(module);

  return module;
});