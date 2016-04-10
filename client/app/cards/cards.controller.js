'use strict';

(function() {

	class CardsController {
		constructor(Card) {
    // Use the User $resource to fetch all users
    this.cards = Card.query();
}
}

angular.module('counterclashApp')
.controller('CardsController', CardsController);

})();
