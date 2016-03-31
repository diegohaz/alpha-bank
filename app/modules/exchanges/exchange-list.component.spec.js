'use strict';

describe('Exchange List', function() {
  var $compile, $rootScope;

  beforeEach(function() {
    module('app.finance');
    module('app.exchanges');
  });

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function(done) {
    var element = $compile("<ab-exchange-list></ab-exchange-list>")($rootScope);
    $rootScope.$digest();
    console.log(element);
  });

});