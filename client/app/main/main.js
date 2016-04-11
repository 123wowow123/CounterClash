'use strict';

angular.module('counterclashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        template: '<main></main>'
      });
  });
