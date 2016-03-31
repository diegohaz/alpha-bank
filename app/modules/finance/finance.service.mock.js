angular.mock.module('app.finance', function($provide) {
  $provide.factory('financeService', function($q) {
    return {
      getAccounts: getAccounts,
      getExchangeRates: getExchangeRates
    };

    var getAccounts = jasmine
      .createSpy('getAccounts')
      .andCallFake(function() {
        return [
          {accBankCode: 4004, accNumber: 434213245, balance: 332.14, actualizationDate: 1458848202571},
          {accBankCode: 4004, accNumber: 434213045, balance: 100.14, actualizationDate: 1458848202371},
          {accBankCode: 4004, accNumber: 430000245, balance: 331.14, actualizationDate: 1458848202271}
        ];
      });

    var getExchangeRates = jasmine
      .createSpy('getExchangeRates')
      .andCallFake(function() {
        return [
          {name: 'apple', currBuy: 112.34, currSell: 332.14},
          {name: 'apple', currBuy: 112.34, currSell: 100.14},
          {name: 'apple', currBuy: 112.34, currSell: 331.14}
        ];
      });
  });
});
