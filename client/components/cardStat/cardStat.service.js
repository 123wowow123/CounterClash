'use strict';

(function() {

	function CardStatResource($resource) {

		return $resource('/api/cards/showByNameIncludeStat/:name', {
			name: '@name'
		});
	}

	angular.module('counterclashApp.cardStat')
	.factory('CardStat', CardStatResource);

})();
