define(function(require) {
  'use strict';

  return function(module) {
    module.component('abExchangeList', {
      templateUrl: 'app/modules/exchanges/exchange-list.component.html',
      controller: ExchangeListController
    });
  }

  ExchangeListController.$inject = ['financeService'];

  function ExchangeListController(financeService) {
    var $ctrl = this;

    financeService.getExchangeRates().then(function(res) {
      $ctrl.rates = res.data;
    });
  }
});
