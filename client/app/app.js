'use strict';

angular.module('counterclashApp', [
  'counterclashApp.auth',
  'counterclashApp.admin',
  'counterclashApp.constants',
  'counterclashApp.card',
  'counterclashApp.cardStat',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'angular.filter'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
