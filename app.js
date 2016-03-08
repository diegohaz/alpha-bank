'use strict';

angular.module('alphaBankApp', []);

// MainCtrl
angular.module('alphaBankApp')
  .controller('MainCtrl', function($scope) {
    $scope.nav = [
      {label: 'Dashboard', icon: 'glyphicon-th-large', active: true},
      {label: 'Page 2', icon: 'glyphicon-home'},
      {label: 'Page 3', icon: 'glyphicon-euro'},
      {label: 'Page 4', icon: 'glyphicon-transfer'},
      {label: 'Page 5', icon: 'glyphicon-calendar'}
    ];
  });


// ExchangesCtrl
angular.module('alphaBankApp')
  .controller('ExchangesCtrl', ['$scope', 'ApiFactory', function($scope, ApiFactory) {
    $scope.title = 'Exchange Rates';

    ApiFactory.getExchangeRates().then(function(res) {
      $scope.rates = res.data;
    })
  }]);


// AccountsCtrl
angular.module('alphaBankApp')
  .controller('AccountsCtrl', ['$scope', 'ApiFactory', function($scope, ApiFactory) {
    $scope.title = 'Transparent Accounts';
    $scope.points = [
      {label: 'Membership Reward Points', value: 13000},
      {label: 'Bonus Points', value: 36000}
    ];

    ApiFactory.getAccounts().then(function(res) {
      $scope.accounts = res.data;
    })
  }]);


// ApiFactory
angular.module('alphaBankApp')
  .factory('ApiFactory', ['$http', function($http) {
    var base = 'https://api.csas.cz/sandbox/webapi/api/v1/';
    var headers = {'WEB-API-key': '77cdfc33-e36d-4ae7-bd1a-e2aa3ade979c'};
    var ApiFactory = {};

    ApiFactory.getAccounts = function() {
      return $http.get(base + 'transparentAccounts/accounts', {headers: headers});
    }

    ApiFactory.getExchangeRates = function() {
      return $http.get(base + 'exchangerates', {headers: headers});
    }

    return ApiFactory;
  }]);