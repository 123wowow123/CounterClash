'use strict';

angular.module('counterclashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsController',
        controllerAs: 'vm',
      });
  });
