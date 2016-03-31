define(function(require) {
  'use strict';

  var layout  = require('../layout/layout');

  var module = angular.module('app.page2', [
    'app.layout'
  ]);

  require('./page2.component')(module);

  return module;
});