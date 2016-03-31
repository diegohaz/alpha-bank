require.config({
  baseUrl: 'app/',
  paths: {
    'angular': '../node_modules/angular/angular.min',
    'ngComponentRouter': '../node_modules/@angular/router/angular1/angular_1_router'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngComponentRouter: ['angular']
  }
});