describe('Finance Service', function() {
  var financeService, $httpBackend;

  beforeEach(module('app.finance'));

  beforeEach(inject(function(_financeService_, _$httpBackend_) {
    financeService = _financeService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#getAccounts', function() {
    var accounts;

    beforeEach(function() {
      $httpBackend
        .expectGET('https://api.csas.cz/sandbox/webapi/api/v1/transparentAccounts/accounts')
        .respond([
          {accBankCode: 4004, accNumber: 434213245, balance: 332.14, actualizationDate: 1458848202571},
          {accBankCode: 4004, accNumber: 434213045, balance: 100.14, actualizationDate: 1458848202371},
          {accBankCode: 4004, accNumber: 430000245, balance: 331.14, actualizationDate: 1458848202271}
        ]);

      financeService.getAccounts().then(function(res) {
        accounts = res.data;
      });

      $httpBackend.flush();
    });

    it('should return an array', function() {
      expect(accounts).toEqual(jasmine.any(Array));
    });

    it('should have length of 3', function() {
      expect(accounts.length).toEqual(3);
    });

    it('should contain accBankCode property', function() {
      expect(accounts).toContain(jasmine.objectContaining({accBankCode: 4004}));
    });

  });

  describe('#getExchangeRates', function() {
    var rates;

    beforeEach(function() {
      $httpBackend
        .expectGET('https://api.csas.cz/sandbox/webapi/api/v1/exchangerates')
        .respond([
          {name: 'apple', currBuy: 112.34, currSell: 332.14},
          {name: 'apple', currBuy: 112.34, currSell: 100.14},
          {name: 'apple', currBuy: 112.34, currSell: 331.14}
        ]);

      financeService.getExchangeRates().then(function(res) {
        rates = res.data;
      });

      $httpBackend.flush();
    });

    it('should return an array', function() {
      expect(rates).toEqual(jasmine.any(Array));
    });

    it('should have length of 3', function() {
      expect(rates.length).toEqual(3);
    });

    it('should contain name property', function() {
      expect(rates).toContain(jasmine.objectContaining({name: 'apple'}));
    });

  });
});