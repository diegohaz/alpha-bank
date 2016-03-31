define(function(require) {
  'use strict';

  return function(module) {
    module.factory('financeService', financeService);
  }

  financeService.$inject = ['$http', 'baseUrl', 'key'];

  function financeService($http, baseUrl, key) {
    var headers = {'WEB-API-key': key};

    return {
      getAccounts: getAccounts,
      getExchangeRates: getExchangeRates
    };

    function getAccounts() {
      return $http.get(baseUrl + 'transparentAccounts/accounts', {headers: headers});
    }

    function getExchangeRates() {
      return $http.get(baseUrl + 'exchangerates', {headers: headers});
    }
  }
});
