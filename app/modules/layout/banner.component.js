define(function(require) {
  'use strict';

  return function(module) {
    module.component('abBanner', {
      templateUrl: 'app/modules/layout/banner.component.html',
      controller: BannerController
    });
  }

  function BannerController() {

  }
});
