'use strict';

(function() {

	function CardResource($resource) {

		$resource('/api/cards/showByNameIncludeStat/:name', {
			name: '@name'
		});

		return $resource('/api/cards/:name', {
			name: '@name'
		});
	}

	angular.module('counterclashApp.card')
	.factory('Card', CardResource);

})();
