'use strict';

(function() {

class CardsDetailController {
	constructor($stateParams, Card) {
    	// Use the User $resource to fetch card by name
    	this.card = Card.get({name:$stateParams.name});
	}
}

angular.module('counterclashApp')
.controller('CardsDetailController', CardsDetailController);

})();
