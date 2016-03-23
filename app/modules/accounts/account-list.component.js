(function() {
'use strict';

angular.module('app.accounts')
  .component('abAccountList', {
    templateUrl: 'app/modules/accounts/account-list.component.html',
    controller: AccountListController
  });

AccountListController.$inject = ['financeService'];

function AccountListController(financeService) {
  var $ctrl = this;

  this.points = [
    {label: 'Membership Reward Points', value: 13000},
    {label: 'Bonus Points', value: 36000}
  ];

  financeService.getAccounts().then(function(res) {
    $ctrl.accounts = res.data;
  });
}
})();
