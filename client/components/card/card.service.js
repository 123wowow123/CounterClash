'use strict';

(function() {

function CardResource($resource) {
  return $resource('/api/cards/:id/:controller', {
    id: '@_id'
  });
}

angular.module('counterclashApp.card')
  .factory('Card', CardResource);

})();
