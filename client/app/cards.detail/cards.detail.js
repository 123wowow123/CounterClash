'use strict';

angular.module('counterclashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/cards/:name',
        templateUrl: 'app/cards.detail/cards.detail.html',
        controller: 'CardsDetailController',
        controllerAs: 'vm',
      });
  });
