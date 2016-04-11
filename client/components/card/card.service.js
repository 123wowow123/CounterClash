'use strict';

(function() {

function CardResource($resource) {
  return $resource('/api/cards/:name', {
    name: '@name'
  });
}

angular.module('counterclashApp.card')
  .factory('Card', CardResource);

})();
