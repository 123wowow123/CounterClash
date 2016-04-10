'use strict';

angular.module('counterclashApp', [
  'counterclashApp.auth',
  'counterclashApp.admin',
  'counterclashApp.constants',
  'counterclashApp.card',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });