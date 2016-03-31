define(function(require) {
  'use strict';

  var angular = require('angular');

  var module = angular
    .module('app.finance', [])
    .value('baseUrl', 'https://api.csas.cz/sandbox/webapi/api/v1/')
    .value('key', '77cdfc33-e36d-4ae7-bd1a-e2aa3ade979c');

  require('./finance.service')(module);

  return module;
});