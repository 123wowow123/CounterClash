'use strict';

angular.module('counterclashApp')
  .controller('OauthButtonsCtrl', function($window) {
    this.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
