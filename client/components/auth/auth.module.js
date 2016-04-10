'use strict';

angular.module('counterclashApp.auth', [
  'counterclashApp.constants',
  'counterclashApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
