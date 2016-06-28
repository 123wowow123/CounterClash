'use strict';

(function() {

	class CardsDetailController {
		constructor($stateParams, CardStat) {
    	// Use the User $resource to fetch card by name
    	//this.card = Card.get({name:$stateParams.name});

        this.card = CardStat.get({name:$stateParams.name});

    }
}

angular.module('counterclashApp')
.controller('CardsDetailController', CardsDetailController);

})();
