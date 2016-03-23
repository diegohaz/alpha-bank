(function() {
'use strict';

angular.module('app.finance')
  .factory('financeService', financeService);

financeService.$inject = ['$http'];

function financeService($http) {
  var base = 'https://api.csas.cz/sandbox/webapi/api/v1/';
  var headers = {'WEB-API-key': '77cdfc33-e36d-4ae7-bd1a-e2aa3ade979c'};

  return {
    getAccounts: getAccounts,
    getExchangeRates: getExchangeRates
  };

  function getAccounts() {
    return $http.get(base + 'transparentAccounts/accounts', {headers: headers});
  }

  function getExchangeRates() {
    return $http.get(base + 'exchangerates', {headers: headers});
  }
}
})();
