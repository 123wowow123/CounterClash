'use strict';

angular.module('counterclashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsController',
        controllerAs: 'vm',
      }).state('cards2', {
        url: '/cards',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsController',
        controllerAs: 'vm',
      });
  });
